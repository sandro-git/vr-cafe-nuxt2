<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div id="price" class="bg-gray-900">
    <div class="pt-12 px-4 sm:px-6 lg:px-8 lg:pt-20">
      <div class="text-center">
        <p
          class="mt-2 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl"
        >
          NOS TARIFS
        </p>
        <p
          class="mt-3 max-w-4xl mx-auto text-xl text-gray-300 sm:mt-5 sm:text-2xl"
        >
          Une activité adapté à partir <span class="uppercase"> de 8 ans</span>.
          Nous proposons des
          <span class="uppercase">expériences</span>
          variées en Réalité Virtuelle. Un catalogue de Jeux évolutif tous au
          long de l'année. <br>Entre amis, en famille, entre collaborateur,
          tentez l'expérience VR Café.
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
                <div class="flex-1 flex flex-col">
                  <div class="bg-white px-6 py-10">
                    <div class="flex flex-col items-center">
                      <h3
                        id="tier-hobby"
                        class="text-center text-2xl font-medium text-gray-900"
                      >
                        Arcade VR
                      </h3>
                      <div class="mt-4 flex items-center justify-center">
                        <span
                          class="px-3 flex items-start text-6xl tracking-tight text-gray-900"
                        >
                          <span
                            class="self-center text-xl font-medium text-gray-500 pr-2"
                          >
                            A partir de :
                          </span>
                          <span class="font-extrabold"> 18 </span>
                          <span class="mt-2 mr-2 text-4xl font-medium">
                            €
                            <span class="text-xl font-medium text-gray-500">
                              /pers
                            </span>
                          </span>
                        </span>
                      </div>
                      <h3
                        class="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-700 w-1/2 justify-center mt-6"
                      >
                        30 min
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
                          Un choix d'environ 30 jeux
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
                          Solo ou Multijoueurs
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
                          Casque HTC Vive Pro
                        </p>
                      </li>
                    </ul>
                    <div class="mt-8">
                      <div class="rounded-lg shadow-md">
                        <a
                          href="reservation-simply.html"
                          class="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base font-medium text-indigo-700 hover:bg-gray-50"
                          aria-describedby="tier-hobby"
                        >
                          Réservez
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
                <div
                  class="pointer-events-none absolute inset-0 rounded-lg border-2 border-indigo-600"
                  aria-hidden="true"
                />
                <div class="absolute inset-x-0 top-0 transform translate-y-px">
                  <div class="flex justify-center transform -translate-y-1/2">
                    <span
                      class="inline-flex rounded-full bg-indigo-700 px-4 py-1 text-sm font-semibold tracking-wider uppercase text-white"
                    >
                      Le plus populaire
                    </span>
                  </div>
                </div>
                <div class="bg-white rounded-t-lg px-6 pt-12 pb-10">
                  <div class="flex flex-col items-center">
                    <h3
                      id="tier-growth"
                      class="text-center text-3xl font-semibold text-gray-900 sm:-mx-6"
                    >
                      <div class="mb-2">
                        Escape Game VR
                      </div>
                      <div>Arcade VR</div>
                    </h3>

                    <div class="mt-4 flex items-center justify-center">
                      <span
                        class="px-3 flex items-start text-6xl tracking-tight text-gray-900 sm:text-6xl"
                      >
                        <span
                          class="self-center m text-2xl font-medium text-gray-500 pr-2"
                        >
                          A partir de :
                        </span>
                        <span class="font-extrabold"> 25 </span>
                        <span class="mt-2 mr-2 text-4xl font-medium"> €</span>
                      </span>
                      <span class="text-2xl font-medium text-gray-500">
                        /pers
                      </span>
                    </div>
                    <h3
                      id="tier-standard"
                      class="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-700 w-1/2 justify-center mt-6"
                    >
                      1 Heure
                    </h3>
                  </div>
                </div>
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
                        Plus de 15 Escape Game VR
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
                        Immersion Totale
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
                        En partenariat avec Ubisoft Escape Game
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
                        Escape Game ARVI VR en exclusivité
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
                        Casque HTC Vive Pro
                      </p>
                    </li>
                  </ul>
                  <div class="mt-10">
                    <div class="rounded-lg shadow-md">
                      <a
                        href="reservation-simply.html"
                        class="block w-full text-center rounded-lg border border-transparent bg-indigo-700 px-6 py-4 text-xl leading-6 font-medium text-white hover:bg-indigo-700"
                        aria-describedby="tier-growth"
                      >
                        Réserver
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
                class="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-r-lg"
              >
                <div class="flex-1 flex flex-col">
                  <div class="bg-white px-6 py-10">
                    <div class="flex flex-col items-center">
                      <h3
                        id="tier-scale"
                        class="text-center text-2xl font-medium text-gray-900"
                      >
                        Simulateur <br>de conduite VR
                      </h3>
                      <div class="mt-4 flex items-center justify-center">
                        <span
                          class="px-3 flex items-start text-6xl tracking-tight text-gray-900"
                        >
                          <span
                            class="self-center pr-2 text-xl font-medium text-gray-500"
                          />
                          <span class="font-extrabold"> 20 </span>
                          <span class="mt-2 mr-2 text-4xl font-medium">
                            €
                          </span>
                        </span>
                        <span class="text-xl font-medium text-gray-500">
                          /pers
                        </span>
                      </div>
                      <h3
                        class="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-700 w-2/3 justify-center mt-6"
                      >
                        30 min
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
                          La Formule 1 autrement
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
                          Battez Max Verstappen
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
                          Une vitesse impressionante
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
  name: 'BasePrices'
}
</script>

<style></style>
