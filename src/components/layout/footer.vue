<template>
    <van-tabbar 
        v-model="active" 
        active-color="#07c160"
        @change="tabClick"
    >
        <van-tabbar-item icon="home-o" replace>标签</van-tabbar-item>
        <van-tabbar-item icon="search">标签</van-tabbar-item>
        <van-tabbar-item icon="friends-o">按钮</van-tabbar-item>
        <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant';
export default {
    components:{
        [Tabbar.name]: Tabbar,
        [TabbarItem.name]: TabbarItem,
    },
    props: {
        index: {
            type: Number,
            default: 0
        }
    },
    data(){
        return {
            active: this.index
        }
    },
    methods:{
        tabClick(key){
            
        }
    },
}
</script>
<style lang="scss" scoped>

</style>