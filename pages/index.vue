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
    <Card :games="Ubisoft" />
    <Titles title="ESCAPE GAME VR (EXCLU)" subtitle="ARVI VR" />
    <Card :games="Arvi" />
    <Titles title="ARCADE VR" subtitle="WANADEV" />
    <Card :games="Wanadev" />
    <Titles subtitle="SYNTHESYS" />
    <Card :games="Synthesys" />
    <Titles subtitle="PARTENAIRES" />
    <Card :games="getEditors" :editor="false" />
    <Footer />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'IndexPage',
  computed: {
    ...mapGetters(['getGames', 'getPages', 'getEditors']),
    Logo () {
      return this.getPages.find(el => el.name === 'Logo')
    },
    LandingImage () {
      return this.getPages.find(el => el.name === 'Landing Image')
    },
    Ubisoft () {
      return this.getGames.filter(el => el.editor.name === 'Ubisoft')
    },
    Arvi () {
      return this.getGames.filter(el => el.editor.name === 'Arvi')
    },
    Wanadev () {
      return this.getGames.filter(el => el.editor.name === 'Wanadev')
    },
    Synthesys () {
      return this.getGames.filter(el => el.editor.name === 'Synthesys')
    }
  }

}
</script>
