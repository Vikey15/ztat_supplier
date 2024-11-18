import axios from "axios";
import apiClient from "../../services/axios/axiosMiddleware";
const state = {
    loginResponse: null,
  };
  
  const mutations = {
    setLoginResponse(state, loginResponse) {
      console.log(loginResponse,"mutations")
      state.loginResponse = loginResponse;
    },
  };
  
  const actions = {
    async initiateLogin({ commit }, request) {
       axios.post('/ecommerce-api/bo/loginAuthentication', request, {
        headers: {
          "Content-Type": "text/plain",
        },
      }).then((response) => {
        if (response) {
          console.log(response,"actions")
          commit('setLoginResponse', response);
          return response
        }
      })
        .catch((error) => {
          console.log("Login error", error)
        })
      
    }
  };
  
  const getters = {
    loginResponse(state) {
      console.log(state,"getters")
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
  