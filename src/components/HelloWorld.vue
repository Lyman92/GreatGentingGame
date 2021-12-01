<template>
<div>
  <el-button @click="tap">点我一下</el-button>
  <el-row style="margin-top:1rem;">
    <el-col :span="12"><div class="grid-content bg-purple">{{aclass.param1}}</div></el-col>
    <el-col :span="12"><div class="grid-content bg-purple-light">{{aclass.param2}}</div></el-col>
    <el-col :span="12"><div class="grid-content bg-purple-light">{{aclass.param3}}</div></el-col>
  </el-row>
</div>
</template>
<script>

class AClass {
  constructor(p1,p2) {
    this.param1 = p1;
    this.param2 = p2;
    this.param3 = 'eeee';
  }
}

export default {
  created(){
    
  },

  data(){
    return {
      visible: false,
      aclass:{}
    }
  },
  props:{},
  methods: {
    tap(){

      this.aclass = new AClass('ppp','ccc');
    }
  },
}


</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple-light {
  background: #e5e9f2;
}
.bg-purple {
    background: #d3dce6;
  }
</style>
