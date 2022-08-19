<template>
  <header class="bg-gray-900 lg:h-40 w-full z-20">
    <nav
      class="bg-gray-900 px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0"
      aria-label="Top"
    >
      <div class="flex flex-wrap justify-between md:justify-center xl:justify-between items-center">
        <!-- logo -->
        <a href="/" class="flex justify-center lg:col-span-1 lg:h-full h-2/3">
          <span class="sr-only">Logo</span>
          <nuxt-img
            provider="sanity"
            :src="logo.imageId.asset._ref"
            alt="logo vr café"
            class="h-full lg:w-44 w-20"
            sizes="xs:100vw"
          />
        </a>
        <!-- bouton réserver -->
        <div class="flex md:order-2">
          <a
            href="reservation-simply.html"
            class="md:inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base lg:text-2xl font-medium text-indigo-700 hover:bg-indigo-50 hidden"
          >Réserver</a>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            @click="toggleNavbar()"
          >
            <span class="sr-only">Open menu</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" /></svg>
          </button>
        </div>
        <!-- navigation mobile -->
        <div id="navbar-sticky" :class="{'hidden': !showMenu, 'flex': showMenu}" class="md:justify-between justify-center items-center w-full md:flex md:w-auto md:order-1 bg-gray-900">
          <ul class="flex flex-col p-4 mt-4 rounded-lg borde md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
            <li>
              <nuxt-link key="Solutions" to="/" class="block py-2 pr-4 pl-3 text-base lg:text-2xl font-medium text-white hover:text-indigo-50" aria-current="page">
                Accueil
              </nuxt-link>
            </li>
            <li>
              <nuxt-link key="Pricing" to="#price" class="block py-2 pr-4 pl-3 text-base lg:text-2xl font-medium text-white hover:text-indigo-50">
                Tarifs
              </nuxt-link>
            </li>
            <li>
              <nuxt-link key="Services" to="#services" class="block py-2 pr-4 pl-3 text-base lg:text-2xl font-medium text-white hover:text-indigo-50">
                Services
              </nuxt-link>
            </li>
            <li>
              <nuxt-link key="Company" to="#escape" class="block py-2 pr-4 pl-3 text-base lg:text-2xl font-medium text-white hover:text-indigo-50">
                Escape
              </nuxt-link>
            </li>
            <li>
              <nuxt-link key="Arcade" to="#arcade" class="block py-2 pr-4 pl-3 text-base lg:text-2xl font-medium text-white hover:text-indigo-50">
                Arcade
              </nuxt-link>
            </li>
            <li>
              <nuxt-link key="Docs" to="#culture" class="block py-2 pr-4 pl-3 text-base lg:text-2xl font-medium text-white hover:text-indigo-50">
                Culture
              </nuxt-link>
            </li>
          </ul>
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
      showMenu: false
    }
  },
  methods: {
    toggleNavbar () {
      this.showMenu = !this.showMenu
    }
  }
}
</script>
