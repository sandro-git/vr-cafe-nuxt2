<template>
  <div>
    <pre>{{ getUbisoftGames }} </pre>
    <pre>{{ getArviGames }} </pre>
    <pre>{{ getWanadevGames }} </pre>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'TestPage',
  computed: {
    ...mapState(['games']),
    ...mapGetters(['getUbisoftGames', 'getArviGames', 'getWanadevGames'])
  },
  mounted () {
    this.$store.dispatch('getGames')
  }
}
</script>

<style>

</style>
