import React, {useState } from 'react'
import {GripVertical, Trash} from 'lucide-react'


const DragnDrop = () => {

  const [tasks, setTasks] = useState([])
  const [text, setText] = useState('')

  const handleAddTasks = (e) => {
    e.preventDefault()
    if(text.trim()==="") return;
    setTasks([...tasks,{ 
      id: Date.now(),
      text : text,
      column : "Have to do"
     }])
    setText("")
  }

  const dragStart = (e, task) =>{
    e.dataTransfer.setData('text/plain', JSON.stringify(task))
  }

  const dragOver = (e) =>{
    e.preventDefault()
  }

  const dropHanlder = (e, targetColumn) =>{
    e.preventDefault()
    const droppedTask = JSON.parse(e.dataTransfer.getData('text/plain'))
    const updatedTask = tasks.map(task => 
      task.id === droppedTask.id ? 
    {...task, column: targetColumn } 
    : task
    );
    setTasks(updatedTask)
  }
  const handleDelete = (id) => {
    const filteredTasks = tasks.filter(task => task.id!== id)
    setTasks(filteredTasks)
  }



const renderColumn = (columnName, emoji) =>{
    const columnTasks = tasks.filter(task => task.column === columnName);
  return (
    <>
   <div className='h-96 w-96 border-2 border-gray-300 flex flex-col p-4 overflow-y-scroll scroll-'
          onDragOver={dragOver}
          onDrop={(e) => dropHanlder(e,columnName)}
   >
            <h2 className='text-2xl mt-2 mb-4 font-bold'> {columnName} {emoji}</h2>
            <hr className='font-extrabold py-1 m-0'/>
            <ul> 
              {columnTasks.map((task) => (
                <li 
                className="flex justify-between bg-gray-500 rounded-r-md px-2 py-2 my-2" 
                key={task.id}
                draggable
                onDragStart={(e)=> dragStart(e,task)}
                >{task.text}
                <div className='space-x-1'>
                <button onClick={() => handleDelete(task.id)} className='text-red-600'><Trash/></button>
                <button className='hover:cursor-grab'
                ><GripVertical /></button>
                </div>
                </li>
              ))}
            </ul>
        </div>
    </>
  )
}

return (
  <>
  <div className='h-screen snap-start justify-center items-center text-white bg-black scroll-smooth'>
    <div className='p-4'>
        <h1 className='text-3xl font-bold text-center'>Drag and Drop Todo List 📒</h1>
    </div>
    <div className='flex flex-row place-content-center m-10 '>
        <input  className="w-80 px-2 mx-4 bg-gray-800 py-2 rounded-4xl" 
        type="text" 
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='add a task....'/>
        <button
        onClick={handleAddTasks}
        className='bg-blue-950 py-2 rounded-4xl px-2 text-sm font-bold cursor-pointer'>add task</button>
    </div>
    <div className='flex flex-row place-content-center m-10 gap-6'>
        {renderColumn("Have to do","🎯")}
        {renderColumn("Doing","💪")}
        {renderColumn("Done","😴")}
    </div>
  </div>
  </>
)
}

export default DragnDrop