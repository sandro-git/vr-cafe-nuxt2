<template>
  <div class="flex flex-col items-center gap-5">
    <LandingImage />
    <div v-for="game in computedGames" :key="game._id" class="flex flex-col items-center ">
      <h1 class="text-4xl font-bold">
        {{ game.name }}
      </h1>
      <nuxt-link :to="game.slug.current">
        {{ game.slug.current }}
      </nuxt-link>
      <SanityImage
        :asset-id="game.imageUrl.asset._ref"
        auto="format"
        height="250"
        witdh="450"
        style="height: 250px; width: 450px;"
      />
    </div>
  </div>
</template>

<script>
import LandingImage from '~/components/landingImage.vue'
export default {
  name: 'IndexPage',
  components: { LandingImage },
  data () {
    return {
      games: null
    }
  },
  async fetch () {
    this.games = await this.$axios.$get('https://byaeh17d.api.sanity.io/v2021-03-25/data/query/production?query=*[_type == "game"]{name,text,"imageUrl": image{asset},editor->{name},slug{current}}')
  },
  computed: {
    computedGames: () => this.games.result
  }
}
</script>
