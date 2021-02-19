<template>
    <li>
    <span v-bind:class="{done: todo.completed}">
        <input type="checkbox" v-on:change="todo.completed = !todo.completed">
        <strong>{{index+1}}</strong>
        {{todo.title | uppercase}}
    </span>
    <button v-on:click="$emit('remove-todo', todo.id)">x</button>
    </li>
</template>

<script>
export default {
    props: ['todo', 'index'],
    filters: {
        uppercase(value){
            return value.toUpperCase()
        }
    }
}
</script>

<style scoped>
    li {
        border: 1px solid black;
        display: flex;
        justify-content: space-between;
        padding: .5rem 2rem;
        margin-bottom: 1rem;
    }
    .done {
        text-decoration: line-through;
    }
</style>