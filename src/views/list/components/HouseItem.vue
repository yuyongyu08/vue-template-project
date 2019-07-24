<template>
    <div class="house-item">
        <img class="pic" :src="detailInfo.picUrl | imageHandler(100, 100, 1)"/>
        <div class="infos">
            <a>{{detailInfo.title | subText(8)}}</a>
            <div>
                {{detailInfo.desc}} <span class="price">{{detailInfo.price}}元</span>
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
        border-bottom: 1px solid #e0e0e0;
        min-height: 100px;
        padding: 10px 0;

        .pic{
            width: 100px;
            height: 100px;
            float: left;
        }

        .infos{
            margin-left: 110px;

            .price{
                color: red;
                font-size: 18px;
            }
        }
    }
</style>