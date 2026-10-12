<script setup>
import { provideLanguage } from '../composables/useLanguage'
import AppHeader from '../components/AppHeader.vue'
import AboutPageIntro from '../components/about/AboutPageIntro.vue'
import FounderStory from '../components/about/FounderStory.vue'
import StaffSection from '../components/about/StaffSection.vue'
import AppFooter from '../components/AppFooter.vue'
import '../styles/about-page.css'

const { t } = provideLanguage()
</script>

<template>
  <div class="about-view">
    <AppHeader />
    <main>
      <section class="about-page-header">
        <div class="about-page-header__inner">
          <div class="about-page-header__copy">
            <span class="about-page-header__eyebrow">{{ t.aboutPage.eyebrow }}</span>
            <h1 class="about-page-header__title">{{ t.aboutPage.title }}</h1>
            <p>{{ t.aboutPage.description }}</p>
          </div>
          <div class="about-page-header__stats">
            <article v-for="stat in t.aboutPage.stats" :key="stat.label">
              <strong>{{ stat.value }}</strong><span>{{ stat.label }}</span>
            </article>
          </div>
        </div>
      </section>
      <AboutPageIntro />
      <FounderStory />
      <StaffSection />
    </main>
    <AppFooter />
  </div>
</template>
