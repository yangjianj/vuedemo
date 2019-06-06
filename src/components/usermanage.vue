<template>
  <div id="usermanage" style="text-align:left ;width: 100%;padding-left:3px">
    <el-table
      :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%"
    >
      <el-table-column label="Workid" prop="workid"></el-table-column>
      <el-table-column label="Name" prop="name"></el-table-column>
      <el-table-column label="Role" prop="role"></el-table-column>
      <el-table-column label="Project" prop="project"></el-table-column>
      <el-table-column label="telephone" prop="telephone"></el-table-column>

      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="small" placeholder="输入关键字搜索"/>
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "userm",
  data() {
    const item = {};
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      search: ""
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
      this.$http({
      method: "post",
      url: "http://127.0.0.1:8090/get_all_user/",
      data: postdata
    })
      .then(function(response) {
        console.log("rrrrrrrrrrrrrrrrrrrsponbse");
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  },
  mounted: function() {
    var postdata = { name: "myname" };
    this.$http({
      method: "post",
      url: "http://127.0.0.1:8090/ajax/",
      data: postdata
    })
      .then(function(response) {
        console.log("rrrrrrrrrrrrrrrrrrrsponbse");
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style>
</style>