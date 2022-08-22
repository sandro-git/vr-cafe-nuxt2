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
    <Card :games="Ubisoft" />
    <Titles title="ESCAPE GAME VR (EXCLU)" subtitle="ARVI VR" />
    <Card :games="Arvi" />
    <Titles id="arcade" title="ARCADE VR" subtitle="WANADEV" />
    <Card :games="Wanadev" />
    <Titles subtitle="LCDL VR" />
    <Card :games="Ldlc" />
    <Titles subtitle="SYNTHESYS" />
    <Card :games="Synthesys" />
    <Titles subtitle="PARTENAIRES" />
    <Card :games="EditorsResult" :editor="false" />
    <Footer />
  </div>
</template>

<script>
import Titles from '~/components/Titles.vue'
export default {
  name: 'IndexPage',
  components: { Titles },
  async asyncData () {
    const games = await fetch('https://byaeh17d.api.sanity.io/v2021-03-25/data/query/production?query=*[_type == "game"]{name,text,"imageUrl": image{asset},editor->{name},slug{current}}').then(res => res.json())
    const pages = await fetch('https://byaeh17d.api.sanity.io/v2021-03-25/data/query/production?query=*[_type == "Pages"]{name,"imageId":image{asset},titre,text}').then(res => res.json())
    const editors = await fetch('https://byaeh17d.api.sanity.io/v2021-03-25/data/query/production?query=*[_type == "editors"]{name,"imageUrl":image{asset},_id,slug}').then(res => res.json())

    return { games, pages, editors }
  },
  computed: {
    Logo () {
      return this.pages.result.find(el => el.name === 'Logo')
    },
    LandingImage () {
      return this.pages.result.find(el => el.name === 'Landing Image')
    },
    Ubisoft () {
      return this.games.result.filter(el => el.editor.name === 'Ubisoft')
    },
    Arvi () {
      return this.games.result.filter(el => el.editor.name === 'Arvi')
    },
    Wanadev () {
      return this.games.result.filter(el => el.editor.name === 'Wanadev')
    },
    Ldlc () {
      return this.games.result.filter(el => el.editor.name === 'LDLC Studio VR')
    },
    Synthesys () {
      return this.games.result.filter(el => el.editor.name === 'Synthesys')
    },
    EditorsResult () {
      return this.editors.result
    }
  }
}
</script>
