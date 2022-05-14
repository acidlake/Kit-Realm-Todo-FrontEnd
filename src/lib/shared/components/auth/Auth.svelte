<script>
  // Core
  import core from "$core/functions";
  import { findArrayByKeyValue } from "$utils";
  import { fade } from "svelte/transition";

  // Components

  // Functions
  const handleSubmit = async function(){
      loading = true;
      errorMessages = validateField(formValidationRules)
      if(errorMessages.length > 0) return;
        const { email, password } = loginPayLoad;
        await core.loginEmailPassword(email.trim(), password.trim()).then(function(rs) {
          if(rs.error){
            hashErrors = true;
            errorMessages = [
              {
                field: 'msg',
                msg: 'Email or Password Invalid.'
              }
            ]
          }
        })
        loading = false;
  }

  const validateField = function(fields){
    if(!fields) return;
    let errors = [];
    fields.forEach(function(field){
      if(field.rule.required && !field.value){
        errors.push({
          field:field.name,
          msg: `Field ${field.name} is Required`
        })
      }
      if(field.value.length < field.rule.min){
        errors.push({
          field: field.name,
          msg: `Field ${field.name} min length should be more than ${field.rule.min} characters`
        })
      }
      if(!field.value.includes(field.rule.include) && field.rule.include){
          errors.push({
            field: field.name,
            msg: `Field ${field.name} should include ${field.rule.include} to be valid.`
          })
      }
      if(field.value.length > field.rule.max){
        errors.push({
          field: field.name,
          msg: `Field ${field.name} max length should be more than ${field.rule.max} characters`
        })
      }
    });
    return errors;
  }

  $: if(errorMessages.length > 0){
    hashErrors = true;
  }else{
    hashErrors = false;
    loading = false;
  }

  $: if(loginPayLoad.email.length > 1 || loginPayLoad.password.length > 1){
    errorMessages = validateField(formValidationRules)
  }

  // Vars
  let loading = false;
  let errorMessages = [];
  let hashErrors = false;
  let loginPayLoad = {
    email: '',
    password: ''
  }
  $: formValidationRules = [
      {
        name: 'email',
        value: loginPayLoad.email,
        rule: {
          min: 5,
          max: 40,
          include: '@',
          required: true
        }
      },
      {
        name: 'password',
        value: loginPayLoad.password,
        rule: {
          min: 6,
          max: 20,
          include: false,
          required: true
        }
      }
    ]
</script>

<div class="flex flex-col justify-center items-center py-4">
  <div class="p-10 bg-white border rounded-lg shadow-lg w-1/2">
    {#if errorMessages.length > 0}
          {#if findArrayByKeyValue({array: errorMessages, keyName: 'field', keyValue: 'msg'})}
            <div in:fade out:fade class="text-md text-red-500 font-semibold mt-1 mb-2 w-full text-center">
              {findArrayByKeyValue({array: errorMessages, keyName: 'field', keyValue: 'msg'})?.msg}
            </div>
          {/if}
        {/if}
    <form on:submit|preventDefault={handleSubmit}>
      <div class="py-2">
        <label for="email" class="block mb-1 text-gray-600 font-semibold">Email</label>
        <input type="email" bind:value={loginPayLoad.email} class="bg-gray-100 px-4 text-gray-600 py-2 outline-none rounded w-full">
        {#if errorMessages.length > 0}
          {#if findArrayByKeyValue({array: errorMessages, keyName: 'field', keyValue: 'email'})}
            <div in:fade out:fade class="text-sm text-red-500 font-semibold mt-1">
              {findArrayByKeyValue({array: errorMessages, keyName: 'field', keyValue: 'email'})?.msg}
            </div>
          {/if}
        {/if}
      </div>
      <div class="py-2">
        <label for="password" class="block mb-1 text-gray-600 font-semibold">Password</label>
        <input type="password" bind:value={loginPayLoad.password} class="bg-gray-100 text-gray-600 px-4 py-2 outline-none rounded-md w-full">
        {#if errorMessages.length > 0}
        {#if findArrayByKeyValue({array: errorMessages, keyName: 'field', keyValue: 'password'})}
          <div in:fade out:fade class="text-sm text-red-500 font-semibold mt-1">
            {findArrayByKeyValue({array: errorMessages, keyName: 'field', keyValue: 'password'})?.msg}
          </div>
        {/if}
      {/if}
      </div>
      <button
        disabled={hashErrors ? true : false} 
        type="submit" 
        class="mt-4 w-full {hashErrors ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'}  text-white py-2 rounded-md text-lg tracking-wide">
        {loading ? 'Loading...' : 'Login'}
      </button>
    </form>
  </div>
</div>