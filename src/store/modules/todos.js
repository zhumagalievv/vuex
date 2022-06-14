import axios from "axios";

export default {
    state: {
        todos: []
    },
    getters: {
        allToDos: (state) => state.todos
    },
    actions: {
        async fetchToDos({commit}) {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            commit('setToDos', response.data)
        },
        async addToDo({commit}, title) {
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts',
                {title, completed: false});
            commit('newToDo', response.data)
        },
        async deleteToDo({commit}, id) {
            await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            commit('removeTodo', id)
        }
    },
    mutations: {
        setToDos(state, todos) {
            state.todos = todos
        },
        newToDo(state, newTodo) {
            state.todos.unshift(newTodo)
        },
        removeTodo(state, id) {
            state.todos = state.todos.filter(todo => todo.id !== id)
        }
    }
}