<template>
  <nuxt-link :to="path" class="bg-gray-400 text-white text-xl px-4 py-2 rounded-xl mt-4">
    {{ text }}
  </nuxt-link>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    text: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true
    }
  }
}
</script>
