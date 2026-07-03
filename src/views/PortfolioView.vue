<template>
  <div class="view-container max-w-6xl mx-auto px-6 pt-16 pb-32">
    <div class="eyebrow mb-2">All Projects</div>
    <h1 class="font-serif text-4xl font-medium text-editorial-ink mb-10">作品集</h1>

    <div v-if="sortedProjects.length" class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <ProjectCard
        v-for="project in sortedProjects"
        :key="project.id"
        :project="project"
        external
        @click="openExternal(project.url)"
      />
    </div>
    <p v-else class="text-editorial-muted font-sans">Coming soon.</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'
import projects from '../data/projects.json'

const sortedProjects = computed(() =>
  [...projects].sort((a, b) => (b.sort || 0) - (a.sort || 0))
)

function openExternal(url) {
  window.open(url, '_blank', 'noopener')
}
</script>
