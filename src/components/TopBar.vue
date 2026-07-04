<template>
  <header class="fixed top-0 left-0 right-0 h-16 bg-editorial-bg/80 backdrop-blur-sm border-b border-editorial-border z-40">
    <div class="h-full px-8 flex items-center justify-between">
      <!-- 左：品牌名 -->
      <button
        @click="nav.setView('home')"
        class="font-serif text-xl font-medium text-editorial-ink hover:text-editorial-accent transition-colors"
      >
        GuaHub
      </button>

      <!-- 右：横向导航链接 -->
      <nav class="flex items-center gap-8">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          @click="nav.setView(tab.id)"
          class="relative font-sans text-sm transition-colors py-1"
          :class="nav.currentView === tab.id
            ? 'text-editorial-ink font-medium'
            : 'text-editorial-secondary hover:text-editorial-ink'"
        >
          {{ tab.label }}
          <span
            v-if="nav.currentView === tab.id"
            class="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-editorial-accent"
          ></span>
        </button>
      </nav>
    </div>
  </header>
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
