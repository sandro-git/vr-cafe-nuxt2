<template>
  <header class="bg-gray-900 lg:h-40 w-full z-20 sticky top-0">
    <nav
      class="lg:max-h-40 max-h-20 w-full py-4 lg:py-6 grid grid-cols-2 grid-rows-1 lg:grid-cols-3 items-center justify-between lg:border-none bg-gray-900"
      aria-label="Top"
    >
      <!-- logo -->
      <a href="/" class="flex justify-center lg:col-span-1 h-full">
        <span class="sr-only">Logo</span>
        <nuxt-img
          provider="sanity"
          :src="logo.imageId.asset._ref"
          alt="logo vr café"
          class="h-full"
          sizes="xs:100vw"
        />
      </a>
      <div class="text-right pr-8 lg:hidden flex justify-end " @click="toggle">
        <i class="fas fa-bars h-8 w-8" />
      </div>
      <div :class="{hidden:!isActive}" class="lg:hidden fixed top-0 w-screen h-screen z-50 bg-gray-900">
        <div class="grid grid-cols-2 grid-rows-1 col-start-2  my-4 h-12 justify-items-end pr-8" @click="toggle">
          <i class="fas fa-bars h-8 w-8 col-start-2 self-center" />
        </div>
        <!-- navigation mobile -->
        <div class="mb-4 py-4 flex flex-col gap-14 items-center">
          <!-- acceuil -->
          <nuxt-link
            key="Index"
            to="/"
            class="text-base lg:text-2xl font-medium text-white hover:text-indigo-50"
          >
            Accueil
          </nuxt-link>
          <!-- tarifs -->
          <nuxt-link
            key="Pricing"
            to="#price"
            class="text-base lg:text-2xl font-medium text-white hover:text-indigo-50"
          >
            Tarifs
          </nuxt-link>
          <!-- services -->
          <nuxt-link
            key="Services"
            to="#services"
            class="text-base lg:text-2xl font-medium text-white hover:text-indigo-50"
          >
            Services
          </nuxt-link>
          <!-- escape -->
          <nuxt-link
            key="Company"
            to="#escape"
            class="text-base lg:text-2xl font-medium text-white hover:text-indigo-50"
          >
            Escape
          </nuxt-link>
          <!-- arcade -->
          <nuxt-link
            key="Arcade"
            to="#arcade"
            class="text-base lg:text-2xl font-medium text-white hover:text-indigo-50"
          >
            Arcade
          </nuxt-link>
          <!-- culture -->
          <nuxt-link
            key="Culture"
            to="#culture"
            class="text-base lg:text-2xl font-medium text-white hover:text-indigo-50"
          >
            Culture
          </nuxt-link>
        </div>
      </div>
      <!-- bouton réserver -->
      <div class=" hidden lg:flex justify-center lg:col-start-3">
        <nuxt-link
          to="/reservation"
          class="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base lg:text-2xl font-medium text-indigo-700 hover:bg-indigo-50"
        >
          Réserver
        </nuxt-link>
      </div>
      <!-- navigation -->
      <div
        class="hidden col-span-2 lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:flex flex-col items-center"
      >
        <div class="mb-4 py-4 flex space-x-6">
          <!-- acceuil -->
          <nuxt-link
            key="Index"
            to="/"
            class="text-base lg:text-2xl font-medium text-white hover:text-indigo-50"
          >
            Accueil
          </nuxt-link>
          <!-- tarifs -->
          <nuxt-link
            key="Pricing"
            to="#price"
            class="text-base lg:text-2xl font-medium text-white hover:text-indigo-50"
          >
            Tarifs
          </nuxt-link>
          <!-- services -->
          <nuxt-link
            key="Services"
            to="#services"
            class="text-base lg:text-2xl font-medium text-white hover:text-indigo-50"
          >
            Services
          </nuxt-link>
          <!-- escape -->
          <nuxt-link
            key="Company"
            to="#escape"
            class="text-base lg:text-2xl font-medium text-white hover:text-indigo-50"
          >
            Escape
          </nuxt-link>
          <!-- arcade -->
          <nuxt-link
            key="Arcade"
            to="#arcade"
            class="text-base lg:text-2xl font-medium text-white hover:text-indigo-50"
          >
            Arcade
          </nuxt-link>
          <!-- culture -->
          <nuxt-link
            key="Culture"
            to="#culture"
            class="text-base lg:text-2xl font-medium text-white hover:text-indigo-50"
          >
            Culture
          </nuxt-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderApp',
  props: {
    logo: {
      type: Object,
      required: true,
      default: null
    }
  },
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    toggle () {
      this.isActive = !this.isActive
    }
  }
}
</script>
