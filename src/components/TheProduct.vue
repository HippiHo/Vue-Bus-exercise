<template>
  <section class="product">
    <TheImage :blue="blue" />
    <div class="product_info">
      <h3>
        {{ product.toUpperCase() }}
        <span v-if="parked" class="product_info_status">parked</span>
        <span v-else class="product_info_status">on the road</span>
      </h3>
      <p>
        Available colors:
      </p>
      <div class="product_info_color-switch">
        <div class="product_info_color-switch_button" @click="toOrange()"></div>
        <div
          class="product_info_color-switch_button --blue"
          @click="toBlue()"
        ></div>
      </div>
      <p>
        Info:
      </p>
      <ul>
        <li v-for="(detail, index) in details" :key="index">{{ detail }}</li>
      </ul>
      <div class="product_info_parking-space">
        <p>
          Available parking spots:
        </p>
        <input type="number" v-model="parkingSpots" />
        <button @click="parkBus()" >
          Park {{ product }}
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import TheImage from "@/components/TheImage.vue";

export default {
  name: "TheProduct",
    components: {
    TheImage
  },
  data() {
    return {
      product: "bus",
      blue: false,
      details: ["Max. 130 km/h", "Screens", "Sockets", "Wifi"],
      parked: false,
      parkingSpots: 10
    };
  },
  methods: {
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
  display: flex;
  width: 100%;
  flex-flow: column;
  align-items: center;
  margin: 16px 0;
}

.product_info {
  width: 80%;
}

.product_info {
  text-align: left;
  padding: 16px;
}

.product_info_status {
  color: darkgrey;
  font-size: 16px;
}

.product_info_color-switch_button {
  width: 130px;
  height: 30px;
  background-color: #c55c1b;
  display: inline-block;
  border: 1px solid black;
}

.product_info_color-switch_button:focus {
  border: 2px solid black;
}

.--blue {
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
    align-items: flex-start;
  }

  .product_info {
    justify-content: flex-end;
  }
}
</style>
