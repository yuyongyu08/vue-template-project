<template>
    <div class="list">
        <common-header></common-header>
        <search-input @handle-Search="handleSearch"></search-input>
        <house-list :list="houseList"></house-list>
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
                houseList: []
            }
        },
        created(){
            this.handleSearch();
        },
        methods:{
            handleSearch(keyword){
                this.$util.requestHelper.get('https://easy-mock.com/mock/5d37c826c45d0c70bb9dd9f2/example/house/list').then(result => {
                    if(result && result.code == 0){
                        this.houseList = result.data.houseList;
                    }
                }).catch(err => {
                    console.log(err);
                });
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
        background: url("../../assets/imgs/bgk.jpeg") no-repeat;
    }
</style>