<template>
    <div class="modal-add" v-if="showModal">
        <no-ssr>
            <slot></slot>
        </no-ssr>
    </div>
</template>
<script>
export default {
    name: 'CardList',
    props: {
        showModal: {type:Boolean, required: true, default:false},
    }
}
</script>
<style>
@import "@/static/scss/global.scss";
</style>