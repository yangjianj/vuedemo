<template>
  <div>
    <!--  表格  -->
    <el-table :data="showdatas" style="width: 100%">
      <el-table-column label="项目" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="台数" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="CPU" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="CPU占比" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="内存" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="内存占比" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="系统容量" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="日期" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="日期" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="日期" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="日期" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="姓名" width="180">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <!--<p>项目: {{ scope.row.project }}</p>-->
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--底部工具条-->
    <el-pagination
      style="float:right"
      :page-size="pagesize"
      :pager-count="11"
      layout="prev, pager, next"
      :total="total"
      v-on:current-change="handlechange"
    ></el-pagination>
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
</template>

<script>
export default {
  name: "table2",
  data() {
    return {
      total: 1000,
      showdatas: [],
      default_page: 1,
      pagesize: 10, //每页显示条数
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
        {
          date: "2016-05-02",
          name: "0",
          address: "2"
        },
        {
          date: "2016-05-04",
          name: "1",
          address: "3"
        },
        {
          date: "2016-05-01",
          name: "2",
          address: "44"
        },
        {
          date: "2016-05-03",
          name: "3",
          address: "55"
        },
        {
          date: "2016-05-04",
          name: "4",
          address: "66"
        },
        {
          date: "2016-05-01",
          name: "5",
          address: "110"
        },
        {
          date: "2016-05-03",
          name: "6",
          address: "111"
        },
        {
          date: "2016-05-04",
          name: "7",
          address: "112"
        },
        {
          date: "2016-05-01",
          name: "8",
          address: "上海2"
        },
        {
          date: "2016-05-03",
          name: "9",
          address: "上海市普陀"
        },
        {
          date: "2016-05-03",
          name: "10",
          address: "111"
        },
        {
          date: "2016-05-04",
          name: "11",
          address: "112"
        },
        {
          date: "2016-05-01",
          name: "王12",
          address: "上海2"
        },
        {
          date: "2016-05-03",
          name: "王13",
          address: "上海市普陀"
        },
        {
          date: "2016-05-03",
          name: "14",
          address: "111"
        },
        {
          date: "2016-05-04",
          name: "15",
          address: "112"
        },
        {
          date: "2016-05-01",
          name: "王16",
          address: "上海2"
        },
        {
          date: "2016-05-03",
          name: "王17",
          address: "上海市普陀"
        },
        {
          date: "2016-05-03",
          name: "18",
          address: "111"
        },
        {
          date: "2016-05-04",
          name: "19",
          address: "112"
        },
        {
          date: "2016-05-01",
          name: "王20",
          address: "上海2"
        },
        {
          date: "2016-05-03",
          name: "王21",
          address: "上海市普陀"
        }
      ]
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
      this.editdispaly = true;
      this.editForm = Object.assign({}, row); //浅拷贝
      console.log(row.name);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    handlechange(num) {
      //切换页面时执行方法
      this.page = num;
      this.showdata(num);
    },
    showdata(currpage) {
      //页面切换或加载时数据处理函数
      this.total = this.tableData.length;
      this.page = currpage;
      this.showdatas = this.tableData.slice(
        this.pagesize * (this.page - 1),
        this.pagesize * (this.page - 1) + this.pagesize
      );
    },
    handleCurrentChange(val) {
      this.page = val;
      this.getUsers();
    },
    clickSubmit() {
      console.log("edit submit");
      this.editdispaly = false;
    },
    close() {
      this.editdispaly = false;
      let postdata=this.$qs.stringify({
          username:'myname',
          password:'myinfo',
      });
      this.$http({
        method:'post',
        url:'http://127.0.0.1:8090/ajax/',
        data:postdata
      })
      .then(function(response){
        console.log('rrrrrrrrrrrrrrrrrrrsponbse')
        console.log(response)
      })
      .catch(function(error){
        console.log(error)
      })
      
    }
  },
  mounted: function() {
    //组件挂载时回调函数
    console.log("vue object mouted");
    this.showdata(this.default_page);
  }
};
</script>