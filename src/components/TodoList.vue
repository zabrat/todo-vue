<template>
  <div>
      <ul>
          <Todo 
            v-for="(todo, i) in todos"
            v-bind:todo="todo"
            v-bind:index="i"
            v-bind:key="i"
            v-on:remove-todo="removeTodo"
          />
          
      </ul>
  </div>
</template>

<script>
import Todo from './Todo'

export default {
  props: ['todos'],
  components: { 
    Todo
  },
  methods:{
    removeTodo(id){
      this.$emit('remove-todo', id)
    }
  }

}
</script>

<style scoped>
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
</style>