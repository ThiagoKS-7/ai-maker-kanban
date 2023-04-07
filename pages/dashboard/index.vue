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
    <div class="flex justify-center">
      <CardList 
        title="On training"
        tagClass="tag bg-red-500" 
        dragbClass="list-group br-white bl-white" 
        :list="store.kList.trainTable" 
        :dragOptions="dragOptions"
      >
        <div
            class="list-group-item"
            v-for="(element, index) in store.kList.trainTable"
            :key="element.name"
          >
            {{ element.name }}
          </div>
      </CardList>
      <CardList 
        title="Testables"
        tagClass="tag bg-orange-500" 
        dragbClass="list-group br-white" 
        :list="store.kList.testTable" 
        :dragOptions="dragOptions"
      >
        <div
            class="list-group-item"
            v-for="(element, index) in store.kList.testTable"
            :key="element.name"
          >
            {{ element.name }}
          </div>
      </CardList>
      <CardList 
        title="Deployables"
        tagClass="tag bg-green-500" 
        dragbClass="list-group br-white" 
        :list="store.kList.useTable" 
        :dragOptions="dragOptions"
      >
        <div
            class="list-group-item"
            v-for="(element, index) in store.kList.useTable"
            :key="element.name"
          >
            {{ element.name }}
          </div>
      </CardList>
      <CardList 
        title="Available for download"
        tagClass="tag bg-violet-500" 
        dragbClass="list-group br-white rounded" 
        :list="store.kList.downloadTable" 
        :dragOptions="dragOptions"
      >
        <div
            class="list-group-item"
            v-for="(element, index) in store.kList.dwonloadTable"
            :key="element.name"
          >
            {{ element.name }}
          </div>
      </CardList>
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