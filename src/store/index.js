import { createStore } from 'vuex'

const store = createStore({
  state: {
    counter: 1,
    mainAvatarList: {}
  },
  mutations: {
    add(state) {
      state.counter++
    },
    changeMainAvatarList(state, list) {
      state.mainAvatarList = list
    }
  },
  actions: {

  }
})

export default store