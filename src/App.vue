<template>
  <div id="app">

    <hello-world></hello-world>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';


export default {
  name: "App",
  components: {
    HelloWorld,
  },
  mounted: function () {
  },
  data: function () {
    return {
      vmValue: "666",
      currentTab:'HelloWorld',
      show:true,
      tabs:['HelloWorld','BaseInput'],
    };
  },
  methods: {
    inpppp(value) {
      console.log(value.target.value);
    },
    taps(){
      this.status++;
      this.$refs.input.$refs.input.focus();
    }
  },
  computed:{
    currentComponent:function() {
      if(this.currentTab=='HelloWorld'){
        return 'HelloWorld';
      } 
      return 'BaseInput';
    }
  }
};
</script>

<style>

.btn{
  color: aqua;
  font-size: large;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}



.helloShow-enter-active, .helloShow-leave-active, .helloShow-enter-to{
  transition: 2s;
  color: red;
}

.helloShow-enter, .helloShow-leave-to {
  color: rebeccapurple;
}

.tran {
  font-weight: bold;
}
</style>
