<template>
  <div id="app">
    <TheNavbar
      class="color-filter--complementary"
      :changeHeader="changeHeader"
    />
    <TheHeader :product="product" />
    <h2>《 {{ intro }} 》</h2>
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
  padding-bottom: 12px;
}

a {
  color: #c55c1b;
  font-weight: bold;
}

h2 {
  color: black;
  font-size: 24px;
  line-height: 1.2;
  margin-bottom: 16px;
}

h3 {
  color: black;
  font-size: 22px;
  line-height: 1.2;
  margin-bottom: 16px;
  margin-top: 0;
}

  p {
    font-size: 12px;
    margin: 0;
  }

  ul {
    list-style: outside square;
    margin-left: 0;
  }

  li {
    font-size: 12px;
  }

@media screen and (min-width: 690px) {
  h2 {
    font-size: 32px;
    line-height: 1.2;
    margin-bottom: 16px;
  }

  h3 {
    font-size: 28px;
    line-height: 1.2;
    margin-bottom: 16px;
    border-bottom: 1px solid black;
  }

  p, li {
    font-size: 18px;
  }
}

@media screen and (min-width: 1350px) {
  #app {
    width: 1350px;
    margin: 0 auto;
  }
}
</style>
