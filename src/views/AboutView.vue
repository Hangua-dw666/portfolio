<template>
  <div class="view-container max-w-4xl mx-auto px-6 pt-16 pb-32">
    <div class="eyebrow mb-2">About</div>
    <h1 class="font-serif text-4xl font-medium text-editorial-ink mb-10">我的</h1>

    <div class="grid gap-10 md:grid-cols-2">
      <!-- 左栏：终端介绍 -->
      <TerminalBlock :lines="aboutLines" />

      <!-- 右栏：联系卡片 -->
      <div class="space-y-3">
        <a
          href="mailto:1872285531@qq.com"
          class="block bg-editorial-surface border border-transparent hover:border-editorial-border rounded-lg p-4 transition-colors"
        >
          <div class="text-xs text-editorial-muted uppercase tracking-wider mb-1">Email</div>
          <div class="text-editorial-ink font-sans">1872285531@qq.com</div>
        </a>
        <a
          href="https://github.com/13531246490"
          target="_blank"
          class="block bg-editorial-surface border border-transparent hover:border-editorial-border rounded-lg p-4 transition-colors"
        >
          <div class="text-xs text-editorial-muted uppercase tracking-wider mb-1">GitHub</div>
          <div class="text-editorial-ink font-sans">@13531246490</div>
        </a>
        <div class="bg-editorial-surface border border-transparent rounded-lg p-4">
          <div class="text-xs text-editorial-muted uppercase tracking-wider mb-2">Skills</div>
          <div class="flex flex-wrap gap-1.5">
            <span v-for="skill in skills" :key="skill" class="tag">{{ skill }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TerminalBlock from '../components/TerminalBlock.vue'

const aboutLines = [
  { prompt: '$ cat about.md', output: '' },
  { prompt: '', output: '你好，我是你的名字。' },
  { prompt: '', output: '一个热爱用代码构建工具的人。' },
  { prompt: '', output: '' },
  { prompt: '$ fortune', output: '' },
  { prompt: '', output: '"找到你喜欢的事，然后让它杀死你。" — Bukowski' },
]

const skills = ['Vue 3', 'Vite', 'Tailwind', 'Node.js', 'Express', 'MySQL', 'Supabase', 'Vercel']
</script>
