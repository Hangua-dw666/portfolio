<template>
  <div class="project-card group" @click="$emit('click', project)">
    <div class="aspect-video bg-editorial-bg rounded mb-4 overflow-hidden">
      <img :src="project.cover" :alt="project.title" class="w-full h-full object-cover" />
    </div>
    <div class="flex items-start justify-between gap-2">
      <h3 class="font-serif text-lg font-medium text-editorial-ink">{{ project.title }}</h3>
      <span v-if="external" class="text-editorial-muted group-hover:text-editorial-accent text-sm">↗</span>
    </div>
    <p class="text-sm text-editorial-secondary mt-1 line-clamp-2">{{ project.description }}</p>
    <div class="flex flex-wrap gap-1.5 mt-3">
      <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: { type: Object, required: true },
  external: { type: Boolean, default: false },
})
defineEmits(['click'])
</script>
