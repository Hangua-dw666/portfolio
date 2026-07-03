<template>
  <div
    v-if="modal.open && modal.currentProject"
    class="fixed inset-0 z-[100] flex items-center justify-center p-4"
  >
    <!-- 遮罩 -->
    <div
      class="absolute inset-0 bg-editorial-inverse/40"
      @click="modal.hide"
    ></div>

    <!-- 弹窗主体 -->
    <div
      class="modal-enter relative bg-editorial-bg border border-editorial-border rounded-lg flex flex-col"
      style="width: 90vw; max-width: 1200px; height: 80vh; box-shadow: 0 8px 24px rgba(25, 24, 23, 0.08);"
    >
      <!-- 标题栏 -->
      <div class="flex items-center justify-between px-5 py-3 border-b border-editorial-border">
        <div class="flex items-center gap-3">
          <img :src="modal.currentProject.cover" class="w-8 h-8 rounded object-cover" />
          <h3 class="font-serif text-base font-medium text-editorial-ink">{{ modal.currentProject.title }}</h3>
        </div>
        <button
          @click="modal.hide"
          class="text-editorial-muted hover:text-editorial-ink text-2xl leading-none px-2"
          title="关闭"
        >×</button>
      </div>

      <!-- 内容区 -->
      <div class="flex-1 relative bg-editorial-surface rounded-b-lg overflow-hidden">
        <div v-if="loading" class="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <div class="w-8 h-8 border-2 border-editorial-border border-t-editorial-accent rounded-full animate-spin"></div>
          <p class="text-editorial-muted text-sm font-sans">正在加载应用...</p>
        </div>
        <iframe
          :src="modal.currentProject.url"
          sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
          class="w-full h-full border-none"
          @load="loading = false"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useModal } from '../stores/modal.js'

const modal = useModal()
const loading = ref(true)

watch(() => modal.open, (v) => { if (v) loading.value = true })

function onKey(e) { if (e.key === 'Escape' && modal.open) modal.hide() }
onMounted(() => document.addEventListener('keydown', onKey))
onUnmounted(() => document.removeEventListener('keydown', onKey))
</script>
