<template>
  <nav>
    <div class="nav_list">
      <div class="nav_list_item" @click="changeHeader('Welcome')">
        <router-link
          to="/"
          class="nav_list_item_link"
          >Home</router-link
        >
      </div>
      <div class="nav_list_item" @click="changeHeader('Product Page')">
        <router-link to="/product" class="nav_list_item_link"
          >Product</router-link
        >
      </div>
      <div class="nav_list_item" @click="changeHeader('About this Exercise')">
        <router-link to="/about" class="nav_list_item_link">About</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TheNavbar",
  props: {
    changeHeader: Function
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
  margin-top: 0;
  background-color: lightgrey;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: 3px solid white;
  text-align: left;
}

.nav_list {
  display: block;
  margin-left: 16px;
}

.nav_list_item {
  display: inline-block;
  padding: 10px;
}

.nav_list_item_link {
  display: block;
  width: 100px;
  text-decoration: none;
  padding: 6px;
  background-color: white;
  text-align: center;
}

.nav_list_item_link:hover {
  background-color: grey;
  color: white;
}
.nav_list_item_link:focus {
  background-color: #c55c1b;
  color: white;
}

@media screen and (min-width: 1350px) {
  nav {
    text-align: center;
  }
}

@media screen and (max-width: 270px) {
  nav {
    text-align: center;
    margin: 0;
  }

  .nav_list {
    display: block;
    margin-left: 0;
  }

  .nav_list_item {
    display: block;
    padding: 2px;
  }

  .nav_list_item_link {
    font-size: 12px;
    border-bottom: 2px solid lightgrey;
    width: 100%;
  }
}
</style>
