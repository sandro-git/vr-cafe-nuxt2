<template>
  <div>
    <NavBar />
    <nuxt keep-alive />
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
export default {
  name: 'DefaultLayout',
  components: { NavBar }
}
</script>
