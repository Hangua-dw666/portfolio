<template>
  <nav class="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
    <div class="bg-editorial-surface border border-editorial-border rounded-full shadow-sm flex p-1">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        @click="nav.setView(tab.id)"
        class="px-6 py-2 rounded-full font-sans text-sm transition-colors"
        :class="nav.currentView === tab.id
          ? 'bg-editorial-accent text-editorial-bg font-medium'
          : 'text-editorial-secondary hover:text-editorial-ink'"
      >
        {{ tab.label }}
      </button>
    </div>
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
