<template>
  <footer>Created by {{ author }}</footer>
</template>

<script>

export default {
  name: 'TheFooter',
  data() {
      return {
          author: 'E. Maschke'
      }
  }
}

</script>

<style>

footer {
    font-size: 14px;
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid black;
}

</style>