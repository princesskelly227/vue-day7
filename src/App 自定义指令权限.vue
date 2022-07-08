<template>
  <div>
    <button v-hasProm="'add'">添加</button>
    <button v-hasProm="'view'">编辑</button>
    <button v-hasProm="'del'">删除</button>
  </div>
</template>

<script>
// 在 localStorage 本地缓存中 创建key为 perm  值为['add','view','update']
export default {
  data() {
    return {
      arr: ['add', 'view', 'update'],
    };
  },
  directives: {
    // 复杂写法
    // hasProm(el, binding, vnode) {
    //   // console.log(binding, vnode);
    //   // //拿到当前用户的所有的权限  假设权限列表['add','view','update']
    //   // // const perm = localStorage.getItem('perm');
    //   // const perm = vnode.context.arr;

    //   // //当前页面需要的权限
    //   // const needPerm = binding.value;

    //   // //判读是否有权限
    //   // const hasPermission = perm.includes(needPerm);

    //   //如果没有权限 就将该按钮隐藏 这里需要做一个延时处理，因为我们需要等待dom加载结束再进行处理Node节点
    //   if (!hasPermission) {
    //     setTimeout(() => {
    //       // console.log(el.parentNode.removeChild(el));
    //       el.style.display = 'none';
    //       console.log(el);
    //     }, 0);
    //   }
    // },

    // 简化写法
    hasProm(el, binding, vnode) {
      // console.log(binding, vnode);
      // //拿到当前用户的所有的权限  假设权限列表['add','view','update']
      // //当前页面需要的权限  判读按钮是否有权限

      const hasPermission = vnode.context.arr.includes(binding.value);
      //如果没有权限 就将该按钮隐藏 这里需要做一个延时处理，因为我们需要等待dom加载结束再进行处理Node节点
      if (!hasPermission) {
        setTimeout(() => {
          // console.log(el.parentNode.removeChild(el));
          el.style.display = 'none';
          console.log(el);
        }, 0);
      }
    },
  },
};
</script>

<style></style>
