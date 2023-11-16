<template>
  <div :id="id" class="bg-gray-900 grid grid-cols-1 grid-rows-2 place-items-center">
    <h2 v-if="title" class="sm:text-4xl lg:text-5xl text-3xl font-extrabold text-white text-center px-4 py-4 mt-4  border-pink-500 border-2 w-1/2 ">
      <span class=" ">{{ title }}</span>
    </h2>
    <div v-if="subtitle" class="flex w-full justify-center items-center bg-gray-800 py-8">
      <p class="lg:w-1/2 sm:text-4xl lg:text-4xl text-3xl font-extrabold text-white text-center">
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
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    }
  }
}
</script>
