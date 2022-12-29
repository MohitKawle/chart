import React from 'react'

const Filter = ({handleSelect}) => {
  return (
    <div
    style={{backgroundColor:"#66a3ff",display:"flex",width:"80%",
    padding:"8px"
    ,margin:"auto",height:"40px",justifyContent:"space-between" }}
    >
      <select name="" id="" onChange={handleSelect} >
      <option value=''>Revinue Type all</option>
        <option value="Revenue Type -11">Revinue Type -11</option>
        <option value="Revenue Type -7">Revinue Type -7</option>
        <option value="Revenue Type -3">Revinue Type -3</option>
        <option value="Revenue Type -5">Revinue Type -5</option>
        <option value="Revenue Type -6">Revinue Type -6</option>
      </select>
   <div>Hello Joe</div>
    </div>
  )
}

export default Filter
