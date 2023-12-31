import { createStore } from 'vuex'

export default createStore({
  state: {
    characters: [], // para administrar
    charactersFilters: []
  },
  getters: {
  },
  mutations: { // son las que modifican a los states, mediantes las acciones
    setCharacters(state, payload){
      state.characters = payload
    },
    setCharactersFilter(state, payload){
      state.charactersFilter = payload
    }

  },
  actions: {
    async getCharacters({commit}){
      try{
        const response = await fetch('https://rickandmortyapi.com/api/character')
        const data = await response.json()
        commit('setCharacters', data.results)
        commit('setCharactersFilter', data.results)
        console.log(data.results)
        


    }catch(error){
      console.error(error)

    }
  }
  },
  modules: {
  },

})
