import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  counter: 0
}

export default new Vuex.Store({
  state
})
