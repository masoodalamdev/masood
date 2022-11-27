import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './schools.css'
import axios from "axios";

import Table, { SelectColumnFilter, StatusPill, AvatarCell } from "./Table"; // new


export default function Schools() {
 const [schools, setSchools] = useState([]);
 const url = ('/schools')

 useEffect(()=>{
  // axios.get('https://jsonplaceholder.typicode.com/posts')
  axios.get(url)
  .then(res=> {
    console.log(res)
    console.log(res.data.data)
    setSchools(res.data.data)
  }).catch(err=> console.log(err))
 }, [])

 const handleDelete = async ()=>{
  try{
    await axios.delete(`/schools/${schools._id}`
    // await axios.delete("/")
    // , {data:{username:user.username}}
    );
    // window.location.replace("/")
  }catch(err){
    console.log("error is coming from schools.jsx")

  }
}

 const arr = schools.map((schools)=>{
  return (
    <tr>
       <i class="singlePostIcon fa-regular fa-trash-can" onClick={handleDelete}> delete</i>
    <td><img src={schools.logo}/></td>
    <td>{schools.name}</td>
    <td>{schools.contact}</td>
    <td>{schools.students}</td>
    <td>{schools.address}</td>
  </tr>
  )
 })


 /////////////////////////////////////////////////////////////////
//  let theArray = []

// useEffect(() => {
//         axios
//             .get('/schools')
//             .then(res => {
//                 const newItem = {
//                   id: res.data.id,
//                   name: res.data.name,
//                 };
//                 theArray.push(newItem);
//              })
//     }, [])

//  const getDataa = () => [
//  theArray.name, 
// ]
 /////////////////////////////////////////////////////////////////
 const getDataa = () => [
  ...schools 
  // console.log("===>",schools)
 ]
 const getData = () => [
  {
    name: "Jane Cooper",
    email: "jane.cooper@example.com",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    status: "Active",
    role: "Admin",
    imgUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    email: "jane.cooper@example.com",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    status: "Active",
    role: "Admin",
    imgUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Cody Fisher",
    email: "cody.fisher@example.com",
    title: "Product Directives Officer",
    department: "Intranet",
    status: "Active",
    role: "Owner",
    imgUrl:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Esther Howard",
    email: "esther.howard@example.com",
    title: "Forward Response Developer",
    department: "Directives",
    status: "Active",
    role: "Member",
    imgUrl:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jenny Wilson",
    email: "jenny.wilson@example.com",
    title: "Central Security Manager",
    department: "Program",
    status: "Inactive",
    role: "Member",
    imgUrl:
      "https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Kristin Watson",
    email: "kristin.watson@example.com",
    title: "Lean Implementation Liaison",
    department: "Mobility",
    status: "Offline",
    role: "Admin",
    imgUrl:
      "https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Cameron Williamson",
    email: "cameron.williamson@example.com",
    title: "Internal Applications Engineer",
    department: "Security",
    status: "Active",
    role: "Member",
    imgUrl:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Cameron Williamson",
    email: "cameron.williamson@example.com",
    title: "Internal Applications Engineer",
    department: "Security",
    status: "Active",
    role: "Member",
    imgUrl:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Cameron Williamson",
    email: "cameron.williamson@example.com",
    title: "Internal Applications Engineer",
    department: "Security",
    status: "Active",
    role: "Member",
    imgUrl:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Cameron Williamson",
    email: "cameron.williamson@example.com",
    title: "Internal Applications Engineer",
    department: "Security",
    status: "Active",
    role: "Member",
    imgUrl:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
]


// function App() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
        Cell: AvatarCell,
        imgAccessor: "imgUrl",
        emailAccessor: "email",
      },
      {
        Header: "Title",
        accessor: "title",
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: StatusPill, // new

      },
      {
        Header: "Role",
        accessor: 'role',
        Filter: SelectColumnFilter,  // new
        filter: 'includes',  // new
      },
    ], [])

  const data = React.useMemo(() => getDataa(schools), [schools]);
 
  return (

    <div className="schools">
schools
{/* <table>
  <thead>
    <tr>
      <th>Logo</th>
      <th>Name</th>
      <th>Contact</th>
      <th>No. of Students</th>
      <th>Address</th>
    </tr>
  </thead>
  <tbody>

   {arr}
  </tbody>
  <tfoot>
    <tr>
    </tr>
  </tfoot>
</table> */}
{/* //////// */}
{/* <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="">
          <h1 className="text-xl font-semibold">React Table + Tailwind CSS = ❤</h1>
        </div>
        <div className="mt-4">
          <Table columns={columns} data={data} /> */}
          <table>
  <thead>
    <tr>
      <th>Logo</th>
      <th>Name</th>
      <th>Contact</th>
      <th>No. of Students</th>
      <th>Address</th>
    </tr>
  </thead>
  <tbody>

   {arr}
   <tr>
    <td><img src={schools.logo}/></td>
    <td>{schools.name}</td>
    <td>{schools.contact}</td>
    <td>{schools.students}</td>
    <td>{schools.address}</td>
    <td>sdhsgd</td>
    <td>sdhsgd</td>
    <td>sdhsgd</td>
  </tr>
  </tbody>
  <tfoot>
    <tr>
    </tr>
  </tfoot>
</table>
        {/* </div>
      </main>
    </div> */}

    {/* ////////// */}




    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="">
          <h1 className="text-xl font-semibold">React Table + Tailwind CSS = ❤</h1>
        </div>
        <div className="mt-4">
          <Table columns={columns} data={data} />
        </div>
      </main>
    </div>
    </div>
  )

}
