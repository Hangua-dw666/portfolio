<template>
  <div class="view-container max-w-6xl mx-auto px-6 pt-16 pb-32">
    <!-- 终端开场 -->
    <section class="text-center mb-20">
      <h1 class="font-serif font-medium text-editorial-ink mb-3" style="font-size: clamp(36px, 6vw, 62px); letter-spacing: -0.015em;">
        你的名字
      </h1>
      <p class="text-editorial-secondary text-lg mb-10 font-sans">一句话介绍自己</p>

      <TerminalBlock :lines="terminalLines" />
    </section>

    <!-- 入口卡片网格 -->
    <section>
      <div class="eyebrow mb-6">Projects</div>
      <div class="grid gap-6 md:grid-cols-2">
        <ProjectCard
          v-for="project in featuredProjects"
          :key="project.id"
          :project="project"
          @click="modal.show(project)"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useModal } from '../stores/modal.js'
import TerminalBlock from '../components/TerminalBlock.vue'
import ProjectCard from '../components/ProjectCard.vue'
import projects from '../data/projects.json'

const modal = useModal()

const terminalLines = [
  { prompt: '$ whoami', output: '你的名字' },
  { prompt: '$ cat about.md', output: '在AI时代认真生活的开发者' },
  { prompt: '$ echo "slogan"', output: '1 person + AI = 1 team' },
  { prompt: '$ open portfolio.app', output: '发现下方项目，点击体验' },
]

const featuredProjects = computed(() =>
  projects
    .filter(p => p.featured)
    .sort((a, b) => (b.sort || 0) - (a.sort || 0))
)
</script>
