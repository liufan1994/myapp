<template>
    <!-- <div class="HelloWorld"> -->
    <div class="menuBar">
        <div class="menuBar1" v-for="i in menuBars" :key="i.name" @click="menuBarFun">
            <img :src="require('../assets/'+i.Img+'.png')">
            <p>{{i.name}}</p>
        </div>
    </div>
    <!-- </div> -->
</template>

<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                menuBars: [
                    {
                        Img: 'home',
                        name: '首页'
                    },
                    {
                        Img: 'read',
                        name: '书架'
                    },
                    {
                        Img: 'thenListen',
                        name: '随时听'
                    },
                    {
                        Img: 'bookCircle',
                        name: '书友圈'
                    },
                    {
                        Img: 'my',
                        name: '我的'
                    }
                ]
            }
        },
        computed: {
            menuBarFun() {
                return Data.now()
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    // .HelloWorld {
    .menuBar {
        position: fixed;
        bottom: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 65px;
        background-color: #ffffff;
        box-shadow: 0px -1px 10px 0px rgba(170, 170, 173, 0.2);
        .menuBar1 {
            display: inline-block;
            width: 20%;
            font-size: 12px;
            img {
                width: 21px;
                height: 21px;
            }
        }
    }
    // }
</style>
