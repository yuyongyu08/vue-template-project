<template>
    <div>
        <input class="keyword" placeholder="请输入小区名..." v-model="keyword" v-auto-focus/>
        <button class="search-btn" @click="search">搜索</button>
    </div>
</template>

<script>
    export default {
        name: "search-input",
        data(){
          return {
              keyword: ''
          }
        },
        methods:{
            search(){
                if(this.keyword.trim().length){
                    console.log(this.keyword.length); //v-model不会自动清除空格

                }else{
                    this.$toast({
                        title: 'toast title',
                        content: `关键词长度为：${this.keyword.length}`,
                        repeatShow: true
                    });
                }
            }
        }
    }
</script>

<style lang="less">
    .keyword, .search-btn{
        border: 1px solid #e0e0e0;
    }

    .keyword{
        text-indent: 10px;

        &:focus{
            border-color: red;
        }
    }
</style>