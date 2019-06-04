<template>
  <div id="root1">
    <div id="top_bar">
      <navme1></navme1>
    </div>
   <div id="to2" style="white-space:nowrap;text-align:left">
    <!--<div id="nav_left" style="float:left; background:#701;width:20%"> </div>-->
    <div style="background : #00aa00; display:inline-block;vertical-align:top">
    <navleft ></navleft>
    </div>
    <div id="content" style="background : #eeeeee ; display:inline-block;vertical-align:top">
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
