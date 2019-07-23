<template>
    <div class="list">
        <common-header></common-header>
        <search-input></search-input>
        <house-list></house-list>
    </div>
</template>

<script>
    import CommonHeader from '../../components/Header'
    import SearchInput from './components/SearchInput'
    import HouseList from './components/HouseList'

    export default {
        name: "index",
        data() {
            return {

            }
        },
        components: {
            CommonHeader,
            SearchInput,
            HouseList
        }
    }
</script>

<style lang="less">
    @import '../../assets/css/base.less';

    .list{
        padding: 10px;
    }
</style>