<template>
  <div class="grid grid-cols-1 grid-row-3 place-self-auto xl:grid-cols-3 gap-4 items-center p-10  ">
    <div v-for="game in games" :key="game._id" class="flex flex-col items-center h-full rounded-xl ">
      <nuxt-link :to="game.slug.current" class="max-w-sm overflow-hidden rounded-xl shadow-md duration-200 hover:scale-105 hover:shadow-xl h-full border-2 border-pink-500">
        <div class="flex flex-col justify-between">
          <div v-if="game.imageUrl" class="h-80 overflow-hidden">
            <nuxt-img
              provider="sanity"
              :src="game.imageUrl.asset._ref"
              placeholder
              fit="cover"
              crop="center"
              quality="80"
              height="384"
              width="380"
              :alt="game.name"
              loading="lazy"
              sizes="sm:100vw md:50vw lg:25vw"
            />
          </div>
          <div class="p-5">
            <h2 class="text-3xl uppercase text-center mb-5 text-pink-500">
              {{ game.name }}
            </h2>
            <button class="w-full rounded-md bg-sky-600  py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75">
              En savoir plus
            </button>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GameCard',
  props: {
    games: {
      default: null,
      type: Array
    }
  }
}
</script>
