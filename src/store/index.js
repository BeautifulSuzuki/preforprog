import { createStore } from 'vuex'

export default createStore({
  state: {
    currentLanguage: null,
    tocVisible: false,
    articles: {},
    userProgress: {}
  },
  getters: {
    getCurrentLanguage: state => state.currentLanguage,
    isTocVisible: state => state.tocVisible,
    getArticleById: state => id => state.articles[id],
    getUserProgress: state => state.userProgress
  },
  mutations: {
    SET_CURRENT_LANGUAGE(state, language) {
      state.currentLanguage = language
    },
    TOGGLE_TOC(state) {
      state.tocVisible = !state.tocVisible
    },
    SET_ARTICLE(state, { id, article }) {
      state.articles[id] = article
    },
    UPDATE_USER_PROGRESS(state, { articleId, progress }) {
      state.userProgress[articleId] = progress
    }
  },
  actions: {
    setCurrentLanguage({ commit }, language) {
      commit('SET_CURRENT_LANGUAGE', language)
    },
    toggleToc({ commit }) {
      commit('TOGGLE_TOC')
    },
    loadArticle({ commit }, { id, article }) {
      commit('SET_ARTICLE', { id, article })
    },
    updateProgress({ commit }, { articleId, progress }) {
      commit('UPDATE_USER_PROGRESS', { articleId, progress })
    }
  },
  modules: {}
})
