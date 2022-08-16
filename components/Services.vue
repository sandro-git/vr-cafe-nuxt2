<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div id="service" class="bg-gray-900">
    <div class="pt-12 px-4 sm:px-6 lg:px-8 lg:pt-20">
      <div class="text-center">
        <p
          class="mt-2 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl"
        >
          {{ services.titre }}
        </p>
        <p
          class="mt-3 max-w-4xl mx-auto text-xl text-gray-300 sm:mt-5 sm:text-2xl"
        >
          {{ services.text }}
        </p>
      </div>
    </div>
    <div class="mt-16 bg-white pb-12 lg:mt-20">
      <div class="relative z-0">
        <div class="absolute inset-0 h-5/6 bg-gray-900 lg:h-2/3" />
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="relative lg:grid lg:grid-cols-7">
            <div
              class="mx-auto max-w-md lg:mx-0 lg:max-w-none lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3"
            >
              <div
                class="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-l-lg"
              >
                <div class="flex-1 flex flex-col border-2 border-indigo-600">
                  <div class="bg-white px-6 py-6">
                    <div>
                      <h3
                        id="tier-hobby"
                        class="text-center text-2xl font-bold text-gray-900"
                      >
                        <span class="uppercase">Anniversaires </span><br>
                        EVJ - EVF
                      </h3>
                    </div>
                  </div>
                  <div
                    class="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10"
                  >
                    <ul role="list" class="space-y-4">
                      <li class="flex items-start">
                        <div class="flex-shrink-0">
                          <!-- Heroicon name: outline/check -->
                          <svg
                            class="flex-shrink-0 h-6 w-6 text-green-500"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p class="ml-3 text-base font-medium text-gray-500">
                          Suprise Originale
                        </p>
                      </li>

                      <li class="flex items-start">
                        <div class="flex-shrink-0">
                          <!-- Heroicon name: outline/check -->
                          <svg
                            class="flex-shrink-0 h-6 w-6 text-green-500"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p class="ml-3 text-base font-medium text-gray-500">
                          Vidéos souvenir
                        </p>
                      </li>

                      <li class="flex items-start">
                        <div class="flex-shrink-0">
                          <!-- Heroicon name: outline/check -->
                          <svg
                            class="flex-shrink-0 h-6 w-6 text-green-500"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p class="ml-3 text-base font-medium text-gray-500">
                          Activité Inédite
                        </p>
                      </li>
                    </ul>
                    <div class="mt-8">
                      <div class="rounded-lg shadow-md">
                        <a
                          href="#"
                          class="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base font-medium text-indigo-700 hover:bg-gray-50"
                          aria-describedby="tier-hobby"
                        >
                          Nous contacter
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="mt-10 max-w-lg mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4"
            >
              <div class="relative z-10 rounded-lg shadow-xl">
                <!-- tarif et titre team building -->
                <div class="bg-white rounded-t-lg px-6 pt-12 pb-10">
                  <div>
                    <h3
                      id="tier-growth"
                      class="text-center text-3xl font-bold text-gray-900 sm:-mx-6 uppercase"
                    >
                      Team Building
                    </h3>
                  </div>
                </div>
                <!-- description team building -->
                <div
                  class="border-t-2 border-gray-100 rounded-b-lg pt-10 pb-8 px-6 bg-gray-50 sm:px-10 sm:py-10"
                >
                  <ul role="list" class="space-y-4">
                    <li class="flex items-start">
                      <div class="flex-shrink-0">
                        <!-- Heroicon name: outline/check -->
                        <svg
                          class="flex-shrink-0 h-6 w-6 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p class="ml-3 text-base font-medium text-gray-500">
                        Esprit d'equipe, cohésion
                      </p>
                    </li>

                    <li class="flex items-start">
                      <div class="flex-shrink-0">
                        <!-- Heroicon name: outline/check -->
                        <svg
                          class="flex-shrink-0 h-6 w-6 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p class="ml-3 text-base font-medium text-gray-500">
                        Communication, Collaboration
                      </p>
                    </li>

                    <li class="flex items-start">
                      <div class="flex-shrink-0">
                        <!-- Heroicon name: outline/check -->
                        <svg
                          class="flex-shrink-0 h-6 w-6 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p class="ml-3 text-base font-medium text-gray-500">
                        Jusqu'a 7 joueurs dans la même jeu
                      </p>
                    </li>

                    <li class="flex items-start">
                      <div class="flex-shrink-0">
                        <!-- Heroicon name: outline/check -->
                        <svg
                          class="flex-shrink-0 h-6 w-6 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p class="ml-3 text-base font-medium text-gray-500">
                        Découverte de la réalité virtuelle
                      </p>
                    </li>

                    <li class="flex items-start">
                      <div class="flex-shrink-0">
                        <!-- Heroicon name: outline/check -->
                        <svg
                          class="flex-shrink-0 h-6 w-6 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p class="ml-3 text-base font-medium text-gray-500">
                        Un bon moment à partager
                      </p>
                    </li>
                  </ul>
                  <div class="mt-10">
                    <div class="rounded-lg shadow-md">
                      <a
                        href="#footer"
                        class="block w-full text-center rounded-lg border border-transparent bg-indigo-700 px-6 py-4 text-xl leading-6 font-medium text-white hover:bg-indigo-700"
                        aria-describedby="tier-growth"
                      >
                        Nous Contacter
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="mt-10 mx-auto max-w-md lg:m-0 lg:max-w-none lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3"
            >
              <div
                class="flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-r-lg"
              >
                <div class="flex-1 flex flex-col border-2 border-indigo-600">
                  <div class="bg-white px-6 py-10">
                    <div>
                      <h3
                        id="tier-scale"
                        class="text-center text-2xl text-gray-900 uppercase font-bold"
                      >
                        Carte Cadeau
                      </h3>
                    </div>
                  </div>
                  <div
                    class="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10"
                  >
                    <ul role="list" class="space-y-4">
                      <li class="flex items-start">
                        <div class="flex-shrink-0">
                          <!-- Heroicon name: outline/check -->
                          <svg
                            class="flex-shrink-0 h-6 w-6 text-green-500"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p class="ml-3 text-base font-medium text-gray-500">
                          Valable 1 ans
                        </p>
                      </li>

                      <li class="flex items-start">
                        <div class="flex-shrink-0">
                          <!-- Heroicon name: outline/check -->
                          <svg
                            class="flex-shrink-0 h-6 w-6 text-green-500"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p class="ml-3 text-base font-medium text-gray-500">
                          Utillisable en plusieur fois
                        </p>
                      </li>

                      <li class="flex items-start">
                        <div class="flex-shrink-0">
                          <!-- Heroicon name: outline/check -->
                          <svg
                            class="flex-shrink-0 h-6 w-6 text-green-500"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p class="ml-3 text-base font-medium text-gray-500">
                          Un cadeau Original
                        </p>
                      </li>
                    </ul>
                    <div class="mt-8">
                      <div class="rounded-lg shadow-md">
                        <a
                          href="reservation-simply.html"
                          class="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base font-medium text-indigo-700 hover:bg-gray-50"
                          aria-describedby="tier-scale"
                        >
                          Réserver
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseServices',
  props: {
    pages: {
      type: Object,
      default: null
    }
  },
  computed: {
    services () {
      return this.pages.result.find(el => el.name === 'Services')
    }
  }
}
</script>
