<script>
export default {
  name: 'AppGames',
  props: {
    games: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
  <div>
    <div class="flex flex-col items-center">
      <SanityImage
        class="w-1/2 h-1/2"
        :asset-id="games.imageUrl.asset._ref "
        auto="format"
        height="250"
        width="450"
        style="height: 250px; width: 450px;"
      />
      <div class="p-5">
        <p>
          Le nombre de joueurs est de: {{ games.players }}
        </p>
        <p>
          La difficulté du niveau est: {{ games.difficulty }}
        </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 first-letter">
          {{ games.text }}
        </p>
      </div>
    </div>
  </div>
</template>
<style>
.first-letter::first-letter{
  text-transform: uppercase;
}
</style>
