 import React from 'react'
import { useState, useEffect } from 'react'
import { toast, Toast } from 'react-toastify'

const TodoForm = ({setTodos,todos}) => {
    const [todoValue, setTodoValue] = useState('')

    const handleSubmit = (e) => {
        if(todoValue === '') {
            toast.error("Lütfen bir yapılacak girin")
        }else if (todos.includes(todoValue)) {
            toast.error("Bu yapılacak zaten mevcut")
        }else if (todoValue.length < 3) {
            toast.error("En az 3 karakter uzunluğunda olmalı")
        }else
        {   
            const newTodo = todoValue.trim()    
        setTodos([...todos,todoValue])
        setTodoValue('')
        toast.success("Yapilacak eklendi!")
        }
    }


  return (  
    <form action='' id='todo-form'>
        <input type='text' 
        id='form-input'
        placeholder='Lütfen Yapacaginiz Eylemi girin'
        onChange={(e) => setTodoValue(e.target.value)}
        value={todoValue}
        />
        <button
        onClick={(e) => {
             e.preventDefault()
                handleSubmit()
            
         }}
        >
             <i class="fas fa-plus"></i>
        </button>
    </form>
  )
}

export default TodoForm