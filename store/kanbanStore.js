import { defineStore } from 'pinia'

export const useKanbanStore = defineStore('kanban', {
    state: () => ({
        items: 0,
        kList: {
            trainTable: [], // cards rodando rotinas de treino
            testTable: [], // cards rodando na nossa API, que permitam passar parametros
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