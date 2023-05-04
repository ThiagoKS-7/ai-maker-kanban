<template>
    <div v-if="showToast" :class="'toast ' + className"> 
        <div class="flex justify-around">
            <img class="toast-icon" src="~/static/assets/svg/info.svg" alt="icon"/>
            <span class="mx-2">{{ message }}</span>
            <img  class="modal-close" src="~/static/assets/svg/close.svg" @click="onClose"/> 
        </div>
    </div>
</template>
<script>
export default {
    name: 'MessageToast',
    props: {
        showToast: {type:Boolean, required: true, default:false},
        onClose: {type: Function, required: false, default:() =>{}},
        message: {type:String, required: true, default: 'Erro! Contate o admin do sistema'},
        className: {type:String, required: false, default:''},
        icon: {type:String, required: false, default:'~/static/assets/svg/info.svg'},
    }
}
</script>