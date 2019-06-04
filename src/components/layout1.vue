<template>
  <div id="root1" style="text-align:left">
    <div id="top_bar">
      <navtop></navtop>
    </div>
    <div id="content" style="background : #eeeeee ; display:inline-block;vertical-align:top">
    <router-view></router-view>
    </div>
   </div>
</template>
<style>
</style>

<script>
import navtop from "@/components/navtop";
import navleft from "@/components/leftnav";

export default {
  name: 'layout1',
  components: {
    navtop,
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
