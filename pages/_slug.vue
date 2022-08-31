<template>
  <div class="flex flex-col items-center mt-10 gap-4">
    <h1 class="text-4xl font-bold">
      {{ game.name }}
    </h1>
    <nuxt-link to="/" class="bg-gray-400 text-white text-xl px-4 py-2 rounded-xl">
      Home Page
    </nuxt-link>
    <iframe
      class="w-5/6 h-96 xl:w-1/2 border-2 border-pink-500"
      :src="`https://www.youtube.com/embed/${game.youtube}`"
      title="YouTube video player"
      frameborder="0"
      allowfullscreen
    />
    {{ game.text }}
  </div>
</template>

<script>

export default {
  name: 'SlugPage',
  async asyncData ({ $axios, params }) {
    const rawGame = await $axios.$get(`https://byaeh17d.api.sanity.io/v2021-03-25/data/query/production?query=*[slug.current == "${params.slug}"]{name,text,'imageUrl':image{asset},slug{current},youtube}`)
    return { rawGame }
  },
  computed: {
    game () {
      return this.rawGame.result[0]
    }
  }
}

</script>
