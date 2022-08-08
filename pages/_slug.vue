<template>
  <div class="flex flex-col items-center">
    <nuxt-link to="/" class="bg-gray-400 text-white text-xl px-4 py-2 rounded-xl">
      Home Page
    </nuxt-link>
    <p>{{ game.name }}</p>
  </div>
</template>

<script>

export default {
  name: 'SlugPage',
  data () {
    return {
      game: ''
    }
  },
  async fetch (params) {
    this.game = await fetch(`https://byaeh17d.api.sanity.io/v2021-03-25/data/query/production?query=*[slug.current == "${params.slug}"]{name,text,'imageUrl':image{asset},slug{current}}`).then(res => res.json())
  }
}

</script>
