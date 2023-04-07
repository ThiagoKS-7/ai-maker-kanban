import { defineStore } from 'pinia'

export const useKanbanStore = defineStore('kanban', {
    state: () => ({
        items: 0,
        kList: {
            trainTable: [
                {name:"vue.draggable", order:1},
                {name: "draggable", order:2},
                {name: "component", order: 3},
                {name: "for", order: 4},
                {name: "vue.js 2.0", order: 5},
                {name: "based", order: 6},
                {name: "on", order: 7},
                {name: "Sortablejs", order: 8}
              ], // cards rodando rotinas de treino
            testTable: [
              {name:"vue.draggable", order:9},
              {name: "draggable", order:10},
              {name: "component", order: 11},
              {name: "for", order: 12},
              {name: "vue.js 2.0", order: 13},
              {name: "based", order: 14},
              {name: "on", order: 15},
              {name: "Sortablejs", order: 16}
              ], // cards rodando na nossa API, que permitam passar parametros
            useTable: [], // cards com a cloudfunction
            downloadTable: [], // cards função de baixar modelo
        }
    }),
    actions: {
      // não pode arrow function, pq usa 'this' 
      addCard(list,obj) {
        list.push(obj);
        this.items++
      },
      removeCard(list, obj) {
        const index = list.indexOf(obj);
        const itemExists = index > -1
        if (itemExists) { 
            list.splice(index, 1); // segundo parametro diz pra remover só 1
        }
        this.items--
      },
    },
    getters: {
        getList() {
            return this.kList;
        }
    }
})