<template>
  <div class="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div class="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
      <div class="rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10 relative bg-white shadow-2xl">
        <div class="mt-4 flex items-center justify-center">
          <span
            class="px-3 flex items-start text-6xl tracking-tight text-gray-900"
          >
            <span
              class="self-center m text-2xl font-medium text-gray-500 pr-2"
            >
              A partir de :
            </span>
            <span class="font-extrabold"> 25 </span>
            <span class="mt-2 mr-2 text-4xl font-medium">
              €
              <span class="text-xl font-medium text-gray-500">
                /pers
              </span>
            </span>
          </span>
        </div>

        <div class="flex justify-center">
          <h3
            class="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-700 w-1/2 justify-center mt-6"
          >
            1 Heure
          </h3>
        </div>
        <div class="mt-4">
          <ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-600 sm:mt-10">
            <TarifsSiteList v-for=" item in textList25" :key="item" :text="item" />
          </ul>
          <TarifsSiteButton />
        </div>
      </div>
      <div class="rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10 bg-white/60 sm:mx-8 lg:mx-0 sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none">
        <div class="mt-4 flex items-center justify-center">
          <span
            class="px-3 flex items-start text-6xl tracking-tight text-gray-900"
          >
            <span class="font-extrabold"> 18 </span>
            <span class="mt-2 mr-2 text-4xl font-medium">
              €
              <span class="text-xl font-medium text-gray-500">
                /pers
              </span>
            </span>
          </span>
        </div>

        <div class="flex justify-center">
          <h3
            class="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-700 w-1/2 justify-center mt-6"
          >
            30 min
          </h3>
        </div>
        <ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-600 sm:mt-10">
          <TarifsSiteList v-for=" item in textList18" :key="item" :text="item" />
        </ul>
        <TarifsSiteButton />
      </div>
    </div>
  </div>
</template>
<script>
import TarifsSiteList from './TarifsSiteList.vue'
export default {
  components: { TarifsSiteList },
  data () {
    return {
      textList18: [
        // eslint-disable-next-line quotes
        `Un choix d'environ 30 jeux`,
        'Solo ou Multijoueurs',
        'Casque HTC Vive Pro'
      ],
      textList25: [
        'Plus de 15 Escape Game VR',
        'Immersion Totale',
        'En partenariat avec Ubisoft Escape Game',
        'Escape Game ARVI VR en exclusivité',
        'Casque HTC Vive Pro'
      ]
    }
  }
}
</script>
