<template>
  <div class="wq">

    <b>{{ name }}</b>
    <layer v-for="name in names" :key="name" v-bind:item="name"/>
  </div>
</template>

<script>
  export default {
    name: "WangQing",
    data() {
      return {
        name: "WangQing_VUE!",
        names: [
          { name: 'W'},
          { name: 'Q'},
          { name: 'L'},
        ]
      }
    }
  }
</script>

<style scoped>

</style>
