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
    },
    increasePostLikes(state, index) {
      let posts = [...state.posts];
      let likeInc = posts[index].likes + 1;
      state.posts[index].likes = likeInc;
    }
  },
  actions: {
    fetchPosts(context, posts) {
      context.commit('setPost', posts);
    },
    fetchComments(context, comments) {
      context.commit('setComments', comments);
    },
    incrementPostLikes(context, index) {
      context.commit('increasePostLikes', index);
    }
  },
  getters: {

  }
})