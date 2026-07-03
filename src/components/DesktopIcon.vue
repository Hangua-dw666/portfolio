<template>
  <button
    @click.stop="onSelect"
    @dblclick="onOpen"
    @keydown.enter="onOpen"
    :class="[
      'flex flex-col items-center gap-1 w-20 p-2 rounded cursor-pointer transition-colors',
      selected ? 'bg-terminal-green/20 border border-terminal-green/50' : 'border border-transparent hover:bg-terminal-hover/50'
    ]"
  >
    <img :src="app.icon" :alt="app.name" class="w-12 h-12 pointer-events-none select-none" draggable="false" />
    <span class="text-xs text-terminal-text text-center truncate w-full font-serif">{{ app.name }}</span>
  </button>
</template>

<script setup>
const props = defineProps({
  app: { type: Object, required: true },
  selected: { type: Boolean, default: false },
})
const emit = defineEmits(['select', 'open'])

function onSelect() { emit('select', props.app.id) }
function onOpen() { emit('open', props.app) }
</script>
