<template>
  <header class="bg-gray-900 lg:h-40 w-full z-20">
    <nav
      class="lg:max-h-40 w-full py-6 grid grid-cols-2 grid-rows-2 lg:grid-rows-1 lg:grid lg:grid-cols-3 items-center justify-between lg:border-none bg-gray-900"
      aria-label="Top"
    >
      <!-- logo -->
      <Logo />
      <!-- bouton réserver -->
      <ReserverButton />
      <!-- navigation mobile -->
      <NavLinks />
    </nav>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'HeaderApp',
  data () {
    return {
      menu:
      [{
        titre: 'Acceuil',
        link: '/'
      },
      {
        titre: 'Tarifs',
        link: '#price'
      },
      {
        titre: 'Services',
        link: '#services'
      },
      {
        titre: 'Escape',
        link: '#escape'
      },
      {
        titre: 'Arcade',
        link: '#arcade'
      },
      {
        titre: 'Culture',
        link: '#culture'
      }]
    }
  },
  computed: {
    ...mapGetters(['getPages']),
    Logo () {
      return this.getPages.find(el => el.name === 'Logo')
    }
  }
}
</script>
