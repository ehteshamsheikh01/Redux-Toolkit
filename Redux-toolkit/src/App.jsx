// import React, { useRef } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { addTodo, removeTodo } from './Config/redux/reducers/todoSlice'

// const App = () => {
//   const todoref = useRef()

// //disptatch

// const dispatch = useDispatch()

// //selector

// const selector = useSelector( state => state.todos)

// const addTodoreducer = (event) =>{
//   event.preventDefault();
// console.log(todoref.current.value);
// dispatch(addTodo({
//   title:todoref.current.value,
// }))

// console.log( "data from redux ===>" ,  selector);



// todoref.current.value = ""
// }


// const deleteTodo = (index) =>{
//   dispatch(removeTodo({
//     index
//   }))
// }

//   return (
//     <>
//     <h1>Todo</h1>
//     <form onSubmit={addTodoreducer}>
//     <input type="text" placeholder='todo'  ref={todoref} />
//     <button type='submit'>Add todo</button>
//     </form>

//     <ul>
//       {selector.map((item , index)=>{
//         return <li key={item.id}>{item.title}
//         <button onClick={()=>deleteTodo(index)}>Delete</button> </li>
//       })}
//     </ul>
//     </>
//   )
// }

// export default App










import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, removeTodo } from './Config/redux/reducers/todoSlice'

const App = () => {

  const inputValue = useRef()


  //dispatch

  const dispatch = useDispatch()

  //selector
  const selector = useSelector(state => state.todos.todo)
  console.log(selector);
  

  const enterbtn = (event)=>{
    event.preventDefault()
    console.log(inputValue.current.value);
  dispatch(addTodo({
    title : inputValue.current.value
  }))    

  }

const deletebtn = (index)=>{
  dispatch(removeTodo({
   index
  }))
}


  

  return (
    <>
    <h1>Todo App</h1>
    <form>
      <input type="text" placeholder='Enter todo' ref={inputValue} />
      <button onClick={enterbtn}>Enter</button>
    </form>


    <ul>
    {selector.length > 0 ? selector.map((item , index)=>{
      return  <li key={item.id}>
    {item.title}
    <button onClick={()=>deletebtn(index)}>Delete</button>
      </li>
    }): <h1>loading...</h1> }
    </ul>
    </>
  )
}

export default App


















