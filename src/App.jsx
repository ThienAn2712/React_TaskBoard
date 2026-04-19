import { useState } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import FilterBar from './components/FilterBar'

const initialTasks = [
   { id: '1', title: 'Learn React', status: 'todo' },
   { id: '2', title: 'Build Todo App', status: 'in-progress' },
   { id: '3', title: 'Review PR', status: 'done' },
]

function App() {
  const [tasks, setTasks] = useState(initialTasks)
  const [searchText, setSearchText] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')

  function addTask (newTask){
    setTasks([...tasks, newTask])
  }
  function deleteTask (id){
    setTasks(tasks.filter(task => task.id !== id))
  }
  const filteredTasks = tasks.filter(task => task.title.toLowerCase().includes(searchText.toLowerCase()))
                              .filter(task => filterStatus === 'all' ? true : task.status === filterStatus)
  return (
   <div>
      <h1>Task Board</h1>

   <TaskForm onAddTask= {addTask}/>
   <FilterBar
    searchText = {searchText}
    onSearchChange = {setSearchText}
    filterStatus = {filterStatus}
    onFilterChange = {setFilterStatus}
   />
   <TaskList tasks = {filteredTasks}
              onDeleteTask = {deleteTask} />
    </div>
  )
}

export default App
