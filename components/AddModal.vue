<template>
    <div class="modal-add" v-if="showModal">
        <no-ssr>
            <div class="flex flex-col">
                <textarea 
                    class="bg-[transparent] outline-none w-[96%] mt-[1em] ml-[0.5em]" 
                    placeholder="Digite um nome:" 
                    :value="value"
                    @input=" $emit('input', $event.target.value)"
                    @change="$emit('change')"
                />
                <div class="flex items-center p-[7px]">
                <button class="modal-button mr-4" @click="onAdd()">Add card</button>
                <img  class="modal-close" src="~/static/assets/svg/close.svg" @click="onClose"/> 
                </div>
            </div>
        </no-ssr>
    </div>
</template>
<script>
export default {
    name: 'AddModal',
    props: {
        value: {required: false},
        onAdd: {type: Function, required: false, default:() => {}},
        onClose: {type: Function, required: false, default:() =>{}},
        showModal: {type:Boolean, required: true, default:false},
    }
}
</script>
<style>
@import "@/static/scss/global.scss";
</style>