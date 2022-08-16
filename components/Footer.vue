<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <footer class="bg-gray-900">
    <div class="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
      <nav class="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
        <div v-for="item in navigation.main" :key="item.name" class="px-5 py-2">
          <a :href="item.href" class="text-base text-gray-100 hover:text-gray-50">
            {{ item.name }}
          </a>
        </div>
      </nav>
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
        main: [
          { name: 'Acceuil', href: '#' },
          { name: 'Tarifs', href: '#' },
          { name: 'Escape', href: '#' },
          { name: 'Arcade', href: '#' },
          { name: 'Culture', href: '#' }
        ],
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
