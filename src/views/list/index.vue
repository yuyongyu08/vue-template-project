<template>
    <div>
        <img class="logo" src="../../assets/imgs/logo.png"/>
        <search-input></search-input>
        <house-list></house-list>
    </div>
</template>

<script>
    import SearchInput from './components/SearchInput'
    import HouseList from './components/HouseList'

    export default {
        name: "index",
        data() {
            return {

            }
        },
        components: {
            SearchInput,
            HouseList
        }
    }
</script>

<style>
    @import '../../assets/css/base.less';

    .logo{
        width: 50px;
        height: 50px;
    }
</style>