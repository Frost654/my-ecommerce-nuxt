import { createStore } from 'vuex';
import { defineNuxtPlugin } from '#app';

const store = createStore({
  state() {
    return {
      cartItems: []
    };
  },
  getters: {
    cartItems(state) {
      return state.cartItems;
    }
  },
  mutations: {
    addToCart(state, product) {
      state.cartItems.push(product);
    }
  },
  actions: {
    addToCart({ commit }, product) {
      commit('addToCart', product);
    }
  }
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store);
});
