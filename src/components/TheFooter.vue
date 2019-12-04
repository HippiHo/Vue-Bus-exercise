<template>
  <footer>Created by EM in {{ date }}</footer>
</template>

<script>
export default {
  name: "TheFooter",
  data() {
    return {
      date: "2019"
    };
  }
};
</script>

<style>
footer {
  font-size: 14px;
  padding: 16px;
  border-top: 1px solid black;
  background: linear-gradient(-45deg, #c55c1b, #1b84c5);
  color: white;
  font-size: 12px;
}
</style>
