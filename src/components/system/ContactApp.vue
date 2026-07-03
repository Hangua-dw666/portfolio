<template>
  <div class="p-6 overflow-y-auto h-full">
    <h2 class="text-xl text-terminal-green font-serif mb-4">$ cat contact.txt</h2>
    <div class="space-y-4">
      <a href="mailto:1872285531@qq.com" class="flex items-center gap-3 p-3 rounded bg-terminal-hover hover:bg-terminal-border transition-colors">
        <span class="text-2xl">📮</span>
        <div>
          <p class="text-xs text-terminal-muted">Email</p>
          <p class="text-terminal-text text-sm">1872285531@qq.com</p>
        </div>
      </a>
      <a href="https://github.com/13531246490" target="_blank" class="flex items-center gap-3 p-3 rounded bg-terminal-hover hover:bg-terminal-border transition-colors">
        <span class="text-2xl">🐙</span>
        <div>
          <p class="text-xs text-terminal-muted">GitHub</p>
          <p class="text-terminal-text text-sm">@13531246490</p>
        </div>
      </a>
    </div>
    <p class="text-terminal-muted text-xs mt-6">欢迎联系我，无论是项目合作还是技术交流。</p>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
const emit = defineEmits(['loaded'])
onMounted(() => emit('loaded'))
</script>
