import React from 'react'

const CategoryForm = ({value,setValue,handlerSubmit}) => {
    return (
      <div>
          <form onSubmit={handlerSubmit}>
    <div class="mb-3">
      <input type="text" class="form-control"placeholder='Enter new category' value={value} onChange={(e)=>setValue(e.target.value)}/>
    </div>
    
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
        
      </div>
    )
  }

export default CategoryForm






