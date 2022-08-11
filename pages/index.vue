<template>
  <div>
    <Header :logo="Logo" />
    <nuxt-img
      provider="sanity"
      class="text-center"
      :src="LandingImage.imageId.asset._ref"
      alt="VR headset"
      sizes="xs:100vw lg:100vw xl:100vw"
    />
    <Tarif />
    <Services />
    <div class="grid grid-cols-1 grid-row-3 place-self-auto xl:grid-cols-4 gap-4 items-center mt-20 ">
      <div v-for="game in games.result" :key="game._id" class="flex flex-col items-center h-full w-full">
        <Card :game="game" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      games: null,
      pages: null
    }
  },
  async fetch () {
    this.games = await fetch('https://byaeh17d.api.sanity.io/v2021-03-25/data/query/production?query=*[_type == "game"]{name,text,"imageUrl": image{asset},editor->{name},slug{current}}').then(res => res.json())
    this.pages = await fetch('https://byaeh17d.api.sanity.io/v2021-03-25/data/query/production?query=*[_type == "Pages"]{name,"imageId":image{asset}}').then(res => res.json())
  },
  computed: {
    Logo () {
      return this.pages.result.find(el => el.name === 'Logo')
    },
    LandingImage () {
      return this.pages.result.find(el => el.name === 'Landing Image')
    }
  }
}
</script>
