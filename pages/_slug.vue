<template>
  <div>
    <Header
      :logo="Logo"
    />
    <div class="flex flex-col items-center mt-10 gap-4">
      <h1 class="text-4xl font-bold">
        {{ $data.result[0].name }}
      </h1>
      <!-- <a href="/" class="bg-gray-400 text-white text-xl px-4 py-2 rounded-xl">
        Home Page
      </a> -->
      <!-- <SanityImage
        class="w-1/2 h-1/2"
        :asset-id="$data.result[0].imageUrl.asset._ref "
        auto="format"
      /> -->
      <iframe
        class="w-5/6 h-96 xl:w-1/2 border-2 border-pink-500"
        :src="`https://www.youtube.com/embed/${$data.result[0].youtube}`"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
      <div class="px-5 text-center">
        <!-- <pre>{{ $data.result[0] }} </pre> -->
        <p>{{ $data.result[0].players }} | {{ $data.result[0].difficulty }}</p>
        <br>
        <p>{{ $data.result[0].text }}</p>
      <!-- <pre>{{ $data.result[0] }}</pre> -->
      </div>
    </div>
  </div>
</template>
<script>

export default {
  // try fetch
  name: 'SlugPage',
  props: {
    youtube: {
      default: '',
      type: String
    }
  },
  async asyncData ({ params }) {
    const game = await fetch(`https://byaeh17d.api.sanity.io/v2021-03-25/data/query/production?query=*[slug.current == "${params.slug}"]{name,text,'imageUrl':image{asset},slug{current},players,difficulty,youtube}`)
      .then(res => res.json())

    return game
  },
  data () {
    return {
      pages: null
    }
  },
  async fetch () {
    this.pages = await fetch('https://byaeh17d.api.sanity.io/v2021-03-25/data/query/production?query=*[_type == "Pages"]{name,"imageId":image{asset},titre,text}')
      .then(res => res.json())
  },
  computed: {
    Logo () {
      return this.pages.result.find(el => el.name === 'Logo')
    }
  }

}

</script>
<style>
.ytp-impression-link{
  overflow: hidden;
}
.ytp-title-text{
  display: none!important;;
}
</style>
