<template>
  <div :class="filteredTodos.length > 3 ? 'red': 'blue' ">
    <router-link to="/">Todos</router-link>
    <AddTodo/>
    <hr>
    <select 
      v-model="filter"
      @change="changeFilter(filter)"
    >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="not-completed">Not completed</option>
    </select>
    <hr>
    <Loader v-if="loading"/>
    <TodoList
        v-else-if="filteredTodos.length"
        v-bind:todos="filteredTodos"
        @remove-todo="removeTodo"
    />
    <p v-else> No todos</p>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList';
import AddTodo from '@/components/AddTodo';
import Loader from '@/components/Loader';
import { mapGetters, mapActions, mapMutations } from 'vuex';

export default {
  name: 'App',
  data(){
    return{
      loading: true,
      filter:"all"
    }
  },
  mounted() {
    this.fetchTodos(5);
    this.loading = false
  },
//   watch: {
//       filter(value){

//       }
//   },
    computed: {
        // filteredTodos() {
        //     if(this.filter === 'all'){
        //         return this.todos
        //     }

        //     if(this.filter === 'completed'){
        //         return this.todos.filter(t => t.completed)
        //     }

        //     if(this.filter === 'not-completed'){
        //         return this.todos.filter(t => !t.completed)
        //     }
        // },
        ...mapGetters(['filteredTodos']),
        todos(){
          return this.$store.getters.todos;
        }
    },
  methods: {
    removeTodo(id){
      const filteredTodos = this.todos.filter(todo => todo.id !== id)
    },
    ...mapActions(['fetchTodos']),
    ...mapMutations(['changeFilter']),
  },
  components: {
    TodoList, AddTodo, Loader
  }
}
</script>

<style scoped>
  .red{
    background: red;
  }

  .blue{
    background: blue;
  }
</style>