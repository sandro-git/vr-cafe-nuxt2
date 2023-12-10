<template>
  <div>
    <LandingImage />
    <Tarif />
    <TarifsSite />
    <Services />

    <Titles
      :id="'escape'"
      title="ESCAPE GAME VR (EXCLU)"
      subtitle="ARVI VR"
      class="scroll-mt-40"
    />
    <Card :games="Arvi" />
    <Titles subtitle="UBISOFT" />
    <Card :games="Ubisoft" />
    <Titles
      :id="'arcade'"
      class="scroll-mt-40"
      title="ARCADE VR"
      subtitle="WANADEV"
    />
    <Card :games="Wanadev" />
    <Titles subtitle="ARVI arcade" />
    <Card :games="ArviArcade" />
    <Titles subtitle="LDLC VR STUDIO" />
    <Card :games="Ldlc" />
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
      return this.getGames.filter(el => el.editor.name === 'Arvi' && el.type === 'escape')
    },
    ArviArcade () {
      return this.getGames.filter(el => el.editor.name === 'Arvi' && el.type === 'arcade')
    },
    Wanadev () {
      return this.getGames.filter(el => el.editor.name === 'Wanadev')
    },
    Synthesys () {
      return this.getGames.filter(el => el.editor.name === 'Synthesys')
    },
    Ldlc () {
      return this.getGames.filter(el => el.editor.name === 'LDLC Studio VR')
    },
    Delusion () {
      return this.getGames.filter(el => el.editor.name === 'Delusion Studio')
    },
    LaSuiteStudio () {
      return this.getGames.filter(el => el.editor.name === 'La Suite Studio')
    }
  }
}
</script>
