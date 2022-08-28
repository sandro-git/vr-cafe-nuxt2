<template>
  <div>
    <pre />
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
    <Card :games="Ubisoft" />
    <Titles title="ESCAPE GAME VR (EXCLU)" subtitle="ARVI VR" />
    <Card :games="Arvi" />
    <Titles title="ARCADE VR" subtitle="WANADEV" />
    <Card :games="Wanadev" />
    <Titles subtitle="SYNTHESYS" />
    <Card :games="Synthesys" />
    <Titles subtitle="PARTENAIRES" />
    <!-- <Card :games="EditorsResult" :editor="false" /> -->
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData ({ $axios }) {
    const games = await $axios.$get('https://byaeh17d.api.sanity.io/v2021-03-25/data/query/production?query=*[_type == "game"]{name,text,"imageUrl": image{asset},editor->{name},slug{current}}')

    const pages = await $axios.$get('https://byaeh17d.api.sanity.io/v2021-03-25/data/query/production?query=*[_type == "Pages"]{name,"imageId":image{asset},titre,text}')

    const editors = await $axios.$get('https://byaeh17d.api.sanity.io/v2021-03-25/data/query/production?query=*[_type == "editors"]{name,"imageUrl":image{asset},_id,slug}')

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
    Synthesys () {
      return this.games.result.filter(el => el.editor.name === 'Synthesys')
    },
    EditorsResult () {
      return this.editors.result
    }
  }
}
</script>
