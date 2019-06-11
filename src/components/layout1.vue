<template>
  <div id="root1" style="text-align:left">
    <div id="top_bar">
      <navtop></navtop>
    </div>
    <div id="content" style="width:100%; height:100%;background : #eeeeee ; display:inline-block; vertical-align:top">
    <router-view></router-view>
    </div>
   </div>
</template>
<style>
</style>

<script>
import navtop from "@/components/navtop";

export default {
  name: 'layout1',
  components: {
    navtop
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
