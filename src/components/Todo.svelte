<script>
    export let todo;
    import {deleteTodo, toggleTodoCompleted} from '../stores/todoStore.js';
    
</script>

<div class="flex shadow-md border rounded-lg my-2 pl-2">
	<input
		type="checkbox"
		name="completed"
		checked={todo.completed}
        on:change={()=> toggleTodoCompleted(todo.id)}
		class="mr-2 form-checkbox h-5 w-5"
	/>

	<h2 class="bg-gray-200 px-2 font-bold">
		Cat: <span class=" text-green-600">{todo.category}</span>
	</h2>

	<h2 class="px-2 bg-orange-300 font-bold">
		<span class={ `${todo.completed ? 'line-through' : ''}`}>Todo: {todo.text}</span>
	</h2>
    <button  class="ml-auto text-sm bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline" type='button' on:click={() => deleteTodo(todo.id)}>Del</button>
</div>
