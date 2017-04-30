<template>
<div>
    <h3>我是A组件</h3>{{a}}
    <input type="button" value="把A数据给C" @click="send">
</div>
</template>
<script>
import {mapActions} from 'vuex'
    export default{
        data(){
            return{
                a:"我是a数据"
            }
        },
        mounted(){
        },
        methods:{
            send(){
                this.$store.dispatch('sendA',this.a);
            }
        },
    }
</script>