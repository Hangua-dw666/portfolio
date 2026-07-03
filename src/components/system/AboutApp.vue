<template>
  <div class="p-6 overflow-y-auto h-full">
    <h2 class="text-xl text-terminal-green font-serif mb-4">$ cat about.md</h2>
    <div class="space-y-3 text-terminal-text text-sm leading-relaxed">
      <p>你好，我是 <span class="text-terminal-green font-bold">你的名字</span>。</p>
      <p>一个热爱用代码构建工具的人。这里是我的个人作品集，每个图标都是我做过的项目，双击即可体验。</p>
      <p class="text-terminal-muted">技术栈：Vue 3 / Node.js / Supabase / Vercel</p>
      <p class="text-terminal-muted">座右铭：找到你喜欢的事，然后让它杀死你。 —— Bukowski</p>
    </div>
    <div class="mt-6 pt-4 border-t border-terminal-border">
      <h3 class="text-terminal-green font-serif mb-2">$ ls skills/</h3>
      <div class="flex flex-wrap gap-2">
        <span class="px-2 py-1 rounded bg-terminal-hover text-xs">Vue 3</span>
        <span class="px-2 py-1 rounded bg-terminal-hover text-xs">Vite</span>
        <span class="px-2 py-1 rounded bg-terminal-hover text-xs">Tailwind CSS</span>
        <span class="px-2 py-1 rounded bg-terminal-hover text-xs">Node.js</span>
        <span class="px-2 py-1 rounded bg-terminal-hover text-xs">Express</span>
        <span class="px-2 py-1 rounded bg-terminal-hover text-xs">MySQL</span>
        <span class="px-2 py-1 rounded bg-terminal-hover text-xs">Supabase</span>
        <span class="px-2 py-1 rounded bg-terminal-hover text-xs">Vercel</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
const emit = defineEmits(['loaded'])
onMounted(() => emit('loaded'))
</script>
