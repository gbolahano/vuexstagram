import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
    comments:  []
  },
  mutations: {
    setPost(state, posts) {
      state.posts = posts;
    },
    setComments(state, comments) {
      state.comments = comments;
    }
  },
  actions: {
    fetchPosts(context, posts) {
      context.commit('setPost', posts);
    },
    fetchComments(context, comments) {
      context.commit('setComments', comments);
    }
  },
  getters: {
    
  }
})