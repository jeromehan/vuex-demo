<template>
<div>
    <h3>我是B组件</h3>{{b}}
    <input type="button" value="把B数据给C" @click="send">
</div>
</template>
<script>
    export default{
         data(){
            return{
                b:"我是b数据"
            }
        },
        methods:{
            send(){
                this.$store.dispatch('sendB',this.b);
            }
        }
    }
</script>