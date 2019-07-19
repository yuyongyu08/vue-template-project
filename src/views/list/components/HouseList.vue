<template>
    <div>
        <house-item v-for="(house, $index) in houseList" :key="$index" :detail-info="house"></house-item>
    </div>
</template>

<script>
    import HouseItem from './HouseItem'

    export default {
        name: "house-list",
        data(){
            return {
                houseList: [
                    {
                        infoId: '1qaz',
                        title: '整租 东沙各庄村委会 1室0厅1卫',
                        picUrl: 'https://pic4.58cdn.com.cn/mobile/big/n_v1bkuymc6ygbnvthtjc5uq.jpg',
                        desc: "公寓·9㎡·朝南",
                        price: '5000'
                    },
                    {
                        infoId: '2wsx',
                        title: '整租 东沙各庄村委会 1室0厅1卫',
                        picUrl: 'https://pic4.58cdn.com.cn/mobile/big/n_v1bkuymc6ygbnvthtjc5uq.jpg',
                        desc: "公寓·9㎡·朝南",
                        price: '5000'
                    },
                    {
                        infoId: '3edc',
                        title: '整租 东沙各庄村委会 1室0厅1卫',
                        picUrl: 'https://pic4.58cdn.com.cn/mobile/big/n_v1bkuymc6ygbnvthtjc5uq.jpg',
                        desc: "公寓·9㎡·朝南",
                        price: '5000'
                    },
                    {
                        infoId: '4rfv',
                        title: '整租 东沙各庄村委会 1室0厅1卫',
                        picUrl: 'https://pic4.58cdn.com.cn/mobile/big/n_v1bkuymc6ygbnvthtjc5uq.jpg',
                        desc: "公寓·9㎡·朝南",
                        price: '5000'
                    },
                    {
                        infoId: '5tgb',
                        title: '整租 东沙各庄村委会 1室0厅1卫',
                        picUrl: 'https://pic4.58cdn.com.cn/mobile/big/n_v1bkuymc6ygbnvthtjc5uq.jpg',
                        desc: "公寓·9㎡·朝南",
                        price: '5000'
                    }
                ]
            }
        },
        components: {
            HouseItem
        }
    }
</script>

<style lang="less">

</style>