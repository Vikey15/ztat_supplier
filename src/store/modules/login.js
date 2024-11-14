import axios from "axios";
import apiClient from "../../services/axios/axiosMiddleware";
const state = {
    loginResponse: null,
  };
  
  const mutations = {
    setLoginResponse(state, loginResponse) {
      state.loginResponse = loginResponse;
    },
  };
  
  const actions = {
    async initiateLogin({ commit }, request) {
       axios.post('/ecommerce-api/bo/auth', request, {
        headers: {
          "Content-Type": "text/plain",
        },
      }).then((response) => {
        if (response) {
          commit('setLoginResponse', response);
          return true;
        }
      })
        .catch((error) => {
          console.log("Login error", error)
        })
      
    }
  };
  
  const getters = {
    loginResponse(state) {
      return state.loginResponse;
    },
  };
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
  };
  