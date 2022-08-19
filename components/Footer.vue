<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <footer class="bg-gray-900">
    <div class="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
      <div class="mt-8 flex justify-center space-x-6">
        <a v-for="item in navigation.social" :key="item.name" :href="item.href" class="text-gray-400 hover:text-gray-500">
          <span class="sr-only">{{ item.name }}</span>
          <i :class="item.icon" class="h-6 w-6 text-gray-50" />
        </a>
      </div>
      <p class="mt-8 text-center text-base text-gray-400">
        &copy; 2022 Sandro Das Neves, Inc. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterApp',
  data () {
    return {
      navigation: {
        social: [
          {
            name: 'Facebook',
            href: '#',
            icon: 'fab fa-facebook'
          },
          {
            name: 'Instagram',
            href: '#',
            icon: 'fab fa-instagram'
          }

        ]
      }
    }
  }
}
</script>
