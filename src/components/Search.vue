<template>
  <section id="searchContainer">
    <input id="searchInput" type="text" placeholder="Search Movies, TV or Video Games..." v-debounce:400ms="search" />
    <Items :items="items" :showLoader="showLoader" :totalResults="totalResults" />
    <Error :error="error" :message="errorMessage" />
    <Loader :showLoader="showLoader" />
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import {AxiosError, AxiosInstance } from 'axios'
import { vue3Debounce } from 'vue-debounce'
import Items from "./search/Items.vue";
import Error from "./search/Error.vue";
import Loader from "./search/Loader.vue";

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance
    items: [],
    showLoader: boolean,
    errorMessage: string,
    error: boolean,
  }
}

export default defineComponent({
  name: "Search",
  components: {Loader, Error, Items},
  data() {
    return {
      items: [],
      totalResults: 0,
      searchTerm: "",
      showLoader: false,
      errorMessage: "",
      error: false
    };
  },
  directives: {
    debounce: vue3Debounce({ lock: true })
  },
  methods: {
    async search(searchTerm: string) {
      try {
        await this.toggleLoader(true);
        const {data} = await this.$axios.get('?s=' + searchTerm);

        this.error = data.Response !== 'True';
        this.errorMessage = data.Error;
        this.items = data.Search ? data.Search : [];
        this.totalResults = data.totalResults ? data.totalResults : 0;

        await this.toggleLoader(false);
      } catch (error) {
        this.error = true;
        this.errorMessage = error instanceof AxiosError ? error.message : 'An unknown error occured';
        this.items = [];
        this.totalResults = 0;
        await this.toggleLoader(false);
      }
    },
    async toggleLoader(toggle: boolean) {
      this.showLoader = toggle;
    }
  }
})

</script>
<style scoped lang="scss">

section#searchContainer {
  width:100%;

  input#searchInput {
    display: block;
    width: 70%;
    margin: 20px auto;
    padding: 10px 45px;
    background: white url("../assets/images/search-icon.svg") no-repeat 15px center;
    background-size: 15px 15px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
}
</style>