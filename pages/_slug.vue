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

      <div class="mt-4 px-5 flex flex-col text-center w-1/2">
        <div class="flex justify-center space-x-4">
          <span class="inline-flex items-center rounded-full bg-gray-100 px-3 py-0.5 text-sm font-medium text-gray-800">{{ game.players }}</span>
          <span class="inline-flex items-center rounded-full bg-red-100 px-3 py-0.5 text-sm font-medium text-red-800">{{ game.difficulty }}</span>
        </div>
        <p class="mt-8">
          {{ game.text }}
        </p>
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
