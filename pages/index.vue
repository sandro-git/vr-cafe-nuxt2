<template>
  <div class="flex flex-col items-center">
    <div v-for="game in games.result" :key="game._id" class="flex flex-col items-center">
      <h1 class="text-4xl font-bold">
        {{ game.name }}
      </h1>
      <nuxt-link :to="game.slug.current">
        {{ game.slug.current }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      games: null
    }
  },
  async fetch () {
    this.games = await fetch('https://byaeh17d.api.sanity.io/v2021-03-25/data/query/production?query=*[_type == "game"]{name,text,"imageUrl": image{asset},editor->{name},slug{current}}').then(res => res.json())
  }
}
</script>
