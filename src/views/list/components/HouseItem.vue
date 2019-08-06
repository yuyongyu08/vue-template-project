<template>
    <div class="house-item">
        <img class="pic" :src="detailInfo.picUrl | imageHandler(100, 100, 1)"/>
        <div class="infos">
            <a class="title">{{detailInfo.title | subText(8)}}</a>

            <div>
                <span class="desc">{{detailInfo.desc}}</span>
                <span class="price">{{detailInfo.price}}元</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "house-item",
        props: {
            detailInfo: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style lang="less">
    .house-item{
        border-top: 2px solid #e0e0e0;
        min-height: 100px;
        padding: 30px;

        .pic{
            width: 240px;
            height: 180px;
        }

        .infos{
            display: inline-block;

            .title{
                font-size: 30px;
            }

            .desc{
                font-size:22px;
                color:rgba(102,102,102,1);
            }

            .price{
                color: red;
                font-size: 18px;
            }
        }
    }
</style>