<template>
  <div class="flex flex-col items-center mt-10 gap-4">
    <h1 class="text-4xl font-bold">
      {{ $data.result[0].name }}
    </h1>
    <nuxt-link to="/" class="bg-gray-400 text-white text-xl px-4 py-2 rounded-xl">
      Home Page
    </nuxt-link>
    <SanityImage
      class="w-1/2 h-1/2"
      :asset-id="$data.result[0].imageUrl.asset._ref "
      auto="format"
    />
    {{ $data.result[0].text }}
  </div>
</template>

<script>

export default {
  // try fetch
  name: 'SlugPage',
  async asyncData ({ params }) {
    const game = await fetch(`https://byaeh17d.api.sanity.io/v2021-03-25/data/query/production?query=*[slug.current == "${params.slug}"]{name,text,'imageUrl':image{asset},slug{current}}`)
      .then(res => res.json())
    return game
  }

}

</script>
