import React from 'react'
import { toast } from 'react-toastify'

const TodoItem = ({todo, deleteTodo, id}) => {
  return (
    <div className="todo-item">
            
           <div className='yapilacak'> <p>{todo} </p></div>
            
            <button className='delete-btn' onClick={()=>{
            deleteTodo(id)  
            toast.error("Yapilacak silindi!")  
            }}>
           
            <i class="fas fa-times-circle"></i>
            </button>


            </div>
  )
}

export default TodoItem