<template>
  <nuxt-link to="/" class="flex justify-center lg:col-span-1 lg:h-full h-2/3">
    <span class="sr-only">Logo</span>
    <nuxt-img
      provider="sanity"
      :src="Logo.imageId.asset._ref+'?h=208&'"
      alt="logo vr café"
      class="h-full"
      sizes="xs:100vw"
      width="320"
      height="205"
    />
  </nuxt-link>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'LogoApp',
  computed: {
    ...mapGetters(['getPages']),
    Logo () {
      return this.getPages.find(el => el.name === 'Logo')
    }
  }
}
</script>
