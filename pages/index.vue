<template>
  <div>
    <LandingImage />
    <Tarif />
    <Services />
    <Titles :id="'escape'" class="scroll-mt-40" title="ESCAPE GAME VR" subtitle="UBISOFT" />
    <Card :games="Ubisoft" />
    <Titles title="ESCAPE GAME VR (EXCLU)" subtitle="ARVI VR" />
    <Card :games="Arvi" />
    <Titles :id="'arcade'" class="scroll-mt-40" title="ARCADE VR" subtitle="WANADEV" />
    <Card :games="Wanadev" />
    <Titles subtitle="LDLC VR STUDIO" />
    <Card :games="Ldlc" />
    <Titles subtitle="SYNTHESYS" />
    <Card :games="Synthesys" />
    <Titles subtitle="PARTENAIRES" />
    <EditorCard :editors="getEditors" />
    <Titles subtitle="CONTACT" />
    <ContactSection />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ContactSection from '~/components/ContactSection.vue'
export default {
  name: 'IndexPage',
  components: { ContactSection },
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
