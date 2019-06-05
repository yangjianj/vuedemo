<template>
  <div id="workd" style="white-space:nowrap;text-align:left">
      <!--<div id="nav_left" style="float:left; background:#701;width:20%"> </div>-->
      <div style="display:inline-block;vertical-align:top">
        <navleft></navleft>
      </div>
      <div id="content" style="background : #eeeeee ; display:inline-block;vertical-align:top">
        <router-view></router-view>
      </div>
  </div>
</template>
<style>
</style>

<script>
import navleft from "@/components/leftnav";

export default {
  name: "workb",
  components: {
    navleft
  },
  data() {
    const item = {};
    return {
      tableData: "1"
    };
  }
};
</script>
