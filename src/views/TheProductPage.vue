<template>
  <article>
    <TheProduct />
    <TheProduct class="color-filter" />
  </article>
</template>

<script>
import "@/assets/css/styles.css";
import TheProduct from "@/components/TheProduct.vue";

export default {
  name: "TheProductPage",
  components: {
    TheProduct
  }
};
</script>

<style>

</style>
