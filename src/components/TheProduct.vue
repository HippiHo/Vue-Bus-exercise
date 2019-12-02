<template>
    <figure class="product">
      <img src="../assets/bus.jpg" alt="Bus" class="product_image">
      <figcaption class="margin-top--16 product_image_caption" v-html="copyright"></figcaption>
    </figure>
</template>

<script>

export default {
  name: 'TheProduct',
  data() {
      return {
          author: 'E. Maschke',
          copyright: 'Photo by revac film\'s&photography from <a href="https://www.pexels.com/de-de/foto/auto-fahrzeug-bus-reise-54278/">Pexels</a>',
      }
  }
}

</script>

<style>

.product {
  background-color: white;
  padding: 16px;
  margin: 10px;
  display: inline-block;
  width: 80%;
}

.product_image {
  border: black solid 2px;
  width: 100%;
}

.product_image_caption {
  font-weight: bold;
  font-size: 12px;
}

@media screen and (min-width: 690px) {

  .product {
    background-color: white;
    padding: 26px;
    width: 600px;
  }

  .product_image {
    width: 100%;
    margin: 0;
  }

  .product_image_caption {
    font-size: 16px;
  }
}

</style>