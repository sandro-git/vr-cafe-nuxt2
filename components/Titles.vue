<template>
  <div class="bg-gray-900 grid grid-cols-1 grid-rows-2">
    <h2 class="sm:text-4xl lg:text-5xl text-3xl font-extrabold text-white text-center pb-8 px-4 pt-6">
      <span class="border-b-2 border-white">{{ title }}</span>
    </h2>
    <div v-if="subtitle" class="flex w-full justify-center items-center bg-gray-800 ">
      <p class="lg:w-1/2 sm:text-4xl lg:text-5xl text-3xl font-extrabold text-white text-center h-1/2mx-auto">
        {{ subtitle }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TitlesApp',
  props: {
    title: {
      type: String,
      default: '',
      required: true
    },
    subtitle: {
      type: String,
      default: ''
    }
  }
}
</script>
