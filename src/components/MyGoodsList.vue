<template>
  <div>
    <MyTable :arr="list">
      <template #thead>
        <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>
      <template #tbody="scope">
        <td>{{ scope.row.id }}</td>
        <td>{{ scope.row.goods_name }}</td>
        <td>{{ scope.row.goods_price }}</td>
        <td>
          <input
            class="tag-input form-control"
            style="width: 80px; height: 20px; display: inline"
            type="text"
            v-focus
            @blur="scope.row.inputVisible = false"
            v-model="scope.row.inputValue"
            @keydown.enter="enterfn(scope.row)"
            @keydown.esc="scope.row.inputValue = ''"
            v-if="scope.row.inputVisible"
          />
          <button
            v-else
            class="btn btn-primary btn-sm add-tag"
            @click="scope.row.inputVisible = true"
          >
            +Tag
          </button>
          <span
            style="margin-left: 8px"
            class="badge badge-warning"
            v-for="(item, index) in scope.row.tags"
            :key="index"
            >{{ item }}</span
          >
        </td>
        <td>
          <button class="btn btn-danger btn-sm" @click="del(scope.row.id)" v-Permissions='arr'>删除</button>
        </td>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from "./MyTable.vue";
export default {
  components: {
    MyTable,
  },
  data() {
    return {
      list: [],
      arr:[1,2,3]
    };
  },
  created() {
    this.$axios({
      url: "/api/goods",
    }).then((res) => {
      console.log(res);
      this.list = res.data.data;
    });
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      },
    },
    Permissions:{
        inserted(el,bind,vnode){
            console.log(bind);
            console.log(vnode);
            if(bind.value.indexOf(4)==-1){
                el.parentNode.removeChild(el);
            }
        }
    }
  },
  methods: {
    enterfn(val) {
      if (val.inputValue.trim() == "") {
        val.inputValue = "";
        return alert("内容不能为空");
      }
      val.tags.push(val.inputValue);
      val.inputValue = "";
    },
    del(id){
        const index=this.list.findIndex(ele=>ele.id=id)
        this.list.splice(index,1);
    }
  },
};
</script>

<style></style>
