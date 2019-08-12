import Vue from 'vue'
import { Dialog } from 'vant';
import { Toast } from 'vant';
Vue.use(Toast);

//注册全局组件
import header from '@/components/layout/header'
import footer from '@/components/layout/footer'
import tab from '@/components/layout/tab'
Vue.component('lg-header', header);
Vue.component('lg-footer', footer);
Vue.component('lg-tab', tab);

//注册全局方法
function dialogAlert(params,submit) {
    params = params || {};
    params.title = params.title === undefined ? '标题' : params.title;
    params.msg = params.msg === undefined ? '弹窗内容' : params.msg;
    params.confirmButtonText = params.confirmButtonText === undefined ? '确定' : params.confirmButtonText;
    params.confirmButtonColor = params.confirmButtonColor === undefined ? '#1989fa' : params.confirmButtonColor;
    Dialog.alert({
        title: params.title,
        message: params.msg,
        confirmButtonText: params.confirmButtonText,
        confirmButtonColor: params.confirmButtonColor,
    }).then(() => {
        if(submit) submit();
    });
}

function dialogConfirm(params,submit,cancel) {
    params = params || {};
    params.title = params.title === undefined ? '标题' : params.title;
    params.msg = params.msg === undefined ? '弹窗内容' : params.msg;
    params.confirmButtonText = params.confirmButtonText === undefined ? '确定' : params.confirmButtonText;
    params.confirmButtonColor = params.confirmButtonColor === undefined ? '#1989fa' : params.confirmButtonColor;
    params.cancelButtonText = params.cancelButtonText === undefined ? '取消' : params.cancelButtonText;
    params.cancelButtonColor = params.cancelButtonColor === undefined ? '#000' : params.cancelButtonColor;
    Dialog.confirm({
        title: params.title,
        message: params.msg,
        confirmButtonText: params.confirmButtonText,
        confirmButtonColor: params.confirmButtonColor,
        cancelButtonText: params.cancelButtonText,
        cancelButtonColor: params.cancelButtonColor,
    }).then(() => {
        if(submit) submit();
    }).catch(() => {
        if(cancel) cancel();
    });
}

function toast(params,onClose) {
    params = params || {};
    params.type = params.type === undefined ? 'text' : params.type;
    params.msg = params.msg === undefined ? '提示内容' : params.msg;
    params.icon = params.icon === undefined ? '' : params.icon;
    params.mask = params.mask === undefined ? false : params.mask;
    params.duration = params.duration === undefined ? '3000' : params.duration;
    Toast({
        type: params.type,
        message: params.msg,
        icon: params.icon,
        mask: params.mask,
        duration: params.duration,
        onClose:onClose
    });
}

export var vantModule = {
    dialogAlert,
    dialogConfirm,
    toast
}
Vue.prototype.$vant = vantModule;
