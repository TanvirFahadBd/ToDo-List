import { useState, useEffect } from "react";
import { MdDeleteForever, MdEdit } from "react-icons/md"




function ToDoList() {
  let [todo, setTodo] = useState([]);


  const [newtodo, setNewTodo] = useState({
    id: Date.now(),
    text: "",
    completed: false,
    isUpdating: false,
  });

  const handleAddTodo = (e) => {
  setTodo([...todo,newtodo]);
  setNewTodo({
    id: Date.now(),
    text: "",
    completed: false,
    isUpdating: false,
  });
  }
  let handelAddTodo = (e) => {
    e.preventDefault();
    setTodo([...todo, "New Todo"]);
    setNewTodo({
      id: Date.now(),
      text: "",
      completed: true,
    });
  }
  const handleDeleteTodo = (id) => {
    const updatedTodos = todo.filter((text) => text.id !== id);
    setTodo(updatedTodos);
  }

  const handelEditTodo = (id) => setTodo((prevState) => {
    const updatedTodos = prevState.map((todoItem) => {
      if (todoItem.id === id) {
        return { ...todoItem, isUpdating : true };
      }
      return todoItem;
    });
    return updatedTodos;
  })

  return (
    <section>
      <div className='flex justify-center items-start min-h-screen bg-amber-300 p-4'>
        <div className="bg-white
         shadow-lg
          rounded-2xl 
          p-6 w-full 
          max-w-md gap-[20px] 
          flex flex-col 
          items-center-safe">
          <h1 className='text-3xl 
          font-bold
           text-blue-600 
           text-center 
           md-4'>To-Do List</h1>


          <form className=' flex
          items-center
          border border-green-500 rounded-lg overflow-hidden md-4'>
            <input
              className='flex-1 p-2 outline-none'
              value={newtodo.text}
              type="text"
              placeholder='Type new To-Do'
              onChange={(e) => setNewTodo({ ...newtodo, text: e.target.value })} />

            <button

              onClick={handelAddTodo}
              className='bg-green-800 text-white
            px-4 py-2 cursor-pointer hover:text-black font-bold'>

              Add
            </button>
          </form>

          <ul className='space-y-2' >
            {todo.map((text, index) => {
              return (
                <li key={text.id} className="flex 
              justify-between 
              items-center
               bg-white p-2 
               shadow rounded-lg
                hover:bg-pink-100
                 transition-all">
                  <div className="iniput flex items-center space-x-2 ">
                    <input className='w-5 h-5
                       accent-green-500'
                      type="checkbox"
                      checked={text.completed}

                      onChange={(e) => setTodo((prevState) => {
                        const updatedTodos = prev.map((todoItem) => {
                          if (todoItem.id === text.id) {
                            return { ...todoItem, complited: e.target.checked };
                          }
                          return todoItem;
                        });
                        return updatedTodos;
                      })}
                    />
                    {text.isUpdating
                      ?
                      <input type="text" />
                      :
                      <p className={`${text.completed && line - through} text-gray-400`}>
                        {index + 1} {text.text}
                      </p>
                    }
                    <div className="flex items-center justify-between">
                    </div>
                  </div>
                  <div className="flex gap-2 ju">
                    <span className="text-blue-500 text-2xl" onClick={() => handelEditTodo(text.id)} > <MdEdit /> </span>
                    <span className="text-red-500 text-2xl <MdDeleteForever />" title={text.id} onClick={(e) => handleDeleteTodo(text.id)}><MdDeleteForever /></span>
                  </div>
                </li>
              )
            }
            )}


          </ul>
          {todo.length > 0 && (
            <button className="bg-red-500
           text-white 
           rounded px-1
            py-2 mt-4
             hover:bg-red-700 
             transition <MdDeleteForever /> w-full">
              Clear all
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default ToDoList
