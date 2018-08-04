<template>
  <div id="app">
    <h1>Vuexstagram</h1>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@font-face {
    font-family: 'billabongregular';
    src: url('https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.eot');
    src: url('https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.eot?#iefix') format('embedded-opentype'),
         url('https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.woff') format('woff'),
         url('https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.ttf') format('truetype'),
         url('https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.svg#billabongregular') format('svg');
    font-weight: normal;
    font-style: normal;

}
h1 {
  font-family: billabong, 'billabongregular';
  text-align: center;
  font-weight: 100;
  font-size: 13rem;
  margin: 2rem 0;
  letter-spacing: -1px;
  text-shadow: 0px 4px 0 rgba(18, 86, 136, 0.11);
  color: #125688;
}
.btn-outline-primary {
  border-color: #125688;
}
.btn {
  color: #125688;
}
.btn:hover {
  color: white;
}
</style>
