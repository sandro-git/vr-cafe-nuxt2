
// state
export const state = () => ({
  games: []
})

// getters
export const getters = {
  getUbisoftGames (state) {
    return state.games.filter(el => el.editor.name === 'Ubisoft')
  },
  getArviGames (state) {
    return state.games.filter(el => el.editor.name === 'Arvi')
  },
  getWanadevGames (state) {
    return state.games.filter(el => el.editor.name === 'Wanadev')
  },
  getLdlcGames (state) {
    return state.games.filter(el => el.editor.name === 'LDLC Studio VR')
  },
  getSynthesysGames (state) {
    return state.games.filter(el => el.editor.name === 'Synthesys')
  }
}

// mutations
export const mutations = {
  SET_GAMES (state, games) {
    state.games = games
  }
}

// actions
export const actions = {
  async getGames ({ commit }) {
    const todo = await this.$axios.$get('https://byaeh17d.api.sanity.io/v2021-03-25/data/query/production?query=*[_type == "game"]{name,text,"imageUrl": image{asset},editor->{name},slug{current}}')
    commit('SET_GAMES', todo.result)
  }
}
