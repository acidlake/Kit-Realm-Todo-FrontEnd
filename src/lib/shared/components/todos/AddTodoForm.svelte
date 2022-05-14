<script>
  export let addTodo;
  export let title;
  let minTitleLength = 6
</script>
<div class="flex mt-4">
  <form on:submit|preventDefault={addTodo} class="flex w-full">
    <div class="grid grid-cols-3 w-full gap-4">
      <input bind:value={title} class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker col-span-2" placeholder="Add Todo">
      <button disabled={title.trim().length > minTitleLength? false : true} type="submit" class="flex-no-shrink p-2 border-2 rounded text-teal border-teal  {title.trim().length > minTitleLength? 'bg-blue-400 text-white  hover:bg-blue-600' : 'bg-gray-200'}">Add</button>
    </div>
  </form>
</div>