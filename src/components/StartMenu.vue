<template>
  <div
    v-if="visible"
    class="absolute bottom-10 left-2 w-64 bg-terminal-card/95 backdrop-blur-sm border border-terminal-border rounded-lg shadow-lg py-2 z-[10000]"
  >
    <div class="px-3 py-1 text-xs text-terminal-muted border-b border-terminal-border mb-1">所有应用</div>
    <button
      v-for="app in sortedApps"
      :key="app.id"
      @click="openApp(app)"
      class="w-full flex items-center gap-3 px-3 py-2 hover:bg-terminal-hover transition-colors text-left"
    >
      <img :src="app.icon" class="w-6 h-6" />
      <span class="text-sm text-terminal-text font-serif">{{ app.name }}</span>
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useWindowManager } from '../stores/windowManager.js'

const props = defineProps({
  apps: { type: Array, required: true },
  visible: { type: Boolean, default: false },
})
const emit = defineEmits(['close'])
const store = useWindowManager()

const sortedApps = computed(() => [...props.apps].sort((a, b) => (b.sort || 0) - (a.sort || 0)))

function openApp(app) {
  store.openApp(app)
  emit('close')
}
</script>
