<template>
  <button
    class="desktop-icon group flex flex-col items-center gap-2 p-3 rounded-lg w-28"
    @click="$emit('click', project)"
  >
    <!-- 图标方块 80×80 -->
    <div
      class="w-20 h-20 rounded-xl flex items-center justify-center text-3xl overflow-hidden"
      :style="{ backgroundColor: project.iconColor || '#eeede6' }"
    >
      <img
        v-if="project.cover"
        :src="project.cover"
        :alt="project.title"
        class="w-full h-full object-cover"
      />
      <span v-else>{{ project.iconEmoji || '📁' }}</span>
    </div>

    <!-- 标题 -->
    <div class="flex items-center gap-1.5">
      <span
        v-if="project.status"
        class="w-1.5 h-1.5 rounded-full"
        :class="statusColor"
        :title="statusLabel"
      ></span>
      <span class="text-xs font-sans text-editorial-ink text-center leading-tight">
        {{ project.title }}
      </span>
    </div>
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  project: { type: Object, required: true },
})
defineEmits(['click'])

const statusMap = {
  wip: { color: 'bg-editorial-warning', label: '开发中' },
  live: { color: 'bg-editorial-success', label: '已上线' },
  completed: { color: 'bg-editorial-muted', label: '已完成' },
}

const statusColor = computed(() =>
  (statusMap[props.project.status] || statusMap.completed).color
)
const statusLabel = computed(() =>
  (statusMap[props.project.status] || statusMap.completed).label
)
</script>
