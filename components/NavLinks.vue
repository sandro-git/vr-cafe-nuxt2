<template>
  <div
    class="col-span-2 lg:col-span-1 lg:col-start-2 lg:row-start-1 flex flex-col items-center"
  >
    <div class="mb-4 py-4 flex space-x-6">
      <!-- acceuil -->
      <nuxt-link
        v-for="item in menu"
        :key="item.id"
        :to="item.link"
        class="text-base lg:text-2xl font-medium text-white hover:text-indigo-50"
      >
        {{ item.titre }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
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
  }
}
</script>
