<template>
    <van-tabs 
        v-model="activeId"
        :type="type"
        :duration="duration"
        :background="background"
        :line-width="lineWidth"
        :line-height="lineHeight"
        :color="color"
        :title-active-color="titleActiveColor"
        :title-inactive-color="titleInactiveColor"
        :swipe-threshold="swipeThreshold"
        :offset-top="offsetTop"
        :animated="animated"
        :border="border"
        :ellipsis="ellipsis"
        :sticky="sticky"
        :swipeable="swipeable"
        :lazy-render="lazyRender"
        @change="tabChange"
        :class="scrollerable ? 'tab-scroller': sticky ? 'tab-list' : ''"
    >
        <scroller class="tab-scroller-container" :on-refresh="onRefresh" :on-infinite="onInfinite" v-if="scrollerable" ref="vanTabs">
            <van-tab v-for="(i,index) in title" :title="i.title" :key="index">
                <slot></slot>
            </van-tab>
        </scroller>
        <van-tab v-for="(i,index) in title" :title="i.title" :key="index" v-else>
            <slot></slot>
        </van-tab>
    </van-tabs>
</template>

<script>
import { Tab, Tabs } from 'vant';
export default {
    components:{
        [Tab.name]: Tab,
        [Tabs.name]: Tabs,
    },
    data () {
        return {
            activeId: this.index,
        }
    },
    props: {
        title: {                           //标题
            type: Array,
            default: ()=>[]
        },
        index: {                            //当前标签的索引
            type: [Number,String],
            default: 0
        },
        type: {                             //样式类型，可选值为card
            type: String,
            default: 'line'
        },
        duration: {                         //动画时间，单位秒
            type: Number,
            default: 0.3
        },
        background: {                       //标签栏背景色
            type: String,
            default: 'white'
        },
        lineWidth: {                        //底部条宽度，默认单位 px
            type: [Number,String],
            default: '47px'
        },
        lineHeight: {                       //底部条高度，默认单位 px
            type: [Number,String],
            default: '3px'
        },
        color: {                            //标签主题色
            type: String,
            default: '#f44'
        },
        titleActiveColor: {                 //标题选中态颜色
            type: String,
            default: '#f44'
        },
        titleInactiveColor: {               //标题默认态颜色
            type: String,
            default: '#7d7e80'
        },
        swipeThreshold: {                    //滚动阈值，标签数量超过多少个可滚动
            type: Number,
            default: 5
        },
        offsetTop: {                        //粘性定位布局下与顶部的最小距离，单位 px
            type: Number,
            default: 0
        },
        animated: {                        //是否开启切换标签内容时的转场动画,开启刷新功能一定要设置为false
            type: Boolean,
            default: true
        },
        border: {                          //是否显示标签栏外边框，仅在type="line"时有效
            type: Boolean,
            default: true
        },
        ellipsis: {                        //是否省略过长的标题文字
            type: Boolean,
            default: true
        },
        sticky: {                           //是否使用粘性定位布局
            type: Boolean,
            default: false
        },
        swipeable: {                          //是否开启手势滑动切换
            type: Boolean,
            default: true
        },
        lazyRender: {                        //是否开启标签页内容延迟渲染
            type: Boolean,
            default: true
        },
        scrollerable: {                       //是否开启刷新功能
            type: Boolean,
            default: false
        }
    },
    methods:{
        tabChange(index,title){
            if(this.scrollerable){
                this.$refs['vanTabs'].scrollTo(0,0);
            } 
            this.$emit('tab-change',index,title);
        },
        onRefresh(done){
            this.$emit('on-refresh',done);
        },
        onInfinite(done){
            this.$emit('on-infinite',done);
        },
    },
}
</script>
<style lang="scss">
.tab-scroller{
    height: 100%;
    .van-tabs__content{
        position: relative;
        height: 100%;
        .tab-scroller-container{
            height: auto !important;
            top: 0 !important;
            bottom: 49px !important;
        }
    }
}
.tab-list{
    padding-bottom: 49px;
    .van-tabs__wrap{
        position: fixed;
        top: 46px;
    }     
}
</style>