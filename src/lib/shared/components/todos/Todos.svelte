<script>
  // Core
  import core from "$core/functions";
  import { addToast } from "$store";

  // Components
  import AddTodoForm from "./AddTodoForm.svelte";
  import Todo from "./Todo.svelte";

  // Vars
  let title = '';
  export let reloadData;
  export let todos;
  export let user = {};

  // Functions
  const addTodo = function(){
    core.callRealmFunction({
			functionName: 'addTodo',
			query: {
        title,
				realmUserId: user.appUserId
			}
		})
    
    addToast({ message: 'Todo Added Successfully', type: 'success', dismissible: true, timeout: 1000 })
    setTimeout(function(){
      reloadData();
    }, 500)
    clearTimeout();
    title = '';
  }
  const updateTodo = function({_id, isDone}){
    let doneTodo = !isDone;

    core.callRealmFunction({
			functionName: 'updateTodo',
			query: {
        _id,
				isDone: doneTodo
			}
		})
    addToast({ message: 'Todo Updated Successfully', type: 'success', dismissible: true, timeout: 1000 })
    setTimeout(function(){
      reloadData();
    }, 500)
    clearTimeout();
  }
  const removeTodo = function(_id){
    core.callRealmFunction({
			functionName: 'deleteTodo',
			query: {
        _id,
			}
		})
    addToast({ message: 'Todo Deleted Successfully', type: 'success', dismissible: true, timeout: 1000 })
    setTimeout(function(){
      reloadData();
    }, 500)
    clearTimeout();
  }
</script>
<div class="w-full flex items-center justify-center font-sans">
	<div class="bg-white rounded shadow-xl p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div class="mb-4">
            <h1 class="text-grey-darkest">Todo List</h1>
            <AddTodoForm {addTodo} bind:title />
        </div>
        <div>
          {#if !todos?.loading}
            {#if todos?.rs?.length > 0 && !todos.loading}
              {#each todos?.rs as todo}
                <Todo bind:todo {updateTodo} {removeTodo} />
              {/each}
            {:else}
              <div class="py-10 text-gray-500 font-semibold text-3xl text-center">
                Loading...
              </div>
            {/if}
          {:else}
            <div class="py-10 text-gray-500 font-semibold text-3xl text-center">
              Not Todos Found.
            </div>
          {/if}
        </div>
    </div>
</div>