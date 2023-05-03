<template>
    <div v-if="showToast" class="toast">
        {{ message }}
    </div>
</template>
<script>
export default {
    name: 'MessageToast',
    props: {
        showToast: {type:Boolean, required: true, default:false},
        message: {type:String, required: true, default: 'Erro! Contate o admin do sistema'},
        className: {type:String, required: false, default:''},
    }
}
</script>