<template>
  <div>
    <div v-for="page in pages.result" :key="page._id">
      <SanityImage
        :asset-id="page.imageUrl.asset._ref"
        auto="format"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingImage',
  data () {
    return {
      pages: null
    }
  },
  async fetch () {
    this.pages = await fetch('https://byaeh17d.api.sanity.io/v2021-03-25/data/query/production?query=*[name == "Landing Image"]{name,"imageUrl": image{asset}}').then(res => res.json())
  }
}
</script>
