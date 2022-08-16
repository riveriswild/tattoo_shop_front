import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);
axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';
// // axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


export const store = new Vuex.Store( {

    state: {
        profile: {},
        info: {},
        prices: {},
        faq: {},
        works: {},
        reviews: {},
    },
  
   mutations: {
    SET_PROFILE: (state, profile) => {
        state.profile = profile;
    },
    SET_INFO: (state, info) => {
        state.info = info;
    },
    SET_PRICES: (state, prices) => {
        state.prices = prices;
    },
    SET_FAQ: (state, faq) => {
        state.faq = faq;
    },
    SET_WORKS: (state, works) => {
        state.works = works;
    },
    SET_REVIEWS: (state, reviews) => {
        state.reviews = reviews;
    },
},

   getters: {
    PROFILE(state) {
        console.log('profile getter', state.profile)
        return state.profile;
    },
    INFO(state) {  
        console.log('info getter', state.info)
        return state.info;
    },
    PRICES(state) { 
        return state.prices;
    },
    FAQ(state) { 
        return state.faq;
    },
    WORKS(state) { 
        return state.works;
    },
    REVIEWS(state) {  
        console.log(state.reviews)
        return state.reviews;
    },
  },
  
   actions:{
    async GET_PROFILE_FROM_API({commit}) {
        try {
            const profile = await axios('', {
                method: "GET"
            });
            commit('SET_PROFILE', profile.data);
            return profile;
        } catch (error) {
            console.log(error);
            return error;
        }
      },

    async GET_INFO_FROM_API({commit}) {
        try {
            const info = await axios('info/', {
                method: "GET"
            });
            commit('SET_INFO', info.data);
            return info;
        } catch (error) {
            console.log(error);
            return error;
        }
      },
    async GET_PRICES_FROM_API({commit}) {
        try {
            const prices = await axios('prices/', {
                method: "GET"
            });
            commit('SET_PRICES', prices.data);
            return prices;
        } catch (error) {
            console.log(error);
            return error;
        }
      },
    async GET_FAQ_FROM_API({commit}) {
        try {
            const faq = await axios('faq/', {
                method: "GET"
            });
            commit('SET_FAQ', faq.data);
            return faq;
        } catch (error) {
            console.log(error);
            return error;
        }
      },
    async GET_REVIEWS_FROM_API({commit}) {
        try {
            const reviews = await axios('reviews/', {
                method: "GET"
            });
            commit('SET_REVIEWS', reviews.data);
            return reviews;
        } catch (error) {
            console.log(error);
            return error;
        }
      },
    async GET_WORKS_FROM_API({commit}) {
        try {
            const works = await axios('works/', {
                method: "GET"
            });
            commit('SET_WORKS', works.data);
            return works;
        } catch (error) {
            console.log(error);
            return error;
        }
      },
  }
})



//   export default {
//     async GET_PRODUCTS_FROM_API({commit}) {
//         try {
//             const products = await axios('http://localhost:3000/products', {
//                 method: "GET"
//             });
//             commit('SET_PRODUCTS_TO_STATE', products.data);
//             return products;
//         } catch (error) {
//             console.log(error);
//             return error;
//         }
//       },
//       ADD_TO_CART({commit}, product) {
//         commit('SET_CART', product);
//       },
//       INCREMENT_CART_ITEM({commit}, index) {
//         commit('INCREMENT', index);
//       },
//       DECREMENT_CART_ITEM({commit}, index) {
//         commit('DECREMENT', index);
//       },
//       DELETE_FROM_CART({commit}, index) {
//         commit('REMOVE_FROM_CART', index);
//       },
//       SET_MOBILE({commit}) {
//         commit('SWITCH_MOBILE')
//       },
//       SET_DESKTOP({commit}) {
//         commit('SWITCH_DESKTOP')
//       },

// }

// export default {
//     PRODUCTSG(state) {  // верни то что в стейте называется продуктз
//         console.log('data2', state.products)
//         return state.products;
//     },
//     CART(state){
//         return state.cart;
//     },
//     IS_MOBILE(state){
//         return state.isMobile;
//     },
//     IS_DESKTOP(state){
//         return state.isDesktop;
//     },
// }


// export default {
//     SET_PRODUCTS_TO_STATE: (state, products) => {   // 3. Та самая мутация, которая вызывается в экшне
//         state.products = products;    // наполняем массив в стейте данными
//     },
//     SET_CART: (state, product) => {
//         state.cart.push(product);
//     },
//     REMOVE_FROM_CART: (state, index) => {
//         state.cart.splice(index, 1);
//     },
//     INCREMENT: (state, index) => {
//         state.cart[index].quantity++;
//     },
//     DECREMENT: (state, index) => {
//         if (state.cart[index].quantity > 1) {
//             state.cart[index].quantity--;
//         }
//     },
//     SWITCH_MOBILE: (state,) => {
//         state.isMobile = true;
//         state.isDesktop = false;
//     },
//     SWITCH_DESKTOP: (state,) => {
//         state.isMobile = false;
//         state.isDesktop = true;
//     }
// }