<template>
    <div class="startUp">
        <img class="logo" src="../assets/logo.png">
        <div class="name">开启·新的学习方式</div>
    </div>
</template>

<script>
    export default {
        name: 'Start',
        data() {
            return {
                msg: ''
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .startUp {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background-color: #00ab91;
        .logo {
            width: 100px;
            padding-top: 220px;
        }
        .name {
            color: #ffffff;
            padding-bottom: 53px;
        }
    }
</style>
