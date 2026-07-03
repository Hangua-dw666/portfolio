<template>
  <div class="absolute bottom-0 left-0 right-0 h-10 bg-terminal-hover/90 backdrop-blur-sm border-t border-terminal-border flex items-center px-2 gap-1 z-[9999]">
    <!-- 开始按钮 -->
    <button
      @click="showStart = !showStart"
      :class="['os-taskbar-item flex items-center gap-1.5', showStart ? 'os-taskbar-item-active' : 'hover:bg-terminal-border/50']"
    >
      <span class="text-terminal-green font-bold">▶</span>
      <span class="font-serif">开始</span>
    </button>

    <div class="w-px h-6 bg-terminal-border mx-1"></div>

    <!-- 已打开窗口列表 -->
    <div class="flex items-center gap-1 flex-1 overflow-x-auto">
      <button
        v-for="win in store.windows"
        :key="win.id"
        @click="store.toggleFromTaskbar(win.id)"
        :class="[
          'os-taskbar-item flex items-center gap-1.5 whitespace-nowrap',
          store.activeId === win.id && !win.minimized ? 'os-taskbar-item-active' : 'hover:bg-terminal-border/50 text-terminal-muted'
        ]"
      >
        <img :src="win.icon" class="w-4 h-4" />
        <span class="text-xs">{{ win.title }}</span>
      </button>
    </div>

    <!-- 时钟 -->
    <div class="text-sm text-terminal-text font-mono px-2 tabular-nums">
      {{ time }}
    </div>

    <!-- 开始菜单 -->
    <StartMenu :apps="apps" :visible="showStart" @close="showStart = false" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useWindowManager } from '../stores/windowManager.js'
import StartMenu from './StartMenu.vue'

defineProps({
  apps: { type: Array, required: true },
})
const store = useWindowManager()
const showStart = ref(false)
const time = ref('')

function updateTime() {
  const d = new Date()
  const h = String(d.getHours()).padStart(2, '0')
  const m = String(d.getMinutes()).padStart(2, '0')
  time.value = `${h}:${m}`
}
let timer
onMounted(() => { updateTime(); timer = setInterval(updateTime, 1000) })
onUnmounted(() => clearInterval(timer))
</script>
