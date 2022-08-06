<template>
  <div class="flex flex-col items-center">
    <h1 class="text-4xl font-bold">
      Home Page
    </h1>
    <Button text="About" :path="path" />
    <div v-for="game in games.result" :key="game._id" class="flex flex-col">
      <Button :text="game.name" />
      <p>{{ game.slug.current }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData ({ $axios }) {
    const games = await $axios.$get('https://byaeh17d.api.sanity.io/v2021-03-25/data/query/production?query=*[_type == "game"]{name,_id,slug{current}}')
    return { games }
  },
  data () {
    return {
      path: { name: 'about' },
      gamePath: { name: '', params: { user: '1232' } }
    }
  },
  computed: {
    gameProp () {
      return { name: '', params: this.games }
    }
  }
}
</script>
