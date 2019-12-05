<template>
  <nav>
    <div class="nav_big-screen">
      <div class="nav_list nav_big-screen">
        <div class="nav_list_item" @click="changeHeader('Welcome')">
          <router-link to="/" class="nav_list_item_link">Home</router-link>
        </div>
        <div class="nav_list_item" @click="changeHeader('Product Page')">
          <router-link to="/product" class="nav_list_item_link"
            >Product</router-link
          >
        </div>
        <div class="nav_list_item" @click="changeHeader('About this Exercise')">
          <router-link to="/about" class="nav_list_item_link"
            >About</router-link
          >
        </div>
      </div>
    </div>
    <div class="nav_mobile">
      <a
        href="javascript:void(0);"
        class="icon"
        @click="toggleNav()"
        v-if="!hidden || !mobile"
      >
        <i class="fa fa-bars"></i>
      </a>
      <div class="nav_list" v-if="!hidden">
        <div class="nav_list_item" @click="changeHeader('Welcome')">
          <router-link to="/" class="nav_list_item_link">Home</router-link>
        </div>
        <div class="nav_list_item" @click="changeHeader('Product Page')">
          <router-link to="/product" class="nav_list_item_link"
            >Product</router-link
          >
        </div>
        <div class="nav_list_item" @click="changeHeader('About this Exercise')">
          <router-link to="/about" class="nav_list_item_link"
            >About</router-link
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TheNavbar",
  props: {
    changeHeader: Function
  },
  data() {
    return {
      hidden: false
    };
  },
  methods: {
    toggleNav() {
      this.hidden = !this.hidden;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
  background-color: lightgrey;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: 3px solid white;
  display: flex;
  flex-direction: row;
  padding: 12px;
  align-items: center;
}

.nav_mobile {
  display: none;
}

.nav_big-screen {
  align-self: center; /* Todo: center */
}

.icon {
  font-size: 26px;
  text-decoration: none;
  align-self: space-around;
  display: none;
}

.nav_list {
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.nav_list_item {
  display: inline-block;
  padding: 10px;
}

.nav_list_item_link {
  display: block;
  width: 100px;
  text-decoration: none;
  padding-top: 6px;
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
    flex-direction: row;
  }
}

@media screen and (max-width: 420px) {
  .icon {
    display: block;
    padding-top: 10px;
  }

  nav {
    background-color: white;
    justify-content: center;
    padding: 0;
    border-bottom: 1px solid black;
    padding-bottom: 10px;
    position: sticky;
    flex-direction: column;
  }

  .nav_big-screen {
    display: none; /* Todo: center */
  }

  .nav_mobile {
    display: block;
  }

  .nav_list {
    display: block;
    display: flex;
    flex-direction: column;
  }

  .nav_list_item {
    width: 90%;
    margin: 0;
    padding: 6px;
  }

  .nav_list_item_link {
    width: 100%;
    font-size: 14px;
  }
}
</style>
