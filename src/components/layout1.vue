<template>
  <div id="root1">
    <div id="top_bar">
      <navme1></navme1>
    </div>
   <table id="to2">
     <tr>
    <!--<div id="nav_left" style="float:left; background:#701;width:20%"> </div>-->
    <td style="background : #00aa00">
    <navleft ></navleft>
    </td>
    <td id="content" style="background : #aa0000 ; max-width:1500px">
    <router-view></router-view>
    </td>
    </tr>
   </table>
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
