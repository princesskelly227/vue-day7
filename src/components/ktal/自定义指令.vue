<template>
  <div>
    <input type="text" v-focus>
    <p v-color="colorStr" @click="changeColor">修改文字颜色</p>
  </div>
</template>

<script>
export default {
directives:{
    focus:{
        inserted(el){
            el.focus();
        }
    }
},data() {
    return {
      colorStr: "red",
    };
  },
  methods: {
    changeColor() {
      this.colorStr = 'blue';
    },
  },
}
</script>

<style>

</style>