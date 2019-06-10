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
            <el-input v-model="search" size="small" placeholder="输入关键字搜索"/>
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
        :pager-count="11"
        layout="prev, pager, next"
        :total="total"
        v-on:current-change="handlechange"
      ></el-pagination>
    </div>
    <div id="edit">
      <!--  edit form -->
      <el-dialog :visible.sync="editdispaly">
        <el-form ref="editform" :model="editForm" label-width="80px" size="mini">
          <el-form-item label="活动名称">
            <el-input v-model="editForm.name"></el-input>
          </el-form-item>
          <el-form-item label="活动区域">
            <el-select v-model="editForm.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="活动时间">
            <el-col :span="11">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="editForm.date1"
                style="width: 100%;"
              ></el-date-picker>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-time-picker placeholder="选择时间" v-model="editForm.date2" style="width: 100%;"></el-time-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="活动性质">
            <el-checkbox-group v-model="editForm.type">
              <el-checkbox-button label="美食/餐厅线上活动" name="type"></el-checkbox-button>
              <el-checkbox-button label="地推活动" name="type"></el-checkbox-button>
              <el-checkbox-button label="线下主题活动" name="type"></el-checkbox-button>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="特殊资源">
            <el-radio-group v-model="editForm.resource" size="medium">
              <el-radio border label="线上品牌商赞助"></el-radio>
              <el-radio border label="线下场地免费"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item size="large">
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
      pagesize: 10,
      curr_page: 1,
      total: 100,
      editForm: {
        //编辑页面数据
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
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
    },
    handlechange(num) {
      //切换页面时执行方法
      this.curr_page = num;
      this.showdata(num);
    },
    showdata(currpage) {
      //页面切换或加载时数据处理函数
      this.curr_page= currpage;
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
        console.log(typeof response.data);
        this.all_user_data = eval("(" + response.data + ")");
        console.log(this.all_user_data);
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