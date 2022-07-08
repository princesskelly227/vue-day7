<template>
  <div>
    <MyTable :arr="list">
      <template v-slot:header>
        <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>
      <template v-slot:tbody="scope">
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
            @blur="scope.row.inputVisible = false"
            v-model="tagsA"
            @keydown.enter="enterFn(scope.row)"
            @keydown.esc="tagsA = ''"
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
            v-for="(str, ind) in scope.row.tags"
            :key="ind"
            class="badge badge-warning"
          >
            {{ str }}
          </span>
        </td>
        <td>
          <button
            class="btn btn-danger btn-sm"
            @click="removeBtn(scope.row.id)"
            v-Promission='btnG'
          >
            删除
          </button>&nbsp;&nbsp;
          <button  class="btn btn-danger btn-sm" @click='detail(scope.row)'>详情</button>
        </td>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from "../MyTable.vue";
export default {
  data() {
    return {
      list: [],
      tagsA: "",
      btnG:[1,2,3,4],
    };
  },
  components: {
    MyTable,
  },
  created() {
    this.$axios({
      url: "/api/goods",
    }).then(
      (res) =>
        // console.log(res)
        (this.list = res.data.data) // this.list=res.data.data
    );
  },
  methods: {
    removeBtn(val) {
      const index = this.list.findIndex((res) => res.id == val);
      this.list.splice(index, 1);
    },
    enterFn(val) {
      if (this.tagsA.trim().length == 0) {
        this.tagsA = "";
        return alert("please enter");
      }
      console.log(val);
      val.tags.push(this.tagsA);
      this.tagsA = "";
    },
    detail(val){
      console.log(val);
      alert(val)
    }
  },
  directives: {
    Promission: {
      inserted(el,bind,vnode) {
        // console.log(bind.value);
      if(!bind.value.includes(Math.floor(Math.random()*10))){
        el.remove()
      }
      },
      update() {},
    },
  },
};
</script>

<style></style>
