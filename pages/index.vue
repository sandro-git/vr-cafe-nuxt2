<template>
  <div>
    <Header />
    <LandingImage />
    <Tarif />
    <Services />
    <Titles id="escape" title="ESCAPE GAME VR" subtitle="UBISOFT" />
    <Card :games="Ubisoft" />
    <Titles title="ESCAPE GAME VR (EXCLU)" subtitle="ARVI VR" />
    <Card :games="Arvi" />
    <Titles id="arcade" title="ARCADE VR" subtitle="WANADEV" />
    <Card :games="Wanadev" />
    <Titles subtitle="LDLC VR" />
    <Card :games="Ldlc" />
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
    ...mapGetters(['getGames', 'getEditors']),
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
    },
    Ldlc () {
      return this.getGames.filter(el => el.editor.name === 'LDLC Studio VR')
    }
  }

}
</script>
