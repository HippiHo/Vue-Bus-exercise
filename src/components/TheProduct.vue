<template>
  <section class="product">
    <figure class="product_visuals">
      <img src="../assets/bus.jpg" alt="Bus" :class="imageClass()"/>
      <figcaption
        class="margin-top--16 product_image_caption"
        v-html="copyright"
      ></figcaption>
    </figure>
    <div class="product_info">{{ product.toUpperCase() }}</div>
  </section>
</template>

<script>
export default {
  name: "TheProduct",
  data() {
    return {
      product: "bus",
      copyright:
        'Photo by revac film\'s&photography from <a href="https://www.pexels.com/de-de/foto/auto-fahrzeug-bus-reise-54278/">Pexels</a>',
      blue: false
    };
  },
  methods: {
    imageClass(){
      let imageClass = "product_image";

      if (this.blue) {
        imageClass += " " + "color-filter--complementary"
      }

      return imageClass;
    }
  }
};
</script>

<style>
.product {
  background-color: white;
  padding: 16px;
  display: flex;
  width: 100%;
  flex-flow: column;
}

.product_image {
  border: black solid 2px;
  box-shadow: 0px 0.5px 1px #d8d8d8;
  width: 100%;
}

.product_image_caption {
  font-weight: 500;
  font-size: 12px;
}

.product_visuals {
  justify-content: flex-start;
  border-bottom: 1px solid black;
  padding-bottom: 16px;
}

.product_visuals,
.product_info {
  width: 80%;
}

.product_info {
  text-align: left;
  padding: 16px;
}


@media screen and (min-width: 690px) {
  .product {
    flex-direction: row;
  }

  .product_visuals {
    border: none;
    justify-content: flex-start;
  }

  .product_info {
    justify-content: flex-end;
  }

  .product_image_caption {
    font-size: 16px;
  }
}
</style>
