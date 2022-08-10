<template>
  <div>
    <div class="grid grid-cols-1 grid-row-3 place-self-auto xl:grid-cols-4 gap-4 items-center mt-20 ">
      <div v-for="game in games.result" :key="game._id" class="flex flex-col items-center h-full w-full">
        <Cardv2 :game="game" />
      </div>
    </div>
  </div>
</template>

<script>
import Cardv2 from '~/components/Cardv2.vue'
export default {
  name: 'IndexPage',
  components: { Cardv2 },
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
