<template>
    <div>
        <no-ssr>
            <h3 :class="tagClass">{{ title }}</h3>
            <div class="flex flex-col items-center">
                <draggable :class="dragbClass" :list="list" v-bind="dragOptions">
                    <slot/>
                </draggable>
                <span :class="buttonClass" @click="onAdd">
                    + Add new AI card
                </span>
            </div>
        </no-ssr>
    </div>
</template>
<script>
import draggable from "vuedraggable";
export default {
    name: 'CardList',
    components: {
        draggable
    },
    props: {
        dragbClass: {type: String, required: true, default: 'list-group'},
        buttonClass: {type: String, required: false, default: 'add-button'},
        tagClass: {type: String, required: true, default: 'tag bg-slate-500'},
        title: {type: String, required: true, default: ''},
        list: { type: Array, required: true, default: []},
        dragOptions: {type:Object, required: true, default:{}},
        onAdd: {type:Function, required: false, default: ()=> {}},
    }
}
</script>
<style>
@import "@/static/scss/global.scss";
</style>