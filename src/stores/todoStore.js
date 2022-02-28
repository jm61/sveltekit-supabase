import { writable } from 'svelte/store';
import {supabase} from "../supabase.js";
export const todos = writable([])
export const loadTodos = async () => {
    try {
        const {data} = await supabase.from('todos').select()
        todos.set(data)
    } catch (error) {
        return console.error(error)
    }
}
loadTodos()
export const addTodo = async (text, category,user_id) => {
    try {
        const {data} = await supabase.from('todos').insert([{text, category, completed:false, user_id}])
        todos.update(cur => [...cur, data[0]])
    } catch (error) {
         return console.error(error)
    }
}
export const deleteTodo = async (id) => {
    try {
        await supabase.from('todos').delete().match({id})
        todos.update((todos) => todos.filter((todo) => todo.id !== id))
    } catch (error) {
        return console.error(error)
    }
}

export const toggleTodoCompleted = async (id, currentState) => {
    const {error} = await supabase.from('todos').update({completed: !currentState}).match({id})

    if(error) {
        return console.error(error)
    }

	todos.update((todos) => {
		let index = -1
		for (let i = 0; i < todos.length; i++) {
			if (todos[i].id === id) {
				index = i
				break
			}
		}
		if (index !== -1) {
			todos[index].completed = !todos[index].completed
		}
		return todos
	})
}
