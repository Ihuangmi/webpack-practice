<template>
    <div id="index">
        111
    </div>
</template>

<script>
export default {
    created(){
        console.log(`process.env.NODE_ENV=`, process.env.NODE_ENV)
    }
}
</script>