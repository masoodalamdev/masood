import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import './addSchool.css'
import FileInput from "../../pages/FileInput";

export default function AddSchool() {
    // const [name, setName] = useState('');
    // const [contact, setContact] = useState('');
    // const [address, setAddress] = useState('');
   



  //   const handleSubmit = async (e)=>{
  //       e.preventDefault();
  //       const addSchool = {
  //         name,
  //         contact,
  //         address,
          
  //       }     
  //       try{
    
  //         const res = await axios.post("/schools", addSchool);
  //         console.log("school added succesfully", res);
  //         alert("school addedd sucessfully");
  //           setName('');
  //           setContact('');
  //           setAddress('');
  //       //   window.location.replace("/post/" + res.data._id)
  //       }catch(err){
    
  //       }
  //     }

     

  // return (
  //   <div className='addSchool'>
  //       <h1>Add School</h1>
  //   <form className='form' onSubmit={handleSubmit}>
  //       <label>School Name</label>
  //   <input type="text" value={name} placeholder="school name" onChange={(e)=> setName(e.target.value)}/>
  //       <label>Contact</label>
  //   <input type="text" value={contact} placeholder="contact number" onChange={(e)=> setContact(e.target.value)}/>
  //       <label>Address</label>
  //   <input type="text" value={address} placeholder="school address" onChange={(e)=> setAddress(e.target.value)}/>
  //   <FileInput
	// 				name="img"
	// 				label="Choose Image"
	// 				handleInputState={handleInputState}
	// 				type="image"
	// 				value={data.img}
	// 			/>
	// 			<FileInput
	// 				name="song"
	// 				label="Choose Song"
	// 				handleInputState={handleInputState}
	// 				type="audio"
	// 				value={data.song}
	// 			/>
  //   <button className="" type="submit">Submit</button>

  //   </form>
  //   </div>
  // )



  const [data, setData] = useState({
		name: "",
		email: "",
		title: "",
		department: "",
		status: "",
		imgUrl: "",
		img2: "",
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
			const url =  "/schools"
			const { data : res } = await axios.post(url, data);
          alert("school addedd sucessfully");
      
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
				<h1 className='heading'>Add School</h1>
				<label>Principal Name:</label>
				<input
					type="text"
					// className={styles.input}
					placeholder="Principal Name"
					name="name"
					onChange={handleChange}
					value={data.name}
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
				<label>School Name:</label>

				<input
					type="text"
					// className={styles.input}
					placeholder="School Name"
					name="title"
					onChange={handleChange}
					value={data.title}
				/>
				<label>Department:</label>

				<input
					type="text"
					// className={styles.input}
					placeholder=" Govt. or Non-Govt."
					name="department"
					onChange={handleChange}
					value={data.department}
				/>
				<label>Status:</label>

				<input
					type="text"
					// className={styles.input}
					placeholder="Active or Inactive"
					name="status"
					onChange={handleChange}
					value={data.status}
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
