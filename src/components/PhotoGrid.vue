<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-4 mt-3" v-for="(post, index) in posts" :key="index">
        <Photo :caption="post.caption" :displaySrc="post.display_src" :code="post.code" />
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
