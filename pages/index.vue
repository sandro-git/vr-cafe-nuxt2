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
