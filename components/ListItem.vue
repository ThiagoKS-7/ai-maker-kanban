<template>
    <div class="list-group-item">
        <div class="flex p-4">
            <img class="w-[35%] h-[3em]" :src="require('~/static/assets/svg/'+ element.status + '_blob.svg')" alt="icon"/>
            <div class="flex ml-3 flex-col">
                <h1 class="text-xl">{{ element.name }}</h1>
                <span class="text-[12px]">{{ element.status }}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ListItem',
    props: {
        element: {type:Object, required: true, default:{}},
    }
}
</script>
<style>
@import "@/static/scss/global.scss";
</style>