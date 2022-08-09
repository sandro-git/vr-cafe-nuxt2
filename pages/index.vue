<template>
  <div>
    <div class="flex flex-col items-center mt-20">
      <div v-for="game in games.result" :key="game._id" class="flex flex-col items-center">
        <h1 class="text-4xl font-bold">
          {{ game.name }}
        </h1>
        <Card :game="game" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from '~/components/Card.vue'
export default {
  name: 'IndexPage',
  components: { Card },
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
