import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      cart: [],
    }
  },
  mutations: {
    addCart(state, product) {
      state.cart.push(product)
    },
    removeFromCart(state, productId) {
      state.cart = state.cart.filter((product) => product.id !== productId)
    },
  },
  actions: {
    addToCart({ commit }, product) {
      commit('addCart', product)
    },
    removeProductFromCart({ commit }, productId) {
      commit('removeFromCart', productId)
    },
  },
  getters: {
    cartItems: (state) => state.cart,
  },
})

export store;
