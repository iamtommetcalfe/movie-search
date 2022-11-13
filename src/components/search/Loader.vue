<template>
  <div id="loader" v-if="showLoader">
    <img :src="loaderSVG" class="img-responsive" alt="Loading ...">
  </div>
</template>
<script lang="ts">
export default {
  props: {
    showLoader: false,
  },
  data() {
    return {
      loaderSVG: new URL('../../assets/images/loaders/puff.svg', import.meta.url).href,
    };
  }
}
</script>
<style scoped lang="scss">
section#searchContainer {
  #loader {
    width: 100%;
    text-align: center;

    img {
      width: 75px
    }
  }
}
</style>