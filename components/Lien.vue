<template>
  <a
    key="Index"
    :href="lien"
    class="text-base lg:text-2xl font-medium text-white hover:text-indigo-50"
    @click="$emit('toggle')"
  >
    {{ texte }}
  </a>
</template>

<script>
export default {
  name: 'LienApp',
  props: {
    texte: {
      type: String,
      default: '',
      required: true
    },
    lien: {
      type: String,
      default: '',
      required: true
    }
  },
  methods: {
    toggle () {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style>

</style>
