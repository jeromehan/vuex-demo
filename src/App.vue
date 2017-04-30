<template>
<div>
    <com-a></com-a>
    <com-b></com-b>
    <com-c></com-c>
</div>
</template>
<script>
    import comA from './components/com-a.vue'
    import comB from './components/com-b.vue'
    import comC from './components/com-c.vue'
    export default{
        data(){
            return{
               
            }
        },
        components:{
            "com-a":comA,
            "com-b":comB,
            "com-c":comC,
        }
    }
</script>