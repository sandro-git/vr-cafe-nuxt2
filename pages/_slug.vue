<template>
  <div class="flex flex-col items-center">
    <nuxt-link to="/" class="bg-gray-400 text-white text-xl px-4 py-2 rounded-xl">
      Home Page
    </nuxt-link>
    <pre>{{ game }}</pre>
  </div>
</template>

<script>

export default {
  name: 'SlugPage',
  layout: 'gameLayout',
  data () {
    return {
      game: ''
    }
  },
  async fetch (params) {
    this.game = await fetch(`https://byaeh17d.api.sanity.io/v2021-03-25/data/query/production?query=*[slug.current == "${params.slug}"]{name,text,'imageUrl':image{asset},slug{current},players,difficulty,youtube}`).then(res => res.json())
  }
}

</script>
