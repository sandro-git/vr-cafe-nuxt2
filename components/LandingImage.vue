<template>
  <div>
    <nuxt-img
      provider="sanity"
      class="text-center"
      :src="LandingImage.imageId.asset._ref"
      alt="VR headset"
      sizes="xs:100vw lg:100vw xl:100vw"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'LandingImage',
  computed: {
    ...mapGetters(['getPages']),
    LandingImage () {
      return this.getPages.find(el => el.name === 'Landing Image')
    }
  }
}
</script>

<style>

</style>
