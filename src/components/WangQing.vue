<template>
  <div class="WangQing">
    <b>{{ name }}</b>

    这是我的 VUE 界面！

    <WQButton v-for="btn in btnNames" :key="btn" :name="btn"/>

    <layer v-for="n in names" :key="n" :item="n" v-show="true"></layer>

  </div>
</template>

<script>

  export default {
    name: "WangQing",
    data() {
      return {
        name: "WangQing_VUE!",
        names: [
          {name: 'W'},
          {name: 'Q'},
          {name: 'L'},
        ],
        btnNames: [
          {name: 'Button1_WQ'},
          {name: 'Button2'},
          {name: 'Button3'},
          {name: 'Button4'},
        ]
      }
    }
  };

</script>

<style scoped>

</style>
