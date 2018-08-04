<template>
  <div>
    <div class="card">
      <img class="card-img-top" :src="displaySrc" alt="">
      <div class="card-body">
        <div class="card-text">
          {{ caption }}
        </div>
        <button class="btn btn-sm btn-outline-primary">
          <i class="far fa-thumbs-up"></i>
          likes
        </button>
        <button class="btn btn-sm btn-outline-primary">
          <i class="far fa-comment"></i>
          comments
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['caption', 'displaySrc']
}
</script>

<style>

</style>
