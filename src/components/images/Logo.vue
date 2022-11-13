<template>
  <div id="logoContainer">
    <picture>
      <source :srcset="logoWebp" type="image/webp">
      <source :srcset="LogoPNG" type="image/png">
      <img width="300" height="75" :src="LogoPNG" class="img-responsive" alt="">
    </picture>
  </div>
</template>

<script>
export default {
  name: 'Logo',
  data() {
    return {
      LogoPNG: new URL('../../assets/images/logos/movie-search.png', import.meta.url).href,
      logoWebp: new URL('../../assets/images/logos/movie-search.webp', import.meta.url).href
    };
  }
}
</script>

<style scoped lang="scss">

#logoContainer {
  text-align:center;
  padding-top:25px;
}
</style>