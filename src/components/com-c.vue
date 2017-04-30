<template>
<div>
    <h3>我是C组件</h3>
    从a组件得到的数据：{{amsg}}
    <br>
    从b组件得到的数据：{{bmsg}}
</div>
</template>
    
<script>
import { mapState,mapGetters} from 'vuex'
    export default{
        data(){
            return{
               
            }
        },
        computed:{
            // ...mapState({
            //     a:state =>state.a,
            //     b:state =>state.b
            // }),
            ...mapGetters(['amsg','bmsg'])
        }
    }
</script>