<template>
  <div>
    <div><slot name="top"></slot></div>
    <button @click="tap">取得父亲内容</button>
    <input ref="input" v-model="inputValue"/>
    <div><slot></slot></div>
    <div><slot name="bottom" :user="user"></slot></div>
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  inheritAttrs: false,
  props: ["title"],
  inject:['getParentData'],
  methods: {
    tap(){
      this.inputValue=this.getParentData;
      console.log(this.inputValue);
      console.log(this.getParentData);
      console.log(this.$refs.input.value);
    }
  },
  data: function () {
    return {
      user: { name: "子组件" },
      inputValue:''
    };
  },
};
</script>