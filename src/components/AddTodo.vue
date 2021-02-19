<template>
    <form @submit.prevent="onSubmit">
        <input v-model="title">
        <button type="submit">Add</button>
    </form>
</template>

<script>
import { mapMutations, MapMutations } from "vuex";

export default {
    data() {
        return{
            title:''
        }
    },
    methods:{
        ...mapMutations(["createTodo"]),
        onSubmit() {
            const newTodo = {
                id:Date.now(),
                title: this.title,
                completed: false
            }
            this.createTodo(newTodo);
            this.title='';
        }
    }
}
</script>