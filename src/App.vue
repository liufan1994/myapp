<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style lang="scss" scoped>
    #app {
        height: 100vh;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        // -webkit-font-smoothing: antialiased;
        // -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #333333;
        font-size: 14px;
    }
</style>
