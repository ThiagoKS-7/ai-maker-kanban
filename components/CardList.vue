<template>
    <div class="relative">
        <no-ssr>
            <h3 :class="tagClass">{{ title }}</h3>
            <div class="flex flex-col items-center">
                <draggable :class="dragbClass" :list="list" v-bind="dragOptions">
                    <slot/>
                </draggable>
                <span :class="buttonClass" @click="$emit('onOpen')">
                    + Add new AI card
                </span>
            </div>
        </no-ssr>
        <div v-if="showModal">
            <ModalAdd 
                :value="value"
                :showModal="showModal"
                :onAdd="onAdd"
                :onClose="onClose"
                @input=" $emit('input', $event)"
                @change="$emit('change')"
            />
        </div>
    </div>
</template>
<script>
import draggable from "vuedraggable";
import ModalAdd from "@/components/AddModal"
export default {
    name: 'CardList',
    components: {
        draggable,
        ModalAdd
    },
    props: {
        dragbClass: {type: String, required: true, default: 'list-group'},
        buttonClass: {type: String, required: false, default: 'add-button'},
        tagClass: {type: String, required: true, default: 'tag bg-slate-500'},
        title: {type: String, required: true, default: ''},
        list: { type: Array, required: true, default: []},
        dragOptions: {type:Object, required: true, default:{}},
        value: {required: false},
        showModal: {type:Boolean, required: false, default:false},
        onAdd: {type:Function, required: false, default: ()=> {}},
        onClose: {type: Function, required: false, default:() =>{}},
    },
}
</script>
<style>
@import "@/static/scss/global.scss";
</style>