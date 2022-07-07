<template>
  <div>
    <MyHeader title="tabbar"></MyHeader>
    <div style="margin-top:45px">
        <component :is='Name'></component>
    </div>
    <MyTabBar :list="tabList" @Tab="change"></MyTabBar>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyTabBar from "./components/MyTabBar.vue";
import MyGoodsList from "./components/MyGoodsList.vue";
import MyGoodsSearch from "./components/MyGoodsSearch.vue";
import MyUserInfo from "./components/MyUserInfo.vue";
export default {
  data() {
    return {
      tabList: [
        {
          iconText: "icon-shangpinliebiao",
          text: "商品列表",
          componentName: "MyGoodsList",
        },
        {
          iconText: "icon-sousuo",
          text: "商品搜索",
          componentName: "MyGoodsSearch",
        },
        {
          iconText: "icon-user",
          text: "我的信息",
          componentName: "MyUserInfo",
        },
      ],
      Name:'MyGoodsList'
    };
  },
  components: {
    MyHeader,
    MyTabBar,
    MyGoodsList,
    MyGoodsSearch,
    MyUserInfo,
  },
  methods:{
    change(val){
        this.Name = val
    }
  }
};
</script>

<style></style>
