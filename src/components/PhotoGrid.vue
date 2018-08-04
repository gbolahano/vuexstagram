<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-4 mt-2" v-for="(post, index) in posts" :key="index">
          <Photo :caption="post.caption" :displaySrc="post.display_src"
            :code="post.code" :likes="post.likes" :comments="commentLength(post.code)" />
      </div>
    </div>
  </div>
</template>

<script>
import Photo from './Photo'
import posts from '../data/posts';
import comments from '../data/comments';
import { mapGetters } from 'vuex';
export default {
  methods: {
    commentLength(code) {
      // console.log(code);
      let comment = this.$store.state.comments[code];
      if (comment) {
        return comment.length;
      } else {
        return 0;
        // console.log('No comment found');
      };
    }
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    }
  },
  components: {
    Photo
  },
  created() {
    this.$store.dispatch('fetchPosts', posts);
    this.$store.dispatch('fetchComments', comments);
  }
}
</script>

<style>

</style>
