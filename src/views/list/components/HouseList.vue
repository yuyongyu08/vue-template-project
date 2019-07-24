<template>
    <div>
        <house-item v-for="(house, $index) in houseList" :key="$index" :detail-info="house"></house-item>
    </div>
</template>

<script>
    import HouseItem from './HouseItem'
    import listApi from '../../../services/list'

    export default {
        name: "house-list",
        props: {
            list: {
                type: Array
            }
        },
        watch: {
            list(val){
                this.houseList = val
            }
        },
        data(){
            return {
                houseList: this.list
            }
        },
        methods:{
            handleScroll(){
                listApi.getList().then(result => {
                    if(result && result.code == 0){
                        this.houseList = this.houseList.concat(result.data.houseList);
                    }
                }).catch(err => {
                    console.log(err);
                });
            }
        },
        components: {
            HouseItem
        }
    }
</script>

<style lang="less">

</style>