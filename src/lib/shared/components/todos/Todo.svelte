<script>
  import { fade } from "svelte/transition";
  //
  export let todo;
  export let removeTodo;
  export let updateTodo;
</script>
<div in:fade out:fade class="flex mb-4 items-center">
  <p class="w-full text-grey-darkest {todo?.isDone ? 'line-through' : ''}">{todo?.title}</p>
  <button on:click={() => updateTodo({_id: todo?._id, isDone: todo?.isDone})} class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green-600 ">{todo?.isDone ? 'Not Done' : 'Done'}</button>
  <button on:click={() => removeTodo(todo?._id)} class="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red-600">Remove</button>
</div>