<template>
  <div class="flex flex-col items-center">
    <h1 class="text-4xl font-bold">
      Home Page
    </h1>
    <nuxt-link to="/about" class="bg-gray-400 text-white text-xl px-4 py-2 rounded-xl">
      About Page
    </nuxt-link>
    <p v-for="nameGame in games" :key="nameGame._id">
      Game Name : {{ nameGame.name }}
    </p>
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'

const query = groq`*[_type == "game"]{
  name,
  _id
}`

export default {
  name: 'IndexPage',
  data: () => ({ games: '' }),
  async fetch () {
    this.games = await this.$sanity.fetch(query)
  }
}
</script>
