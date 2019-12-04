<template>
  <div id="app">
    <TheNavbar class="color-filter--complementary" :changeHeader="changeHeader" />
    <TheHeader :product="product" />
    <h2>{{ intro }}</h2>
    <router-view />
    <TheFooter />
  </div>
</template>

<script>
import "@/assets/css/styles.css";
import TheNavbar from "@/components/TheNavbar.vue";
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  name: "app",
  components: {
    TheNavbar,
    TheHeader,
    TheFooter
  },
  data() {
    return {
      intro: "Welcome",
      product: "Bus" // Todo: Try to find a way to pass that to the product component.
    };
  },
  methods: {
    changeHeader(newHeader) {
      this.intro = newHeader;
    }
  }
};
</script>

<style>
#app {
  font-family: "Biryani", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 20px;
  padding-left: 14px;
  padding-right: 14px;
}

a {
  color: #c55c1b;
  font-weight: bold;
}

@media screen and (min-width: 400px) {
  #app {
    padding-bottom: 12px;
  }
}

@media screen and (min-width: 460px) {
  #app {
    padding-bottom: 12px;
  }
}

@media screen and (min-width: 550px) {
  #app {
    padding-bottom: 12px;
  }
}

@media screen and (min-width: 690px) {
  #app {
    padding-bottom: 12px;
  }
}

@media screen and (min-width: 1350px) {
  #app {
    width: 1350px;
    margin: 0 auto;
  }
}
</style>
