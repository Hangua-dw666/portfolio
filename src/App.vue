<template>
  <div class="h-full overflow-y-auto">
    <HomeView v-if="nav.currentView === 'home'" />
    <PortfolioView v-else-if="nav.currentView === 'portfolio'" />
    <AboutView v-else-if="nav.currentView === 'about'" />

    <BottomNav />
    <AppModal />
  </div>
</template>

<script setup>
import { useNavigation } from './stores/navigation.js'
import HomeView from './views/HomeView.vue'
import PortfolioView from './views/PortfolioView.vue'
import AboutView from './views/AboutView.vue'
import BottomNav from './components/BottomNav.vue'
import AppModal from './components/AppModal.vue'

const nav = useNavigation()
</script>
