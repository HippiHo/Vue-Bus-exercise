<template>
  <section class="product">
    <figure class="product_visuals">
      <img src="../assets/bus.jpg" alt="Bus" :class="imageClass()" />
      <figcaption
        class="margin-top--16 product_image_caption"
        v-html="copyright"
      ></figcaption>
    </figure>
    <div class="product_info">
      <h3>
        {{ product.toUpperCase() }}
        <span v-if="parked" class="status">parked</span>
        <span v-else class="status">on the road</span>
      </h3>
      <p>
        Available colors:
      </p>
      <div class="color-switch">
        <div class="color-switch_button" @click="toOrange()"></div>
        <div class="color-switch_button blue" @click="toBlue()"></div>
      </div>
      <p>
        Info:
      </p>
      <ul>
        <li v-for="(detail, index) in details" :key="index">{{ detail }}</li>
      </ul>
      <div class="parking-space">
        <p>
          Available parking spots:
        </p>
        <input type="number" v-model="parkingSpots" />
        <button @click="parkBus()" :class="imageClass()">
          Park {{ product }}
        </button>
      </div>
    </div>
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
      blue: false,
      details: ["Max. 130 km/h", "Screens", "Sockets", "Wifi"],
      parked: false,
      parkingSpots: 10
    };
  },
  methods: {
    imageClass() {
      let imageClass = "product_image";

      if (this.blue) {
        imageClass += " " + "color-filter--complementary";
      }

      return imageClass;
    },
    toOrange() {
      this.blue = false;
      this.parked = false;
    },
    toBlue() {
      this.blue = true;
      this.parked = false;
    },
    parkBus() {
      this.parked = true;
      if (this.parkingSpots > 0) {
        this.parkingSpots -= 1;
      }
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
  align-items: center;
}

.product_image {
  border: black solid 2px;
  box-shadow: 0px 0.5px 1px #d8d8d8;
  width: 90%;
}

.product_image_caption {
  font-weight: 500;
  font-size: 12px;
}

.product_visuals {
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

.status {
  color: darkgrey;
  font-size: 16px;
}

.color-switch_button {
  width: 130px;
  height: 30px;
  background-color: #c55c1b;
  display: inline-block;
  border: 1px solid black;
}

.color-switch_button:focus {
  border: 2px solid black;
}

.blue {
  filter: hue-rotate(180deg);
}

button {
  background-color: #c55c1b;
  color: white;
  font-size: 16px;
}

input,
button {
  padding: 16px;
  width: 130px !important;
  font-weight: bold;
  border: 1px solid black;
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
