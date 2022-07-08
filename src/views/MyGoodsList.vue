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
          <input
            class="tag-input form-control"
            style="width: 100px"
            type="text"
            v-if="scope.row.inputVisible"
            v-focus
            v-model="scope.row.inputValue"
            @blur="scope.row.inputVisible = false"
            @keydown.enter="enterFn(scope.row)"
            @keydown.esc="scope.row.inputValue = ''"
          />
          <button
            v-else
            style="display: block"
            class="btn btn-primary btn-sm add-tag"
            @click="scope.row.inputVisible = true"
          >
            +Tag
          </button>
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
          <button
            style="margin-left: 10px"
            type="button"
            class="btn btn-info"
            @click="getqx()"
            v-hasProm="Math.floor(Math.random() * 5)"
          >
            详情
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
      arr: ['admin', 'view', 'update'],
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
    enterFn(obj) {
      if (obj.inputValue.trim() == '') {
        return alert('请输入');
      }
      obj.tags.push(obj.inputValue); // 表单里的字符串状态tags数组
      obj.inputValue = '';
    },
    getqx() {
      console.log(this.list);
    },
  },

  directives: {
    hasProm: {
      inserted(el, binding, vnode) {
        const show = vnode.context.arr.includes(
          vnode.context.arr[binding.value]
        );
        if (!show) {
          // console.log(show);
          el.style.display = 'none';
        }
      },
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
