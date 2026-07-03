<template>
  <div
    id="desktop-area"
    @click="selectedId = null"
    class="relative w-full h-full overflow-hidden"
  >
    <!-- 桌面图标网格 -->
    <div class="absolute top-4 left-4 flex flex-col flex-wrap content-start gap-2 h-[calc(100%-60px)]">
      <DesktopIcon
        v-for="app in sortedApps"
        :key="app.id"
        :app="app"
        :selected="selectedId === app.id"
        @select="onSelect"
        @open="onOpen"
      />
    </div>

    <!-- 窗口层 -->
    <Window
      v-for="win in store.windows"
      :key="win.id"
      :win="win"
    />

    <!-- 任务栏 -->
    <Taskbar :apps="apps" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useWindowManager } from '../stores/windowManager.js'
import DesktopIcon from './DesktopIcon.vue'
import Window from './Window.vue'
import Taskbar from './Taskbar.vue'
import apps from '../data/apps.json'

const store = useWindowManager()
const selectedId = ref(null)

const sortedApps = computed(() => [...apps].sort((a, b) => (b.sort || 0) - (a.sort || 0)))

function onSelect(id) { selectedId.value = id }
function onOpen(app) { store.openApp(app) }
</script>
