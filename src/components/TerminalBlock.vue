<template>
  <div class="bg-editorial-surface border border-editorial-border rounded-lg p-6 max-w-2xl mx-auto font-mono text-sm">
    <div
      v-for="(line, i) in lines"
      :key="i"
      class="terminal-line"
      :style="{ animationDelay: `${0.2 + i * 0.3}s` }"
    >
      <span v-if="line.prompt" class="text-editorial-accent">{{ line.prompt }}</span>
      <span :class="line.prompt ? 'text-editorial-ink ml-2' : 'text-editorial-secondary ml-4'">{{ line.output }}</span>
    </div>
    <div class="terminal-line mt-1" style="animation-delay: 2s">
      <span class="text-editorial-accent">$ </span>
      <span class="inline-block w-2 h-4 bg-editorial-accent animate-pulse align-middle ml-1"></span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  lines: { type: Array, required: true },
})
</script>
