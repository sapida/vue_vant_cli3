<template>
    <div>
        <lg-header :leftArrow="false" :titleType="2">
            <template slot="tab">
                <lg-tab :title="headTit" type="card" titleActiveColor="#fff" @tab-change="tabChange"></lg-tab>
            </template>
        </lg-header>
        <div class="list">
            <lg-tab :title="title" :scrollerable="true" :animated="false" @tab-change="tabChange" @on-refresh="onRefresh" @on-infinite="onInfinite">
                <p v-for="i in num">{{i}}</p>
            </lg-tab>
        </div>
        <lg-footer :index="0"></lg-footer>
    </div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
    data(){
        return {
            headTit:[{title:'标题1'},{title:'标题2'}],
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
        onRefresh(done){
            setTimeout(()=>{
                done();
            },1500)
        },
        onInfinite(done){
            setTimeout(()=>{
                this.num += 50;
                done();
            },1500)
        }
    },
}
</script>
<style lang="scss" scoped>
.list{
    height: 100%;
    padding-top: 46px;
}
</style>