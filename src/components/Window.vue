<template>
  <div
    v-if="!win.minimized"
    @mousedown="focus"
    :style="{
      left: win.x + 'px',
      top: win.y + 'px',
      width: win.width + 'px',
      height: win.height + 'px',
      zIndex: win.zIndex,
    }"
    :class="[
      'os-window absolute flex flex-col',
      win.maximized ? '!inset-0 !left-0 !top-0 !w-full !h-[calc(100%-40px)] !rounded-none' : '',
      isActive ? 'ring-2 ring-terminal-green/30' : ''
    ]"
  >
    <!-- 标题栏 -->
    <div
      @mousedown="startDrag"
      class="os-titlebar cursor-move select-none"
    >
      <div class="flex items-center gap-2">
        <img :src="win.icon" class="w-4 h-4" />
        <span class="text-sm font-serif text-terminal-text">{{ win.title }}</span>
      </div>
      <div class="flex items-center gap-1.5">
        <button @click.stop="onMinimize" class="os-btn bg-terminal-yellow/80 text-terminal-card" title="最小化">_</button>
        <button @click.stop="onMaximize" class="os-btn bg-terminal-green/80 text-terminal-card" title="最大化">□</button>
        <button @click.stop="onClose" class="os-btn bg-terminal-red/80 text-terminal-card" title="关闭">×</button>
      </div>
    </div>

    <!-- 内容区 -->
    <div class="flex-1 overflow-hidden bg-terminal-card rounded-b-lg relative">
      <div v-if="loading" class="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-terminal-card z-10">
        <div class="w-8 h-8 border-3 border-terminal-border border-t-terminal-green rounded-full animate-spin"></div>
        <p class="text-terminal-muted text-sm">正在加载应用...</p>
      </div>
      <iframe
        v-if="win.url"
        :src="win.url"
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
        class="w-full h-full border-none"
        @load="loading = false"
      />
      <component v-else-if="win.component" :is="systemComponent" @loaded="loading = false" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, markRaw } from 'vue'
import { useWindowManager } from '../stores/windowManager.js'
import AboutApp from './system/AboutApp.vue'
import ContactApp from './system/ContactApp.vue'

const props = defineProps({
  win: { type: Object, required: true },
})

const store = useWindowManager()
const loading = ref(true)
const isActive = computed(() => store.activeId === props.win.id)

const componentMap = { AboutApp, ContactApp }
const systemComponent = computed(() => props.win.component ? markRaw(componentMap[props.win.component]) : null)

function focus() { store.focusWindow(props.win.id) }
function onClose() { store.closeWindow(props.win.id) }
function onMinimize() { store.minimizeWindow(props.win.id) }
function onMaximize() { store.toggleMaximize(props.win.id) }

function startDrag(e) {
  if (props.win.maximized) return
  if (e.target.tagName === 'BUTTON' || e.target.closest('button')) return
  const startX = e.clientX
  const startY = e.clientY
  const origX = props.win.x
  const origY = props.win.y
  const desktopEl = document.getElementById('desktop-area')
  const bounds = desktopEl ? desktopEl.getBoundingClientRect() : { left: 0, top: 0, width: window.innerWidth, height: window.innerHeight - 40 }

  function onMove(ev) {
    let nx = origX + (ev.clientX - startX)
    let ny = origY + (ev.clientY - startY)
    // 边界限制：标题栏必须可见
    nx = Math.max(-props.win.width + 100, Math.min(bounds.width - 60, nx))
    ny = Math.max(0, Math.min(bounds.height - 40, ny))
    store.moveWindow(props.win.id, nx, ny)
  }
  function onUp() {
    document.removeEventListener('mousemove', onMove)
    document.removeEventListener('mouseup', onUp)
  }
  document.addEventListener('mousemove', onMove)
  document.addEventListener('mouseup', onUp)
}
</script>
