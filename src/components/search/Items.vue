<template>
  <div id="itemContainer" v-if="totalResults > 0 && !showLoader">
    <div class="item" v-for="item in items" :data-id="item.imdbID">
      <img v-if="item.Poster !== 'N/A'" :src="item.Poster" :alt="item.Title" class="itemImage imgResponsive" />
      <div v-else class="imagePlaceholder">
        <p>
          {{ item.Title }}
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    showLoader: false,
    items: {},
    totalResults: 0
  },
}
</script>
<style scoped lang="scss">

section#searchContainer {

  #itemContainer {
    margin: auto;
    width: 70%;
    display: flex;
    padding: 10px 45px;
    flex-flow: row wrap;
    align-content: space-between;
    justify-content: space-between;

    .imagePlaceholder {
      width: 200px;
      height: 250px;
      padding: 10px 20px;
      color: #000;
      overflow: auto;
      display: inline-flex;
      margin: 0 15px 15px 0;
      background-color: white;
      box-shadow: 7px 7px #0000001c;
      cursor: pointer;

      p {
        width: 100%;
        text-align: center;
      }
    }

    .item {
      width: 200px;
      height: 300px;
      padding: 10px 20px;
      color: #ffffff;
      overflow: auto;
      display: inline-flex;
      margin: 0 15px 15px 0;

      .itemInfo::first-letter {
        text-transform: uppercase;
      }

      .itemTitle {

      }

      img.itemImage {
        max-width:190px;
        margin: 0 auto auto;
        box-shadow: 7px 7px #0000001c;
        cursor: pointer;
      }
    }
  }
}

</style>