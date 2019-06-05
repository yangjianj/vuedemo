
<template>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item index="1">
      <router-link to="/envir">环境信息</router-link>
    </el-menu-item>
    <el-submenu index="2">
      <template slot="title">我的工作台</template>
      <el-menu-item index="2-1">
        <router-link to="form1">脚本管理</router-link>
      </el-menu-item>
      <el-menu-item index="2-2">任务调度</el-menu-item>
      <el-menu-item index="2-3">任务查看</el-menu-item>
    </el-submenu>
    <el-menu-item index="3" disabled>消息中心</el-menu-item>
    <el-menu-item index="4">
      <router-link to="userm">用户管理</router-link>
    </el-menu-item>
    <!--
    <el-submenu index="5" style="float:right">
      <template slot="title">登陆</template>
      <el-menu-item index="5-1" style="width:20px">选项1</el-menu-item>
      <el-menu-item index="5-2" style="width:20px">选项2</el-menu-item>
      <el-menu-item index="5-3" style="width:20px">选项3</el-menu-item>
    </el-submenu>-->
    <div
      id="logout"
      style="display:inline-block;width:100px;height:60px;float:right ; text-align:right;background:#111111"
    >
      <el-dropdown :hide-on-click="false">
        <span class="el-dropdown-link">1234
          <!--下拉菜单<i class="el-icon-arrow-down1 el-icon--right1"></i>-->
          <span>
            <img style="width:60px;height:60px ;float:right" src="../images/tou.jpg">
          </span>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>1233</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-menu>
</template>
<script>
export default {
  name: "navtop",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>


<script>
export default {
  name: "navme1",
  data() {
    username='myname';
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      tableData: "1"
    };
  }
};
</script>

<style>
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>