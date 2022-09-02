export const state = () => ({
  games: [],
  pages: [],
  editors: []
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
  }
}

export const actions = {
  async nuxtServerInit ({ dispatch }, { $axios }) {
    const games = await $axios.$get('https://byaeh17d.api.sanity.io/v2021-03-25/data/query/production?query=*[_type == "game"]{name,text,"imageUrl": image{asset},editor->{name},slug{current},youtube,players,difficulty}')

    const pages = await $axios.$get('https://byaeh17d.api.sanity.io/v2021-03-25/data/query/production?query=*[_type == "Pages"]{name,"imageId":image{asset},titre,text}')

    const editors = await $axios.$get('https://byaeh17d.api.sanity.io/v2021-03-25/data/query/production?query=*[_type == "editors"]{name,"imageUrl":image{asset},_id,link}')

    await dispatch('setGames', games.result)
    await dispatch('setPages', pages.result)
    await dispatch('setEditors', editors.result)
  },
  setGames ({ commit }, games) {
    commit('SET_GAMES', games)
  },
  setPages ({ commit }, pages) {
    commit('SET_PAGES', pages)
  },
  setEditors ({ commit }, editors) {
    commit('SET_EDITORS', editors)
  }
}
