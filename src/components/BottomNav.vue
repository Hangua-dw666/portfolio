<template>
  <nav class="fixed bottom-0 left-0 right-0 h-16 bg-editorial-bg border-t border-editorial-border flex z-50">
    <button
      v-for="tab in tabs"
      :key="tab.id"
      @click="nav.setView(tab.id)"
      class="flex-1 flex flex-col items-center justify-center relative transition-colors"
      :class="nav.currentView === tab.id ? 'text-editorial-accent' : 'text-editorial-secondary hover:text-editorial-ink'"
    >
      <span class="font-serif text-base font-medium">{{ tab.label }}</span>
      <span
        v-if="nav.currentView === tab.id"
        class="absolute bottom-2 w-6 h-0.5 bg-editorial-accent"
      ></span>
    </button>
  </nav>
</template>

<script setup>
import { useNavigation } from '../stores/navigation.js'
const nav = useNavigation()
const tabs = [
  { id: 'home', label: '主页' },
  { id: 'portfolio', label: '作品集' },
  { id: 'about', label: '我的' },
]
</script>
