<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6">
        <Photo :caption="singlePost.caption" :displaySrc="singlePost.display_src" :index="index"
        :code="singlePost.code" :likes="singlePost.likes" :comments="commentLength(singlePost.code)" />
      </div>
      <div class="col-lg-6">
        <div class="card">
          <div class="card-header">Comments</div>
          <div class="card-body">
            <div class="card-text mb-1" v-for="(comment, index) in comments" :key="index">
              <router-link to="">@{{ comment.user }}</router-link> {{comment.text }}
            </div>
            <div class="card-text">
              <form v-on:submit.prevent="handleSubmit">
                <div class="form-group">
                  <input v-model="user" type="text" class="form-control form-control-sm" placeholder="username">
                </div>
                <div class="form-group">
                  <input v-model="comment" type="text" class="form-control form-control-sm" placeholder="comment">
                </div>
                <div class="form-group">
                  <button type="submit" class="btn btn-outline-primary btn-sm">comment</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Photo from './Photo'
export default {
  data () {
    return {
      index: '',
      postId: this.$route.params.postId,
      singlePost: [],
      comments: [],
      user: '',
      comment: '',
    }
  },
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
    },
    handleSubmit() {
      let data = {
        'user': this.user,
        'comment': this.comment
      };
      this.$store.dispatch('addComment', data, this.postId);
    }
  },
  computed: {
    getPost() {
      let i = this.$store.state.posts.findIndex((post) => post.code === this.postId);
      const post = this.$store.state.posts[i];
      this.index = i;
      this.singlePost =  post;
    },
    getComment() {
      let postComments = this.$store.state.comments[this.postId] || [];
      console.log(postComments);
      this.comments = postComments;
    }
  },
  created() {
    this.getComment;
    this.getPost;
  },
  components: {
    Photo
  }
}
</script>

<style>
.card-text {
  font-size: 14px !important;
}
</style>
