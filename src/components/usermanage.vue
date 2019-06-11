<template>
  <div id="usermanage" style="text-align:left ;width: 100%;padding-left:3px">
    <div id="table">
      <el-table
        :data="curr_page_data.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%"
      >
        <el-table-column label="Workid" prop="workid"></el-table-column>
        <el-table-column label="Name" prop="name"></el-table-column>
        <el-table-column label="Role" prop="role"></el-table-column>
        <el-table-column label="Project" prop="project"></el-table-column>
        <el-table-column label="telephone" prop="telephone"></el-table-column>

        <el-table-column align="right">
          <template slot="header" slot-scope="scope">
            <el-input v-model="search" size="small" placeholder="search by name"/>
          </template>
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
            >Delete</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div id="boot_bar">
      <!--底部工具条-->
      <el-pagination
        style="float:right"
        :page-size="pagesize"
        :pager-count="8"
        layout="prev, pager, next"
        :total="total"
        v-on:current-change="handlechange"
      ></el-pagination>
    </div>
    <div id="edit">
      <!--  edit form -->
      <el-dialog :visible.sync="editdispaly" width="650px" height="600px">
        <el-form ref="editform" :model="editForm" label-width="80px" size="mini" :inline="true">
          <el-form-item label="Name" label-width="100px">
            <el-input v-model="editForm.name" width="120px"></el-input>
          </el-form-item>
          <el-form-item label="Workid" label-width="100px">
            <el-input v-model="editForm.workid" width="120px"></el-input>
          </el-form-item>
          <br>
          <el-form-item label="Project" label-width="100px">
            <el-input v-model="editForm.project" width="120px"></el-input>
          </el-form-item>
          <el-form-item label="Telephone" label-width="100px">
            <el-input v-model="editForm.telephone" width="120px"></el-input>
          </el-form-item>
          <br>
          <el-form-item label="Role" label-width="100px">
            <el-radio-group v-model="editForm.role" size="medium">
              <el-radio border label="admin"></el-radio>
              <el-radio border label="guest"></el-radio>
              <el-radio border label="other"></el-radio>
            </el-radio-group>
          </el-form-item>
          <br>
          <el-form-item size="large" label="  " label-width="190px">
            <el-button type="primary" @click="clickSubmit()">保存</el-button>
            <el-button @click="close">取消</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: "userm",
  data() {
    const item = {};
    return {
      mydata: {},
      all_user_data: [],
      curr_page_data: [],
      pagesize: 15,
      curr_page: 1,
      total: 100,
      editForm: {
        //编辑页面数据
        name: "",
        workid: "",
        date1: "",
        date2: "",
        role: "",
        project: "",
        telephone: ""
      },
      editdispaly: false,
      tableData: [
        //example data
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
      let postdata = this.$qs.stringify({
        username: "myname",
        password: "myinfo"
      });
      this.editForm = row;
      this.editdispaly = true;
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    handlechange(num) {
      //切换页面时执行方法
      this.curr_page = num;
      this.showdata(num);
    },
    showdata(currpage) {
      //页面切换或加载时数据处理函数
      this.curr_page = currpage;
      this.curr_page_data = this.all_user_data.slice(
        this.pagesize * (this.curr_page - 1),
        this.pagesize * (this.curr_page - 1) + this.pagesize
      );
    },
    handleCurrentChange(val) {
      this.curr_page = val;
      this.getUsers();
    },
    close() {
      this.editdispaly = false;
    },
    clickSubmit() {

      let postdata=this.$qs.stringify(this.editForm);
      this.$http({
        method: "post",
        url: "http://127.0.0.1:8090/update_user/",
        data: postdata
      })
        .then(response => {
          console.log(response.data);
        })
        .catch(function(error) {
          console.log(error);
        });
        this.editdispaly=false;
    }
  },
  mounted: function() {
    let postdata = this.$qs.stringify({
      username: "myname",
      password: "myinfo"
    });
    this.$http({
      method: "post",
      url: "http://127.0.0.1:8090/get_all_user/",
      data: postdata
    })
      .then(response => {
        this.all_user_data = eval("(" + response.data + ")");
        this.showdata(this.curr_page);
        this.total = this.all_user_data.length;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style>
</style>