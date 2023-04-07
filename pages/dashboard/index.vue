<script setup>
import { useKanbanStore } from "@/store/kanbanStore"
const store = useKanbanStore()
</script>
<template>
  <div class="dashboard-wrapper">
      <ThemeSwitch class="absolute top-5 right-5"/>
      <h1 class="title my-9 font-mono">
       AI Dashboard
    </h1>
    <div class="flex">
      <div class="col-3">
        <h3 class="tag bg-red-500">On training</h3>
        <draggable class="list-group br-white" :list="store.kList.trainTable" v-bind="dragOptions" group="people">
          <div
            class="list-group-item"
            v-for="(element, index) in store.kList.trainTable"
            :key="element.name"
          >
            {{ element.name }}
          </div>
        </draggable>
      </div>

      <div class="col-3">
        <h3 class="tag bg-orange-500">Testables</h3>
        <draggable class="list-group br-white" :list="store.kList.testTable" v-bind="dragOptions" group="people">
          <div
            class="list-group-item"
            v-for="(element, index) in store.kList.testTable"
            :key="element.name"
          >
            {{ element.name }}
          </div>
        </draggable>
      </div>

      <div class="col-3">
        <h3 class="tag bg-green-500">Deployables</h3>
        <draggable class="list-group br-white" :list="store.kList.useTable" v-bind="dragOptions" group="people">
          <div
            class="list-group-item"
            v-for="(element, index) in store.kList.useTable"
            :key="element.name"
          >
            {{ element.name }}
          </div>
        </draggable>
      </div>

      <div class="col-3">
        <h3 class="tag bg-violet-500">Downloadables</h3>
        <draggable class="list-group" :list="store.kList.downloadTable" v-bind="dragOptions" group="people">
          <div
            class="list-group-item"
            v-for="(element, index) in store.kList.downloadTable"
            :key="element.name"
          >
            {{ element.name }} {{ index }}
          </div>
        </draggable>
      </div>
    </div>
  </div>
</template>
  
<script>
import draggable from "vuedraggable";
export default {
  name: "DashboardPage",
  order: 7,
  components: {
    draggable
  },
  data() {
    return {
      drag: false
    };
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    }
  }
};
</script>

<style>
@import "@/static/scss/global.scss";
</style>