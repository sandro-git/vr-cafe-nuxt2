<template>
  <header class="bg-gray-900 pt-4 w-full z-20 sticky top-0">
    <nav
      class="lg:max-h-40 max-h-20 w-full py-4 lg:py-4 grid grid-cols-2 grid-rows-1 lg:grid-cols-3 items-center justify-between lg:border-none bg-gray-900"
      aria-label="Top"
    >
      <!-- logo -->
      <nuxt-link to="/" class="flex justify-center lg:col-span-1 h-16">
        <span class="sr-only">Logo</span>
        <nuxt-img
          provider="sanity"
          :src="Logo.imageId.asset._ref"
          alt="logo vr café"
          class="h-full"
          sizes="xs:100vw"
          width="100"
          height="64"
        />
      </nuxt-link>
      <div class="text-right pr-8 lg:hidden flex justify-end " @click="toggle">
        <i class="fas fa-bars h-8 w-8" />
      </div>
      <div class=" hidden lg:flex justify-center lg:col-start-3">
        <a
          href="/reservation.html"
          class="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base lg:text-2xl font-medium text-indigo-700 hover:bg-indigo-50"
        >
          Réserver
        </a>
      </div>
      <!-- navigation -->
      <div
        class="hidden col-span-2 lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:flex flex-row gap-4 items-center"
      >
        <div v-for="lien in liens" :key="lien.texte" class="flex space-x-6">
          <a
            key="Index"
            :href="lien.lien"
            class="text-base lg:text-2xl font-medium text-white hover:text-indigo-50"
            @click="toggle"
          >
            {{ lien.texte }}
          </a>
        </div>
      </div>
      <!-- fin nav fermée -->
    </nav>
    <!-- nav ouverte -->
    <nav :class="{hidden:isActive}" class="lg:hidden w-screen absolute top-0 h-screen z-40 bg-gray-900 grid grid-cols-2 grid-rows-6 ">
      <div class="grid grid-cols-2 grid-rows-1 col-span-2  my-4 h-12 justify-items-center w-full">
        <!-- logo -->
        <nuxt-link to="/" class="flex justify-center lg:col-span-1 h-full ">
          <span class="sr-only">Logo</span>
          <nuxt-img
            provider="sanity"
            :src="Logo.imageId.asset._ref"
            alt="logo vr café"
            class="h-full"
            sizes="xs:100vw"
          />
        </nuxt-link>
        <!-- hamburger icon -->
        <div class="w-full h-full pr-8 lg:hidden flex justify-end " @click="toggle">
          <i class="fas fa-bars h-8 w-8 z-50 place-self-center" />
        </div>
      </div>
      <!-- liens -->
      <div v-for="lien in liens" :key="lien.texte" class="mb-4 py-4 flex flex-col items-center">
        <nuxt-link
          key="Index"
          :to="lien.lien"
          class="text-2xl font-medium text-white hover:text-indigo-50"
          @click.native="toggle"
        >
          {{ lien.texte }}
        </nuxt-link>
      </div>
      <div class="lg:hidden py-4 flex flex-col text-center px-8">
        <a
          href="/reservation.html"
          class="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base lg:text-2xl font-medium text-indigo-700 hover:bg-indigo-50"
        >
          Réserver
        </a>
      </div>
      <!--  -->
      <!-- bouton réserver -->
    </nav>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'HeaderApp',
  data () {
    return {
      isActive: true,
      liens: [
        {
          texte: 'Accueil',
          lien: '/'
        },
        {
          texte: 'Tarifs',
          lien: '/#price'
        },
        {
          texte: 'Services',
          lien: '/#services'
        },
        {
          texte: 'Escape',
          lien: '/#escape'
        },
        {
          texte: 'Arcade',
          lien: '/#arcade'
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['getPages']),
    Logo () {
      return this.getPages.find(el => el.name === 'Logo')
    }
  },
  methods: {
    toggle () {
      this.isActive = !this.isActive
    }
  }
}
</script>
