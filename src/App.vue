<template>
  <div>
    <MyHeader title="TabBar"></MyHeader>
    <div style="margin-top: 45px">
      <component :is="goodName"></component>
    </div>
    <MyTabBar :list="tabList" @cheage="changeFn"></MyTabBar>
  </div>
</template>

<script>
// 引入组件
import MyHeader from './components/MyHeader.vue';
import MyTabBar from './components/MyTabBar.vue';

//
import MyGoodsList from './views/MyGoodsList.vue';
import MyGoodsSearch from './views/MyGoodsSearch.vue';
import MyUserInfo from './views/MyUserInfo.vue';
export default {
  data() {
    return {
      goodName: 'MyGoodsList',
      tabList: [
        {
          iconText: 'icon-shangpinliebiao',
          text: '商品列表',
          componentName: 'MyGoodsList',
        },
        {
          iconText: 'icon-sousuo',
          text: '商品搜索',
          componentName: 'MyGoodsSearch',
        },
        {
          iconText: 'icon-user',
          text: '我的信息',
          componentName: 'MyUserInfo',
        },
      ],
    };
  },
  components: {
    MyHeader,
    MyTabBar,
    MyGoodsList,
    MyGoodsSearch,
    MyUserInfo,
  },
  methods: {
    changeFn(val) {
      this.goodName = val;
      // console.log(val);
    },
  },
};
</script>

<style></style>
