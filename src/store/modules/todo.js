export default {
    actions: {
        async fetchTodos(ctx, limit=3){
            fetch('https://jsonplaceholder.typicode.com/todos?_limit=' + limit)
                .then(response => response.json())
                .then(json => {
                  ctx.commit('updateTodos', json)  
                })
        }
    },
    mutations: {
        removeTodo(state, id){
            state.todos = state.todos.filter(todo => todo.id !== id)
        },
        updateTodos(state, todos){
            state.todos = todos
        },
        createTodo(state, newTodo){
            state.todos.unshift(newTodo)
        },
        changeFilter(state, newFilter){
            state.filter = newFilter
        }
    },
    state: {
        todos: [],
        filter: 'all'
    },
    getters: {
        todos(state){
            return state.todos
        },
        filteredTodos(state) {
            if(state.filter === 'all'){
                return state.todos
            }

            if(state.filter === 'completed'){
                return state.todos.filter(t => t.completed)
            }

            if(state.filter === 'not-completed'){
                return state.todos.filter(t => !t.completed)
            }
        },
    },
}