<template>
  <div v-if="error" id="errorContainer">
    <p>
      {{ message }}
    </p>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    error: false,
    message: ''
  },
}
</script>
<style scoped lang="scss">
#errorContainer {
  margin: auto;
  width: 70%;
  display: flex;
  padding: 10px 45px;

  p {
    width: 100%;
    display:block;
    text-align: center;
    font-size: 28px;
    font-weight: bold;
  }
}
</style>