<template>
  <div>
    <Header
      :logo="Logo"
    />
    <div class="flex flex-col items-center mt-10 gap-4">
      <h1 class="text-4xl font-bold">
        {{ game.name }}
      </h1>

      <iframe
        class="w-5/6 h-96 xl:w-1/2 border-2 border-pink-500"
        :src="`https://www.youtube.com/embed/${game.youtube}`"
        title="YouTube video player"
        frameborder="0"
        allowfullscreen
      />
      <div class="px-5 text-center">
        <p>{{ game.players }} | {{ game.difficulty }}</p>
        <br>
        <p>{{ game.text }}</p>
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
    const pages = await fetch('https://byaeh17d.api.sanity.io/v2021-03-25/data/query/production?query=*[_type == "Pages"]{name,"imageId":image{asset},titre,text}')
      .then(res => res.json())

    return { game, pages }
  },
  computed: {
    Logo () {
      return this.pages.result.find(el => el.name === 'Logo')
    }
  }

}

</script>
