import { useState } from 'react'

function TaskForm({ onAddTask }) {
 
  const [title, setTitle] = useState('')
  const [status, setStatus] = useState('todo')

  function handleSubmit(e) {
    e.preventDefault() // Ngăn trình duyệt reload trang

    // Kiểm tra title không được trống
    if (!title.trim()) {
      alert('Vui lòng nhập tiêu đề task!')
      return
    }

    // Tạo task mới
    const newTask = {
      id: Date.now().toString(), // Dùng timestamp làm id duy nhất
      title: title.trim(),
      status: status,
    }

    onAddTask(newTask) // Gửi task lên App.jsx

    // Reset form
    setTitle('')
    setStatus('todo')
  }

  return (
    <form onSubmit={handleSubmit}  >
      <h2>Thêm Task Mới</h2>

      <div style={{ marginBottom: '10px' }}>
        <label>Tiêu đề: </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Nhập tên task..."
          style={{ marginLeft: '8px', padding: '6px', width: '300px' }}
        />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Trạng thái: </label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          style={{ marginLeft: '8px', padding: '6px' }}
        >
          <option value="todo">Todo</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>

      <button type="submit" style={{ padding: '8px 16px', cursor: 'pointer', marginBottom: '10px'}}>
        Thêm Task
      </button>
    </form>
  )
}

export default TaskForm