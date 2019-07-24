<template>
    <div class="list">
        <common-header></common-header>
        <search-input @handle-Search="handleSearch"></search-input>
        <house-list :list="houseList"></house-list>
    </div>
</template>


<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import CommonHeader from '../../components/Header.vue'
    import SearchInput from './components/SearchInput.vue'
    import HouseList from './components/HouseList.vue'
    import RequestHelper from '../../utils/request-helper'

    @Component({
        components: {
            CommonHeader,
            SearchInput,
            HouseList
        }
    })
    export default class IndexDecorator extends Vue {
        // inital data
        houseList = [];

        // method
        handleSearch(keyword: string){
            RequestHelper.get('https://easy-mock.com/mock/5d37c826c45d0c70bb9dd9f2/example/house/list').then((result: any) => {
                if(result && result.code == 0){
                    this.houseList = result.data.houseList;
                }
            }).catch((err: any) => {
                console.log(err);
            });
        }
    }
</script>

<style lang="less">
    @import '../../assets/css/base.less';

    .list{
        padding: 10px;
    }
</style>