<template>
  <div class="home">
    <div class="container">
      <AddToDos/>
      <ToDos/>
    </div>
  </div>
</template>

<script>
import ToDos from "@/components/ToDos";
import AddToDos from "@/components/AddToDos";

export default {
  name: 'Home',
  components: {
    ToDos,
    AddToDos
  }
}
</script>
