<template>
  <div class="mb-5">
    <h3 class="mb-3">Add ToDo</h3>
    <form @submit="onSubmit" class="mb-3">
      <input type="text" v-model="newToDo" class="form-control" id="exampleFormControlInput1" placeholder="type here...">
      <input type="submit" value="Submit" class="btn mt-4 btn-primary success">
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddToDos",
  data() {
    return {
      newToDo: '',
    }
  },
  methods: {
    ...mapActions(['addToDo']),
    onSubmit(e){
      e.preventDefault()
      this.addToDo(this.newToDo)
      this.newToDo = ''
    }
  },
}
</script>

<style scoped>

</style>