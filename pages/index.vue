<template>
  <div>
    <Header
      :logo="Logo"
      class="md:pb-40"
    />
    <nuxt-img
      provider="sanity"

      :src="LandingImage.imageId.asset._ref"
      alt="VR headset"
      sizes="xs:100vw lg:100vw xl:100vw"
    />
    <Tarif :pages="pages" />
    <Services :pages="pages" />
    <Titles id="escape" title="ESCAPE GAME VR" subtitle="UBISOFT" />
    <Card :games="getUbisoftGames" />
    <Titles title="ESCAPE GAME VR (EXCLU)" subtitle="ARVI VR" />
    <Card :games="getArviGames" />
    <Titles id="arcade" title="ARCADE VR" subtitle="WANADEV" />
    <Card :games="getWanadevGames" />
    <Titles subtitle="LCDL VR" />
    <Card :games="getLdlcGames" />
    <Titles subtitle="SYNTHESYS" />
    <Card :games="getSynthesysGames" />
    <Titles subtitle="PARTENAIRES" />
    <Card :games="EditorsResult" :editor="false" />
    <Footer />
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'IndexPage',
  async asyncData () {
    const pages = await fetch('https://byaeh17d.api.sanity.io/v2021-03-25/data/query/production?query=*[_type == "Pages"]{name,"imageId":image{asset},titre,text}').then(res => res.json())
    const editors = await fetch('https://byaeh17d.api.sanity.io/v2021-03-25/data/query/production?query=*[_type == "editors"]{name,"imageUrl":image{asset},_id,slug}').then(res => res.json())

    return { pages, editors }
  },
  computed:
  {
    ...mapState(['games']),
    ...mapGetters(['getUbisoftGames', 'getArviGames', 'getWanadevGames', 'getSynthesysGames', 'getLdlcGames']),
    games () {
      return this.$store.state.games
    },
    Logo () {
      return this.pages.result.find(el => el.name === 'Logo')
    },
    LandingImage () {
      return this.pages.result.find(el => el.name === 'Landing Image')
    },
    EditorsResult () {
      return this.editors.result
    }
  },
  mounted () {
    this.$store.dispatch('getGames')
  }
}
</script>
