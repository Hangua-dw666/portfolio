<template>
  <div class="view-container max-w-7xl mx-auto px-8 pt-24 pb-32 min-h-full">
    <div class="grid grid-cols-12 gap-8">
      <!-- 左侧留空（占 5 列） -->
      <div class="col-span-12 md:col-span-5"></div>

      <!-- 右侧桌面图标网格（占 7 列） -->
      <div class="col-span-12 md:col-span-7">
        <div class="eyebrow mb-6">Projects</div>
        <div
          v-if="sortedProjects.length"
          class="grid grid-cols-3 sm:grid-cols-4 gap-3"
        >
          <DesktopIcon
            v-for="project in sortedProjects"
            :key="project.id"
            :project="project"
            @click="modal.show(project)"
          />
        </div>
        <p v-else class="text-editorial-muted font-sans text-sm">
          Coming soon.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useModal } from '../stores/modal.js'
import DesktopIcon from '../components/DesktopIcon.vue'
import projects from '../data/projects.json'

const modal = useModal()

const sortedProjects = computed(() =>
  [...projects].sort((a, b) => (b.sort || 0) - (a.sort || 0))
)
</script>
