<template>
    <div class="home">
        <div class="top">
            <img class="banner" src="../assets/banner.png">
            <div class="search"><img class="searchImg" src="../assets/search.png"></div>
        </div>
        <div class="classify">
            <div class="classify1" v-for="i in classifys" :key="i.name">
                <img :src="require('../assets/'+i.Img+'.png')">
                <p>{{i.name}}</p>
            </div>
        </div>
        <div>
            <div class="title">
                <span class="title1">新鲜上市</span>
                <span class="title2">更多</span>
            </div>
            <div class="new">
                <div class="Book">
                    <div class="book">
                        <div class="book1" v-for="h in books" :key="h.id">
                            <img class="bookImg" :src="require('../assets/'+h.Img+'.png')">
                            <div class="decorate"></div>
                        </div>
                    </div>
                </div>
                <div class="text"></div>
            </div>
        </div>
        <HelloWorld></HelloWorld>
    </div>
</template>
<script>
    export default {
        name: 'Home',
        data() {
            return {
                classifys: [
                    {
                        Img: 'mustListen',
                        name: '必听榜'
                    },
                    {
                        Img: 'dailyUpdate',
                        name: '每日更新'
                    },
                    {
                        Img: 'E-book',
                        name: '电子书'
                    },
                    {
                        Img: 'freeAdmission',
                        name: '免费'
                    },
                    {
                        Img: 'classification',
                        name: '分类'
                    }
                ],
                books: [{ Img: 'book1' }, { Img: 'book2' }, { Img: 'book3' }]
            }
        }
    }
</script>
<style lang="scss" scoped>
    .home {
        // height: 100%;
        background-color: #f5f5f5;
        .top {
            position: relative;
            height: 215px;
            .banner {
                height: 215px;
            }
            .search {
                position: absolute;
                top: 14px;
                right: 14px;
                width: 38px;
                height: 38px;
                line-height: 44px;
                background-color: #ffffff;
                border-radius: 50%;
                .searchImg {
                    width: 17px;
                    height: 17px;
                }
            }
        }
        .classify {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 77px;
            background-color: #ffffff;
            .classify1 {
                display: inline-block;
                width: 20%;
                font-size: 12px;
                img {
                    width: 31px;
                    height: 31px;
                }
            }
        }
        .title {
            display: flex;
            justify-content: space-between;
            padding: 22px 20px 14px;
            .title1 {
                color: #666666;
            }
            .title2 {
                color: #999999;
                font-size: 12px;
            }
        }
        .new {
            width: 100%;
            height: 285px;
            overflow: hidden;
            background-color: #ffffff;
            .Book {
                .book {
                    width: 515px;
                    padding-top: 28px;
                    .book1 {
                        display: inline-block;
                        position: relative;
                        width: 153px;
                        height: 225px;
                        box-shadow: 0px 7px 15px 6px rgba(0, 0, 0, 0.1);
                        margin-left: 14px;
                        .bookImg {
                            width: 153px;
                        }
                        .decorate {
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 10px;
                            height: 225px;
                            background: rgba(255, 200, 200, 0);
                            box-shadow: 1px 0px 3px 0px rgba(0, 0, 0, 0.14);
                        }
                    }
                }
            }
        }
    }
</style>
