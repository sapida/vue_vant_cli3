<template>
    <div>
        <lg-header :leftArrow="false" :titleType="1" title="列表"></lg-header>
        <div class="list">
            <lg-tab :title="title" @tab-change="tabChange" :offsetTop="46" :sticky="true">
                <p v-for="i in num">{{i}}</p>
            </lg-tab>
        </div>
        <lg-footer :index="1"></lg-footer>
    </div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
    data(){
        return {
            title:[
                {id:'1',title:'标题1'},
                {id:'2',title:'标题2'},
                {id:'3',title:'标题3'},
                {id:'4',title:'标题4'},
                {id:'4',title:'标题5'}
            ],
            num: 20,
            show: true,
        }
    },
    methods:{
        tabChange(index,title){
            this.num = (index+1)*20;
        },
    },
}
</script>
<style lang="scss" scoped>
.list{
    height: 100%;
    padding-top: 46px;
}
</style>