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
      <div class="relative">
        <CardList 
          title="On training"
          tagClass="tag bg-red-500" 
          dragbClass="list-group br-white bl-white" 
          :list="store.kList.trainTable" 
          :dragOptions="dragOptions"
          :onAdd="() =>showModalTraining = true"
        >
          <div
              class="list-group-item"
              v-for="(element, index) in store.kList.trainTable"
              :key="element.id"
            >
              {{ element.name }}
          </div>
        </CardList>
        <ModalAdd :showModal="showModalTraining">
          <div class="flex flex-col">
            <button @click="()=>showModalTraining = false">close</button>
            <input class="bg-[transparent] w-[fit-content] mx-[0.5em]" placeholder="Digite um nome:" v-model="cardName"/>

            <button @click="addCardTraining(store)">addCard</button>
          </div>
        </ModalAdd>
      </div>
      <CardList 
        title="Testables"
        tagClass="tag bg-orange-500" 
        dragbClass="list-group br-white" 
        :list="store.kList.testTable" 
        :dragOptions="dragOptions"
        :onAdd="() =>store.addCard(store.kList.testTable, {name: 'teste2'})"
      >
        <div
            class="list-group-item"
            v-for="(element, index) in store.kList.testTable"
            :key="element.id"
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
        :onAdd="() =>store.addCard(store.kList.useTable, {name: 'teste3'})"
      >
        <div
            class="list-group-item"
            v-for="(element, index) in store.kList.useTable"
            :key="element.id"
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
        :onAdd="() =>store.addCard(store.kList.downloadTable, {name: 'teste4'})"
      >
        <div
            class="list-group-item"
            v-for="(element, index) in store.kList.downloadTable"
            :key="element.id"
          >
            {{ element.name }}
          </div>
      </CardList>
    </div>
  </div>
</template>
  
<script>
import draggable from "vuedraggable";
import { useKanbanStore } from "@/store/kanbanStore"
import ModalAdd from "@/components/AddModal"
export default {
  name: "DashboardPage",
  order: 7,
  components: {
    draggable,
    ModalAdd,
  },
  data() {
    return {
      drag: false,
      showModalTraining: false,
      cardName: "",
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
  },
  methods: {
    addCardTraining(store) {
      if (this.cardName !== "") {
        store.addCard(store.kList.trainTable, {name: this.cardName});
        this.showModalTraining=false;
      }
    },
  }
};
</script>

<style>
@import "@/static/scss/global.scss";
</style>