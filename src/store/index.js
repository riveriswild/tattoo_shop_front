import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);
// axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';
// // axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


export const store = new Vuex.Store( {

    state: {
        profile: {},
        info: {},
    },
  
   mutations: {
    SET_PROFILE: (state, profile) => {
        state.profile = profile;
    },
    SET_INFO: (state, profile) => {
        state.profile = profile;
    },
},

   getters: {
    PROFILE(state) {  // верни то что в стейте называется продуктз
        console.log('profile getter', state.profile)
        return state.profile;
    },
    INFO(state) {  // верни то что в стейте называется продуктз
        console.log('info getter', state.profile)
        return state.profile;
    },
  },
  
   actions:{
    async GET_PROFILE_FROM_API({commit}) {
        try {
            const profile = await axios('http://127.0.0.1:8000/', {
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
            const info = await axios('http://127.0.0.1:8000/info/', {
                method: "GET"
            });
            commit('SET_PROFILE', info.data);
            return info;
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