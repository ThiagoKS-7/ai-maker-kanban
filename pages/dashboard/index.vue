<script setup>
import { useKanbanStore } from "@/store/kanbanStore"
const store = useKanbanStore()
</script>
<template>
  <div class="dashboard-wrapper">
      <ThemeSwitch class="absolute top-5 right-5"/>
      <MessageToast
        :showToast="toast.model"
        :message="toast.message"
        :className="toast.class"
        :onClose="() => toast.model = false"
      />
      <h1 class="title my-9 font-mono">
       AI Dashboard
      </h1>
    <div class="xl:flex xl:justify-center">
      <CardList 
        title="On training"
        tagClass="tag bg-red-500" 
        dragbClass="list-group br-white lg:bl-white sm:w-[96vw] sm:my-[1em]" 
        v-model="modals.train.name"
        :list="store.kList.trainTable" 
        :dragOptions="dragOptions"
        :showModal="modals.train.model"
        :onAdd="() =>addCard(store,'training')"
        :onClose="()=> modals.train.model = false"
        @onOpen="()=> modals.train.model = true"
        @change="updateLists(store, 'train')"
      />
      <CardList 
        title="Testables"
        tagClass="tag bg-orange-500" 
        dragbClass="list-group br-white md:w-[96vw] md:my-[1em]" 
        v-model="modals.test.name"
        :list="store.kList.testTable" 
        :dragOptions="dragOptions"
        :showModal="modals.test.model"
        :onAdd="() =>addCard(store,'test')"
        :onClose="()=> modals.test.model = false"
        @onOpen="()=> modals.test.model = true"
        @change="updateLists(store, 'test')"
      />
      <CardList 
        title="Deployables"
        tagClass="tag bg-green-500" 
        dragbClass="list-group br-white md:w-[96vw] md:my-[1em]" 
        v-model="modals.deploy.name"
        :list="store.kList.useTable" 
        :dragOptions="dragOptions"
        :showModal="modals.deploy.model"
        :onAdd="() =>addCard(store,'deploy')"
        :onClose="()=> modals.deploy.model = false"
        @onOpen="()=> modals.deploy.model = true"
        @change="updateLists(store, 'deploy')"
      />
      <CardList 
        title="Available for download"
        tagClass="tag bg-violet-500" 
        dragbClass="list-group br-white rounded md:w-[96vw] md:my-[1em]" 
        v-model="modals.download.name"
        :list="store.kList.downloadTable" 
        :dragOptions="dragOptions"
        :showModal="modals.download.model"
        :onAdd="() =>addCard(store,'download')"
        :onClose="()=> modals.download.model = false"
        @onOpen="()=> modals.download.model = true"
        @change="updateLists(store, 'download')"
      />
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
    ModalAdd
},
  data() {
    return {
      drag: false,
      blobColor: "blue",
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
      toast: {
        model: false,
        class: "",
        icon: "",
        message: "Erro! Contate o admin do sistema",
      }
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
            store.addCard(store.kList.trainTable, {name: this.modals.train.name, status: "training"});
            this.modals.train.model=false;
          } else {
            this.toast.message = "Por favor, preencha o nome do card antes de continuar!";
            this.toast.class = 'warning';
            this.toast.model = true;
          }
          break;
        case "test":
          if (this.modals.test.name !== "") {
            store.addCard(store.kList.testTable, {name: this.modals.test.name,status: "testable"});
            this.modals.test.model=false;
          } else {
            this.toast.message = "Por favor, preencha o nome do card antes de continuar!";
            this.toast.class = 'warning';
            this.toast.model = true;
          }
          break;
        case "deploy":
          if (this.modals.deploy.name !== "") {
            store.addCard(store.kList.useTable, {name: this.modals.deploy.name, status: "deployable"});
            this.modals.deploy.model=false;
          } else {
            this.toast.message = "Por favor, preencha o nome do card antes de continuar!";
            this.toast.class = 'warning';
            this.toast.model = true;
          }
          break;
        case "download":
          if (this.modals.download.name !== "") {
            store.addCard(store.kList.downloadTable, {name: this.modals.download.name, status: "downloadable"});
            this.modals.download.model=false;
          } else {
            this.toast.message = "Por favor, preencha o nome do card antes de continuar!";
            this.toast.class = 'warning';
            this.toast.model = true;
          }
          break;
      } 
    },
    updateLists(store, value) {
      let toUpdate = [];
      switch (value) {
        case 'train':
          toUpdate = store.kList.trainTable.filter(el => el.status !== "training");
          this.updateStatus(store, store.kList.trainTable, toUpdate, "training")
          break;
        case 'test':
          toUpdate = store.kList.testTable.filter(el => el.status !== "testable");
          this.updateStatus(store, store.kList.testTable, toUpdate, "testable")
          break;
        case 'deploy':
          toUpdate = store.kList.useTable.filter(el => el.status !== "deployable");
          this.updateStatus(store, store.kList.useTable, toUpdate, "deployable")
          break;
        case 'download':
          toUpdate = store.kList.downloadTable.filter(el => el.status !== "downloadable");
          this.updateStatus(store, store.kList.downloadTable, toUpdate, "downloadable")
          break;
        default:
          break;
      }
    },
    updateStatus(store, state, list, status) {
      list.forEach(el => {
        store.removeCard(state, el);
      });
      list.forEach(el => {
        store.addCard(state, {name: el.name, status: status});
      });
    }
  }
};
</script>

<style>
@import "@/static/scss/global.scss";
</style>