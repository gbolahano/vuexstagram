<template>
  <div>
    <div class="card">
      <img class="card-img-top" :src="displaySrc" alt="">
      <div class="card-body">
        {{ caption }}
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
