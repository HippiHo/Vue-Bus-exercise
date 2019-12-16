<template>
  <figure class="visuals">
    <img src="../assets/bus.jpg" alt="Bus" :class="imageClass()" />
    <figcaption
      class="margin-top--16 visuals__caption"
      v-html="copyright"
    ></figcaption>
  </figure>
</template>

<script>
export default {
  name: "TheImage",
  data() {
    return {
      copyright:
        'Photo by revac film\'s&photography from <a href="https://www.pexels.com/de-de/foto/auto-fahrzeug-bus-reise-54278/">Pexels</a>'
    };
  },
  props: {
      blue: Boolean
  },
  methods: {
    imageClass() {
      let imageClass = "visuals__image";

      if (this.blue) {
        imageClass += " " + "color-filter--complementary";
      }

      return imageClass;
    }
  }
};
</script>

<style>
.visuals {
  border-bottom: 1px solid black;
  padding-bottom: 16px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 80%;
}

.visuals__image {
  border: black solid 2px;
  box-shadow: 0px 0.5px 1px #d8d8d8;
  width: 100%;
}

.visuals__caption {
  font-weight: 500;
  font-size: 10px;
  text-align: left;
}

@media screen and (min-width: 690px) {
  .visuals {
    border: none;
    justify-content: flex-start;
    align-content: flex-start;
  }

  .visuals__caption {
    font-size: 14px;
  }
}
</style>
