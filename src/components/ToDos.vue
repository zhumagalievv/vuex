<template>
  <div>
    <h3>ToDos</h3>
    <div class="todos">
      <div class="todo" v-for="todo in allToDos" :key="todo.id">
        {{ todo.title }}
        <i @click="deleteToDo(todo.id)" class="fas fa-trash-alt"></i>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: "ToDos",
  methods: {
    ...mapActions(['fetchToDos', 'deleteToDo']),
  },
  computed: mapGetters(['allToDos']),
  created() {
    this.fetchToDos()
  }
}
</script>

<style lang="scss" scoped>
.todos {
  padding-top: 34px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 25px;

  .todo {
    padding: 12px 40px;
    position: relative;
    color: whitesmoke;
    background: #0d6efd;
    text-align: center;
    border-radius: 10px;

    i {
      position: absolute;
      bottom: 10px;
      right: 10px;
      transition: 0.5s;
      cursor: pointer;
      z-index: 20;
    }
  }
}
</style>