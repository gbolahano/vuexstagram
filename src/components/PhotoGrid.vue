<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-4 mt-2" v-for="(post, index) in posts" :key="index">
          <Photo :caption="post.caption" :displaySrc="post.display_src"
            :code="post.code" :likes="post.likes" />
      </div>
    </div>
  </div>
</template>

<script>
import Photo from './Photo'
import posts from '../data/posts';
import comments from '../data/comments';
export default {
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    comments() {
      return this.$store.state.comments;
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
