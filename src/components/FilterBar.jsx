function FilterBar({ searchText, onSearchChange, filterStatus, onFilterChange }) {
  return (
    <div>

      <div style={{ marginBottom: '10px' }}>
        <label> Tìm kiếm: </label>
        <input
          type="text"
          value={searchText}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Tìm theo tên task..."
          style={{ marginLeft: '8px', padding: '6px', width: '290px' }}
        />
      </div>

      <div>
        <label> Lọc theo: </label>
        <select
          value={filterStatus}
          onChange={(e) => onFilterChange(e.target.value)}
          style={{ marginLeft: '8px', padding: '6px' }}
        >
          <option value="all">Tất cả</option>
          <option value="todo">Todo</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>

    </div>
  )
}

export default FilterBar