<template>
  <article>
    <p class="start-text">
        Check out what we've got.
    </p>
  </article>
</template>

<script>

export default {
  name: "TheStartingPage",
  components: {
  }
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

.start-text {
  text-align: center;
  width: 100%;
  padding: 16px;
  justify-content: center;
  align-items: center;
}

@media screen and (min-width: 690px) {
  .start-text {
    width: 70%;
  }
}

@media screen and (min-width: 1350px) {
  .start-text {
    font-size: 20px;
  }
}
</style>
