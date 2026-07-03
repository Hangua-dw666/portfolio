import { defineStore } from 'pinia'
import { ref } from 'vue'

let zCounter = 100

export const useWindowManager = defineStore('windowManager', () => {
  const windows = ref([])
  const activeId = ref(null)

  function openApp(app) {
    const existing = windows.value.find(w => w.appId === app.id)
    if (existing) {
      existing.minimized = false
      focusWindow(existing.id)
      return
    }
    const offset = windows.value.length * 30
    const win = {
      id: `${app.id}-${Date.now()}`,
      appId: app.id,
      title: app.name,
      icon: app.icon,
      x: 120 + offset,
      y: 60 + offset,
      width: 800,
      height: 600,
      zIndex: ++zCounter,
      minimized: false,
      maximized: false,
      url: app.url || null,
      component: app.component || null,
    }
    windows.value.push(win)
    activeId.value = win.id
  }

  function closeWindow(id) {
    const idx = windows.value.findIndex(w => w.id === id)
    if (idx === -1) return
    windows.value.splice(idx, 1)
    if (activeId.value === id) {
      const top = windows.value.filter(w => !w.minimized).sort((a, b) => b.zIndex - a.zIndex)[0]
      activeId.value = top ? top.id : null
    }
  }

  function minimizeWindow(id) {
    const win = windows.value.find(w => w.id === id)
    if (!win) return
    win.minimized = true
    if (activeId.value === id) {
      const top = windows.value.filter(w => !w.minimized).sort((a, b) => b.zIndex - a.zIndex)[0]
      activeId.value = top ? top.id : null
    }
  }

  function toggleMaximize(id) {
    const win = windows.value.find(w => w.id === id)
    if (!win) return
    win.maximized = !win.maximized
    focusWindow(id)
  }

  function focusWindow(id) {
    const win = windows.value.find(w => w.id === id)
    if (!win) return
    win.zIndex = ++zCounter
    win.minimized = false
    activeId.value = id
  }

  function moveWindow(id, x, y) {
    const win = windows.value.find(w => w.id === id)
    if (!win) return
    win.x = x
    win.y = y
  }

  function toggleFromTaskbar(id) {
    const win = windows.value.find(w => w.id === id)
    if (!win) return
    if (win.minimized) {
      win.minimized = false
      focusWindow(id)
    } else if (activeId.value === id) {
      win.minimized = true
      activeId.value = null
    } else {
      focusWindow(id)
    }
  }

  return {
    windows, activeId,
    openApp, closeWindow, minimizeWindow, toggleMaximize,
    focusWindow, moveWindow, toggleFromTaskbar,
  }
})
