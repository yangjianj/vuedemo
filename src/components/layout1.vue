<template>
  <div id="root1">
    <div id="top_bar">
      <navme1></navme1>
    </div>
   <div id="to2">
    <!--<div id="nav_left" style="float:left; background:#701;width:20%"> </div>-->
    <navleft style="float:left ; background:#cc0000"></navleft>
    <div id="content" style="float:left;background:#aa0055 ;width:auto">
    <router-view></router-view>
    </div>
   </div>
  </div>
</template>
<style>
</style>

<script>
import navme1 from "@/components/navm1";
import navleft from "@/components/leftnav";

export default {
  name: 'layout1',
  components: {
    navme1,
    navleft
  },
  data() {
    const item = {
    };
    return {
      tableData: '1'
    }
  }
}
</script>
