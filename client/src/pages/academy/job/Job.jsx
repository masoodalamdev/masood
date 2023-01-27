import React from 'react'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './jobs.css';
import FileInput from "../../FileInput";

export default function Jobs() {
  //  const [cat, setCats] = useState([]);

  // useEffect(()=>{
  //   const getCats = async ()=>
  //   {
  //     const res = await axios.get("/categories")
  //     setCats(res.data)
  //   }
  //   getCats()
  // },[])
  // return (
  //   <div className='jobs'>Jobs section
    
    
  //   <div className="sidebarItem">
  //         <span className="sidebarTitle">CATEGORIES</span>
  //          <ul className="sidebarList">

  //            {cat.map(c=>(
  //           <Link to={`/?cat=${c.name}`} className="link">
  //           <li className="sidebarListItem">{c.name}</li>
  //           </Link>

  //           ))}

  //         </ul>
  //       </div>

    
  //   </div>
  // )


  const [data, setData] = useState({
		name: "",
		designation: "",
		experience: "",
		email: "",
		contact: "",
		salary: "",
		jobType: "",
		address: "",
		imgUrl: "",
	});

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleInputState = (name, value) => {
		setData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			// const url = process.env.REACT_APP_API_URL + "/songs"
			const url =  "/jobs"
			const { data : res } = await axios.post(url, data);
          alert("job posted sucessfully");
      
			// console.log(res + " sdhsdhsd");
			// console.log("s") 
			// alert(res.message)

			// =============clear form 
			// setData({
			// 	title: "",
			// 	desc: "",
			// 	song: "",
			// 	img: "",	
			// })


		} catch (error) {
			console.log(error  + " error comes from here")
		}
	};

	return (
		<div className='Songform'>
			<form className='onSubmit' onSubmit={handleSubmit} >
				<h1 className='heading'>+ Create Job</h1>
				<label>School Name:</label>
				<input
					type="text"
					// className={styles.input}
					placeholder="School Name"
					name="name"
					onChange={handleChange}
					value={data.name}
				/>
				<label>Designation:</label>
				<input
					type="text"
					// className={styles.input}
					placeholder="e.g Principal, Leturer etc"
					name="designation"
					onChange={handleChange}
					value={data.designation}
				/>
				<label>Experience:</label>
				<input
					type="text"
					// className={styles.input}
					placeholder="e.g 1 Year, 2 Years etc"
					name="experience"
					onChange={handleChange}
					value={data.experience}
				/>

				<label>Email:</label>

				<input
					type="email"
					// className={styles.input}
					placeholder="email"
					name="email"
					onChange={handleChange}
					value={data.email}
				/>
				<label>Contact Number:</label>

				<input
					type="text"
					// className={styles.input}
					placeholder="03xxxxxxxxx"
					name="contact"
					onChange={handleChange}
					value={data.contact}
				/>
				
				<label>Salary:</label>

				<input
					type="text"
					// className={styles.input}
					placeholder="e.g 50,000"
					name="salary"
					onChange={handleChange}
					value={data.salary}
				/>

				<label>Job Type:</label>

				<input
					type="text"
					// className={styles.input}
					placeholder="e.g Regular, Contract, Contigent etc"
					name="jobType"
					onChange={handleChange}
					value={data.jobType}
				/>
				<label>Address:</label>

				<input
					type="text"
					// className={styles.input}
					placeholder="complete address"
					name="address"
					onChange={handleChange}
					value={data.address}
				/>
				<label>Logo:</label>

				<FileInput
					name="imgUrl"
					label="Choose Image"
					handleInputState={handleInputState}
					type="image"
					value={data.imgUrl}
				/>
				<FileInput
					name="img2"
					label="Choose another Image"
					handleInputState={handleInputState}
					type="audio"
					value={data.img2}
				/>
				<button type="submit" className='submitBtn' >
					Submit
				</button>
			</form>
		</div>
	);

}

