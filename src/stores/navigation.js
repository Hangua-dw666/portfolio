import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNavigation = defineStore('navigation', () => {
  const currentView = ref('home')
  function setView(view) { currentView.value = view }
  return { currentView, setView }
})
