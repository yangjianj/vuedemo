<template>
  <div>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px; display:block ">
      <div v-on:change="openmethd()"><el-radio-button :label="false" v-if="opennav" style="width:64px">展开</el-radio-button></div>
      <div v-on:change="openmethd()"><el-radio-button :label="true" v-if="!opennav" style="width:64px">收起</el-radio-button> </div>
    </el-radio-group>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"  
      @close="handleClose"
      :collapse="isCollapse"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <!--<el-menu-item index="1-1"><router-link to="/table1">选项1</router-link></el-menu-item>-->
          <el-menu-item index="1-1">
            <p @click="mm()">table</p>
          </el-menu-item>
          <el-menu-item index="1-2">
            <router-link to="/form1">form</router-link>
          </el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="1-3">
            <router-link to="/">返回首页</router-link>
          </el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1" @click='showtable()'>表格</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title"><router-link to="/datacharts">导航四</router-link></span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 160px;
  min-height: 400px;
}
</style>

<script>
import Router from "vue-router";
export default {
  name: "navleft",
  data() {
    return {
      opennav: true,
      isCollapse: true
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      this.opennav=!this.opennav
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      this.opennav=!this.opennav
      console.log(key, keyPath);
    },
    mm() {
      this.$router.push("/form1");
      console.log("to 11");
    },
    showtable(){
      this.$router.push("/table2");
      console.log("to 11");
    },
    openmethd(){
      this.opennav = !this.opennav
      console.log(this.opennav)
    }
  }
};
</script>