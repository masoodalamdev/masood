import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './schools.css'
import axios from "axios";
import Table, { SelectColumnFilter, StatusPill, AvatarCell } from "./Table"; // new


export default function Schools() {
 const [schools, setSchools] = useState([]);
 const url = ('/schools')
 const [updateState, setUpdateState] = useState(-1)

 useEffect(()=>{
  // axios.get('https://jsonplaceholder.typicode.com/posts')
  axios.get(url)
  .then(res=> {
    console.log(res)
    console.log(res.data.data)
    setSchools(res.data.data)
  }).catch(err=> console.log(err))
 }, [])


 //handle Delete Function 
 const handleDelete = () =>{
    // const url2 = (`/schools/${schools}`)
    const url2 = `http://localhost:5000/api/schools`
  axios.delete(url2)
      .then(response => {
          const result = response.data;
          const { status, message } = result;
          if (status !== 'SUCCESS') {
              alert(message, status)
          }
          else {
              alert(message)
              window.location.reload()
          }
      })
      .catch(err => {
          console.log(err)
      })
}

function handleRemove(_id) {
  console.log(_id);
  // remove item
  const url3 = `http://localhost:5000/api/schools/${_id}`
  axios.delete(url3)
  .then(response => {
      const result = response.data;
      const { status, message } = result;
      if (status !== 'SUCCESS') {
          alert(message, status)
      }
      else {
          alert(message)
          window.location.reload()
      }
  })
  .catch(err => {
      console.log(err)
  })
}


// function handleUpdate(e){
//   e.preventDefault()
//   setUpdateState(-1)
  // axios.patch()
  const handleUpdate = async (e) => {
		e.preventDefault()
		setUpdateState(-1)
    // console.log(id)
  }
function handleEdit(id){
  // console.log(id)
  // const url3 = `http://localhost:5000/api/schools/${a}`
  // axios.patch(url3).then(response =>{
    
  // }).catch(error =>{
  //   console.log(error)
  // })
  setUpdateState(id)
}

function Edit({item, schools, setSchools}){
  function handleInput(e){
      const newList = schools.map(li => (
        li._id === item._id ? {...li, [e.target.name] : e.target.value} : li 
      ))
      setSchools(newList)
  }
  return(
    <tr>
      <td><input type="text" name="name" onChange={handleInput} value={item.name} /></td>
      <td><input type="text" name="email" onChange={handleInput} value={item.email} /></td>
      <td><button type='submit' className='update'>Update</button></td>
    </tr>
  )
}

//  const getDataa = () => [
//   ...schools 
//   // console.log("===>",schools)
//  ]


// function App() {
  // const columns = React.useMemo(
  //   () => [
  //     {
  //       Header: "School Name",
  //       accessor: "name",
  //       Cell: AvatarCell,
  //       imgAccessor: "imgUrl",
  //       emailAccessor: "email",
  //     },
  //     {
  //       Header: "Principal",
  //       accessor: "principal",
  //     },
  //     {
  //       Header: "Contact",
  //       accessor: "contact",
  //     },
  //     {
  //       Header: "Department",
  //       accessor: "department",
  //     },
  //     {
  //       Header: "Status",
  //       accessor: "status",
  //       Cell: StatusPill, // new

  //     },
  //     {
  //       Header: "Role",
  //       accessor: 'role',
  //       Filter: SelectColumnFilter,  // new
  //       filter: 'includes',  // new
  //     },
  //     {
  //       Header: "Action",
  //       accessor: 'action',
  //     },
  //   ], [])

  // const data = React.useMemo(() => getDataa(schools), [schools]);
 
  return (

    <div className="schools">
          {/* <Table columns={columns} data={data} /> */}

<h1>Find your dream job - Latest Jobs Available</h1>

  <form onSubmit={handleUpdate}>
<table>
{schools.map((item) => (
  updateState === item._id ? <Edit item = {item} schools={schools} setSchools={setSchools} /> : 
      <tr>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>
        <button type="button" className='edit' onClick={() => handleEdit(item._id)}>Edit</button>
        <button type="button" className='delete' onClick={() => handleRemove(item._id)}>Delete</button></td>
      </tr>
))
}
</table>
</form>

{/* <ul>
      {schools.map((item) => (
        <li key={item._id}>
          <span></span>
          <span>{item.email}</span>
          <span>{item._id}</span>
          <button type="button" onClick={() => handleEdit(item._id, item.name, item.email)}>Edit</button>
         
        </li>
      ))}
    </ul> */}






    </div>
  )

}


