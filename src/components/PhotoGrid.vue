<template>
  <div class="photo-grid">
    <Photo />
  </div>

</template>

<script>
import Photo from './Photo'
import posts from '../data/posts';
import comments from '../data/comments';
export default {
  data () {
    return {

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
