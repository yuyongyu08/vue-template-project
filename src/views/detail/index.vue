<template>
    <div>
        <common-header></common-header>
        <house-detail :detail-info="detailInfo"></house-detail>
    </div>
</template>

<script>
    import CommonHeader from '../../components/Header'
    import HouseDetail from './components/HouseDetail'

    export default {
        name: "index",
        data() {
            return {
                detailInfo: {
                    infoId: '5tgb',
                    title: '整租 东沙各庄村委会 1室0厅1卫',
                    picUrl: 'https://pic4.58cdn.com.cn/mobile/big/n_v1bkuymc6ygbnvthtjc5uq.jpg',
                    desc: "公寓·9㎡·朝南",
                    price: '5000'
                }
            }
        },
        components: {
            CommonHeader,
            HouseDetail
        }
    }
</script>

<style>
    @import '../../assets/css/base.less';
</style>