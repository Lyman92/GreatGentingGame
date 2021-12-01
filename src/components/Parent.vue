<template>
    <div class="box">
        <button @click="tap">父亲的值</button>
        <slot></slot>
    </div>
</template>

<script>
export default {
    data:function(){
        return {
            parentData:'我是父亲'
        }
    },
    provide: function(){
        return {
            getParentData:this.parentData
        }
    },
    methods: {
        tap:function () {
            console.log(this.parentData);
        }
    }
}
</script>

<style>

.box {
    border:1px solid black;
    height: 300px;
    margin-top: 1rem;
}

</style>