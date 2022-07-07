<template>
  <div>
    <input type="text" v-model="val" v-focus v-number="val" />

    <!-- 先自定义属性 用到update 数据改变就会触发 点击的时候把值传进去 -->
    <h3 v-Color="colorStr" @click="colorStr = 'green'">点我改变颜色</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      val: '',
      colorStr: 'pink',
    };
  },
  directives: {
    focus: {
      // inserted 进入页面就会执行这个指令
      inserted(el) {
        el.focus();
      },
      // update DOM元素的数据发生改变就会执行命令
      update(el) {
        el.focus();
      },
    },
    number: {
      // inserted(el, binding, vnode) {
      //   console.log(el, binding, vnode);
      //   // el代表的是这个元素 ， binding代表的是元素属性的集合 ， vnode的context属性 代表的是这个组件 也代表这个vue组件实例
      // },
      update(el, binding, vnode) {
        console.log(el, binding, vnode);
        // el代表的是这个元素 ， binding代表的是元素属性的集合 ， vnode的context属性 代表的是这个组件 也代表这个vue组件实例
        // 数据改变 就把value重新赋值  但是只匹配数字
        el.value = el.value.replace(/[^\d.]/g, ''); //会导致页面 除了数字还有字母等的在闪动 vue里面也会记录字母
        vnode.context[binding.expression] = el.value;
      },
    },
    Color: {
      inserted(el) {
        el.style.color = 'pink';
      },
      update(el, binding) {
        el.style.color = binding.value;
      },
    },
  },
};
</script>

<style></style>
