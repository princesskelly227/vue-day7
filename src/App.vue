<template>
  <div>
    <MyHeader title="tabbar"></MyHeader>
    <div style='margin-top:45px'>
      <component :is="comName" ></component>
    </div>
    <MyTabBar :obj="tabList" @changeCom='changeComFn'></MyTabBar>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyTabBar from "./components/MyTabBar.vue";
import MyGoodsList from "./components/views/MyGoodsList.vue";
import MyGoodsSearch from "./components/views/MyGoodsSearch.vue";
import MyUserInfo from "./components/views/MyUserInfo.vue";
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
      comName: "MyGoodsList",
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
    changeComFn(val){
      this.comName =val
      console.log(val);
    }
  }
};
</script>

<style></style>
