<script setup>
import { provideLanguage } from '../composables/useLanguage'
import AppHeader from '../components/AppHeader.vue'
import DoctorsDirectory from '../components/doctors/DoctorsDirectory.vue'
import AppFooter from '../components/AppFooter.vue'

provideLanguage()
</script>

<template>
  <div class="doctors-view">
    <AppHeader />
    <DoctorsDirectory />
    <AppFooter />
  </div>
</template>
