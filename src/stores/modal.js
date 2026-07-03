import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useModal = defineStore('modal', () => {
  const open = ref(false)
  const currentProject = ref(null)
  function show(project) { currentProject.value = project; open.value = true }
  function hide() { open.value = false; currentProject.value = null }
  return { open, currentProject, show, hide }
})
