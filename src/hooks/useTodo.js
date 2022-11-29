import { useState } from 'react'

export const useTodo = () => {
    const [todos, setTodos] = useState([])
  
    const handleRemoveTodo = (todoId) =>{
      let newTodos = todos.filter(todo=> todo.id !== todoId)
      setTodos(newTodos)
    }
  
    const handleEditTodo = (todoId,completed,title)=>{
      let updatedTodos = todos.map(todo =>{
          if(todo.id === todoId){
            return{
              ...todo,
              completed,
              title
            }
          }
          return todo
        }
      )
      setTodos(updatedTodos)
    } 
  
    const handleCompleteTodo = (todoId)=>{
      let updatedTodos = todos.map(todo =>{
          if(todo.id === todoId){
            return{
              ...todo,
              completed: !todo.completed
            }
          }
          return todo
        }
      )
      setTodos(updatedTodos)
    }
  return{
    todos,
    setTodos,
    handleRemoveTodo,
    handleEditTodo,
    handleCompleteTodo
  }
}
