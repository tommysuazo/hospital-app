<script setup>
import { provideLanguage } from '../composables/useLanguage'
import AppHeader from '../components/AppHeader.vue'
import HeroSection from '../components/HeroSection.vue'
import ServicesSection from '../components/ServicesSection.vue'
import SpecialtiesSection from '../components/SpecialtiesSection.vue'
import InsuranceSection from '../components/InsuranceSection.vue'
import AboutSection from '../components/AboutSection.vue'
import TestimonialsSection from '../components/TestimonialsSection.vue'
import ContactSection from '../components/ContactSection.vue'
import AppFooter from '../components/AppFooter.vue'

provideLanguage()
</script>

<template>
  <div class="home-view">
    <AppHeader />
    <main>
      <HeroSection />
      <ServicesSection />
      <SpecialtiesSection />
      <InsuranceSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
    <AppFooter />
  </div>
</template>
