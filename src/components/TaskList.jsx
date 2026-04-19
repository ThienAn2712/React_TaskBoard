// Màu badge theo status
const statusStyle = {
  'Todo': { background: '#fff3cd', color: '#856404' },
  'In-progress': { background: '#cce5ff', color: '#004085' },
  'Done': { background: '#d4edda', color: '#155724' },
}

function TaskList({ tasks, onDeleteTask }) {
  if (tasks.length === 0) {
    return <p style={{ color: '#888' }}>Không có task nào.</p>
  }

  return (
    <div>
      <h2>Danh sách Task ({tasks.length})</h2>
      {tasks.map(task => (
        <div key={task.id}
        style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '12px 16px',
            marginBottom: '8px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            background: '#fff',
          }}
        >
          <span>{task.title}</span>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span>
              {task.status}
            </span>

            {/* Nút xóa */}
            <button
              onClick={() => onDeleteTask(task.id)}
            >
             Xóa
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TaskList