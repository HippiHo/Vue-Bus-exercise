<template>
  <header>
    <h1>Vue {{ product }} Exercise</h1>
    <hr />
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  props: {
    product: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  margin-top: 110px;
  z-index: 100;
}

h1 {
  color: #c55c1b;
  font-size: 36px;
  line-height: 1.2;
  text-shadow: 3px 3px 3px #342220;
  margin-bottom: 16px;
}

hr {
  border-top: 6px groove #342220;
  border-bottom: 6px groove #c55c1b;
  border-right: 6px groove #342220;
  border-left: 6px groove #342220;
  width: 100%;
}

@media screen and (min-width: 690px) {
  h1 {
    font-size: 60px;
  }

  hr {
    border-top: 5px groove #342220;
    border-bottom: 5px groove #c55c1b;
    border-right: 5px groove #342220;
    border-left: 5px groove #342220;
    margin-bottom: 16px;
  }
}

@media screen and (min-width: 1350px) {
  h1 {
    font-size: 64px;
  }
}

@media screen and (max-width: 420px) {
  header {
    margin-top: 20px;
  }
}
</style>
