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
    <Titles title="ESCAPE GAME VR" subtitle="UBISOFT" />
    <Card :games="games" />
  </div>
</template>

<script>
import Titles from '~/components/Titles.vue'
export default {
  name: 'IndexPage',
  components: { Titles },
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
