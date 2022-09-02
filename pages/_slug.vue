<template>
  <div>
    <div class="flex flex-col items-center mt-10 gap-4">
      <Titles :title="game.name" />
      <iframe
        class="w-5/6 h-96 xl:w-1/2 border-2 border-pink-500"
        :src="`https://www.youtube.com/embed/${game.youtube}`"
        title="YouTube video player"
        frameborder="0"
        allowfullscreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />

      <div class="px-5 text-centerw-1/2">
        <p>{{ game.players }} {{ game.difficulty }}</p>
        <br>
        <p>{{ game.text }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'SlugPage',
  computed: {
    ...mapGetters(['getGames']),
    routeSlug () {
      return this.$route.params.slug
    },
    game () {
      return this.getGames.find(el => el.slug.current === this.routeSlug)
    }
  }
}

</script>
