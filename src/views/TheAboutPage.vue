<template>
  <article>
    <p class="about-text">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet.
    </p>
  </article>
</template>

<script>
export default {
  name: "TheAboutPage",
  components: {}
};
</script>

<style>
article {
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-text {
  text-align: left;
  width: 75%;
  padding: 16px;
  justify-content: center;
  align-items: center;
}

@media screen and (min-width: 690px) {
  .about-text {
    width: 70%;
  }
}

@media screen and (min-width: 1350px) {
  .about-text {
    font-size: 20px;
  }
}
</style>
