<template>
  <div class="grid grid-cols-1 grid-row-3 place-self-auto xl:grid-cols-4 gap-4 items-center p-10  ">
    <div v-for="editor in editors" :key="editor._id" class="flex flex-col items-center h-full w-full  rounded-xl ">
      <a :href="editor.link" class="max-w-sm overflow-hidden rounded-xl shadow-md duration-200 hover:scale-105 hover:shadow-xl w-full h-full border-2 border-pink-500">
        <div>
          <nuxt-img
            provider="sanity"
            :src="editor.imageUrl.asset._ref"
            placeholder
            class="h-52 w-full"
          />
        </div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    editors: {
      default: null,
      type: Array
    }
  }
}
</script>
