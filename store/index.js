/* eslint-disable no-console */
import { groq } from '@nuxtjs/sanity'
const gamesQuery = groq`{ "games": *[_type == "game"]{name,text,"imageUrl": image{asset},editor->{name},slug{current},youtube,players,difficulty} }`
const pagesQuery = groq`{ "pages": *[_type == "Pages"]{name,"imageId":image{asset},titre,text} }`
const editorsQuery = groq`{ "editors": *[_type == "editors"]{name,"imageUrl":image{asset},_id,link} }`
const servicesQuery = groq`{ "editors": *[_type == "services"]{name,"imageUrl":image{asset},_id,slug} }`

export const state = () => ({
  pages: null,
  editors: null,
  services: null,
  games: null
})

export const getters = {
  getGames (state) {
    return state.games
  },
  getPages (state) {
    return state.pages
  },
  getEditors (state) {
    return state.editors
  },
  getServices (state) {
    return state.services
  }
}

export const mutations = {
  SET_GAMES (state, games) {
    state.games = games
  },
  SET_PAGES (state, pages) {
    state.pages = pages
  },
  SET_EDITORS (state, editors) {
    state.editors = editors
  },
  SET_SERVICES (state, services) {
    state.services = services
  }
}

export const actions = {
  async nuxtServerInit ({ dispatch }, { $axios, $sanity }) {
    const games = await $sanity.fetch(gamesQuery)
    const pages = await $sanity.fetch(pagesQuery)
    const editors = await $sanity.fetch(editorsQuery)
    const services = await $sanity.fetch(servicesQuery)

    await dispatch('setGames', games.games)
    await dispatch('setPages', pages.pages)
    await dispatch('setEditors', editors.editors)
    await dispatch('setServices', services.services)
  },
  setGames ({ commit }, games) {
    commit('SET_GAMES', games)
  },
  setPages ({ commit }, pages) {
    commit('SET_PAGES', pages)
  },
  setEditors ({ commit }, editors) {
    commit('SET_EDITORS', editors)
  },
  setServices ({ commit }, services) {
    commit('SET_SERVICES', services)
  }
}
