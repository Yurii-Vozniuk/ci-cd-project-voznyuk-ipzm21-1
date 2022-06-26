import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    contacts: [],
    chats: [],
    currentUserChat: {},
  },
  getters: {},
  mutations: {
    SET_CONTACTS_TO_STORE(state, contacts) {
      state.contacts = contacts;
    },
    SET_CHATS_TO_STORE(state, chats) {
      state.chats = chats;
    },
    SET_USER_TO_HEAD(state, user) {
      user ? state.currentUserChat = user : state.currentUserChat = '';
    },
  },
  actions: {
    FETCH_CONTACTS({ commit }) {
      axios.get('https://ci-cd-project-server.herokuapp.com/contacts')
        .then((contacts) => {
          commit('SET_CONTACTS_TO_STORE', contacts.data);
        });
    },
    FETCH_CHATS({ commit }) {
      axios.get('https://ci-cd-project-server.herokuapp.com/chats')
        .then((chats) => {
          commit('SET_CHATS_TO_STORE', chats.data);
        });
    },
    SET_USER_TO_HEADER({ commit }, user) {
      commit('SET_USER_TO_HEAD', user);
    },
    SET_MESSAGE_TO_CHAT({ commit }, { userID, chat }) {
      axios.put(`https://ci-cd-project-server.herokuapp.com/chats/${userID}`, chat)
        .then((response) => response);
    },
  },
});

export default store;
