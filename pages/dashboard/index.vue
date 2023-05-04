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
        v-model="modals.train.name"
        :list="store.kList.trainTable" 
        :dragOptions="dragOptions"
        :showModal="modals.train.model"
        :onAdd="() =>addCard(store,'training')"
        :onClose="()=> modals.train.model = false"
        @onOpen="()=> modals.train.model = true"
      >
        <div
            class="list-group-item"
            v-for="(element, index) in store.kList.trainTable"
            :key="element.id"
          >
            {{ element.name }}
        </div>
        {{ modals.train.name }}
      </CardList>
      <CardList 
        title="Testables"
        tagClass="tag bg-orange-500" 
        dragbClass="list-group br-white" 
        v-model="modals.test.name"
        :list="store.kList.testTable" 
        :dragOptions="dragOptions"
        :showModal="modals.test.model"
        :onAdd="() =>addCard(store,'test')"
        :onClose="()=> modals.test.model = false"
        @onOpen="()=> modals.test.model = true"
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
        v-model="modals.deploy.name"
        :list="store.kList.useTable" 
        :dragOptions="dragOptions"
        :showModal="modals.deploy.model"
        :onAdd="() =>addCard(store,'deploy')"
        :onClose="()=> modals.deploy.model = false"
        @onOpen="()=> modals.deploy.model = true"
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
        v-model="modals.download.name"
        :list="store.kList.downloadTable" 
        :dragOptions="dragOptions"
        :showModal="modals.download.model"
        :onAdd="() =>addCard(store,'download')"
        :onClose="()=> modals.download.model = false"
        @onOpen="()=> modals.download.model = true"
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
      modals: {
        train: {
          name: "",
          model:false,
        },
        test: {
          name: "",
          model:false,
        },
        deploy: {
          name: "",
          model:false,
        },
        download: {
          name: "",
          model:false,
        },
      },
      showModalTraining: false,
      showModalTest: false,
      showModalDeployables: false,
      showModalDownload: false,
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
    addCard(store, value) {
      switch(value) {
        case "training":
          if (this.modals.train.name !== "") {
            store.addCard(store.kList.trainTable, {name: this.cardName});
            this.modals.train.model=false;
          }
          break;
        case "test":
          if (this.modals.test.name !== "") {
            store.addCard(store.kList.testTable, {name: this.cardName});
            this.modals.test.model=false;
          }
          break;
        case "deploy":
          if (this.modals.deploy.name !== "") {
            store.addCard(store.kList.useTable, {name: this.cardName});
            this.modals.deploy.model=false;
          }
          break;
        case "download":
          if (this.modals.download.name !== "") {
            store.addCard(store.kList.downloadTable, {name: this.cardName});
            this.modals.download.model=false;
          }
          break;
      } 
    },
  }
};
</script>

<style>
@import "@/static/scss/global.scss";
</style>