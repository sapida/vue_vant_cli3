<template>
    <div>
        <lg-header :leftArrow="false" :titleType="1" title="按钮"></lg-header>
        <scroller class="scroller-foot">
            <van-button type="default" size="large" @click="submit(1)">提示弹窗</van-button>
            <van-button type="primary" size="large" @click="submit(2)">提示弹窗（无标题）</van-button>
            <van-button type="info" size="large" @click="submit(3)">确认弹窗</van-button>
            <van-button type="warning" size="large" @click="submit(4)">文字提示</van-button>
        </scroller>
        <lg-footer :index="2"></lg-footer>
    </div>
</template>

<script>
import { Button } from 'vant';
export default {
    components: {
        [Button.name]: Button  
    },
    data(){
        return {
            
        }
    },
    methods: {
        submit(key){
            switch (key) {
                case 1:
                    this.$vantAlert.dialogAlert()
                    break;
                case 2:
                    this.$vantAlert.dialogAlert({title:''})
                    break;
                case 3:
                    this.$vantAlert.dialogConfirm()
                    break;
                case 4:
                    this.$vantAlert.toast({type:'loading'},()=>{
                        this.$vantAlert.toast({msg:'加载成功'})
                    })
                    break;
                default:
                    break;
            }
        }
    }
}
</script>
<style lang="scss" scoped>

</style>