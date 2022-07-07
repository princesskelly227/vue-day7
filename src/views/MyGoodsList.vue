<template>
  <div>
    <MyTable :arr="list">
      <template #header>
        <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>
      <template #table="scope">
        <td>{{ scope.row.id }}</td>
        <td>{{ scope.row.goods_name }}</td>
        <td>{{ scope.row.goods_price }}</td>
        <td>
          <span
            style="margin-right: 10px"
            class="badge badge-info"
            v-for="(item, index) in scope.row.tags"
            :key="index"
            >{{ item }}</span
          >
        </td>
        <td>
          <button class="btn btn-danger btn-sm" @click="delFn(scope.row.id)">
            删除
          </button>
        </td>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from '../components/MyTable.vue';
export default {
  data() {
    return {
      list: [],
    };
  },
  components: {
    MyTable,
  },
  created() {
    this.$axios({
      url: '/api/goods',
    }).then((res) => {
      // console.log(res.data.data);
      this.list = res.data.data;
    });
  },
  methods: {
    delFn(id) {
      const index = this.list.findIndex((ele) => {
        return ele.id === id;
      });
      this.list.splice(index, 1);
    },
  },
};
</script>

<style lang="less" scoped>
.my-goods-list {
  .badge {
    margin-right: 5px;
  }
}
</style>
