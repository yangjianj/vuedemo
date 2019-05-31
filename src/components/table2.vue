<template>
<div>
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
    <el-table-column label="CPU占比" width=180>
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
    <el-table-column label="姓名" width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>项目: {{ scope.row.project }}</p>
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
  <el-pagination style="float:right"
  :page-size=pagesize
  :pager-count="11"
  layout="prev, pager, next"
  :total=total
  v-on:current-change="handlechange">
</el-pagination>
</div>
</template>

<script>
export default {
  name: "table2",
  data() {
    return {
        total:1000,
        showdatas:[],
        default_page:1,
        pagesize:10,  //每页显示条数
      tableData: [
        {
          date: "2016-05-02",
          name: "2",
          address: "2"
        },
        {
          date: "2016-05-04",
          name: "3",
          address: "3"
        },
        {
          date: "2016-05-01",
          name: "4",
          address: "44"
        },
        {
          date: "2016-05-03",
          name: "5",
          address: "55"
        },
        {
          date: "2016-05-04",
          name: "6",
          address: "66"
        },
        {
          date: "2016-05-01",
          name: "7",
          address: "110"
        },
        {
          date: "2016-05-03",
          name: "8",
          address: "111"
        },
        {
          date: "2016-05-04",
          name: "9",
          address: "112"
        },
        {
          date: "2016-05-01",
          name: "10",
          address: "上海2"
        },
        {
          date: "2016-05-03",
          name: "11",
          address: "上海市普陀"
        },
        {
          date: "2016-05-03",
          name: "12",
          address: "111"
        },
        {
          date: "2016-05-04",
          name: "13",
          address: "112"
        },
        {
          date: "2016-05-01",
          name: "王14",
          address: "上海2"
        },
        {
          date: "2016-05-03",
          name: "王15",
          address: "上海市普陀"
        }
      ]
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    handlechange(num){     //切换页面时执行方法
        console.log(num);
        this.page=num;
        console.log(this.page)
        this.showdata(num);
        console.log(this.showdatas)
    },
    showdata(currpage){
    this.total=this.tableData.length
    this.page=currpage
    console.log(12333)
    console.log(this.tableData)
    console.log(this.tableData[5,10])
    console.log(8858585)
    this.showdatas=this.tableData[5,10]
    console.log(this.showdatas)
    },
    handleCurrentChange(val) {
				this.page = val;
				this.getUsers();
            },
    mounted() {
			this.showdata(default_page);
		}
    }
};
</script>