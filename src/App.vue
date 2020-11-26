<template>
    <div id="box">
        <h1>{{initData}} </h1>
        <a class="links" href="https://juejin.im/post/5de87444518825124c50cd36#heading-15">2020年了,再不会webpack敲得代码就不香了</a><br>
        <a class="links" href="https://juejin.im/post/5afa9cd0f265da0b981b9af9">浅入浅出webpack</a>
        <index></index>
    </div>
</template>
<script>
import Index from './views/index'
export default {
    components: { Index },
    data(){
        return{
            initData: '这是通过webpack搭建起来的vue环境'
        }
    },
    created(){
        console.log(`process.argv=`, process.argv)
    },
    methods: {

    }
}
</script>
<style lang="less">
#box{
    color: burlywood;

    .links{
        color: burlywood;
        font-size: 18px;
        text-decoration: none;
    }
    .links:hover{
        color: chocolate;
    }
}
</style>