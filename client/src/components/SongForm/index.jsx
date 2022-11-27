import { useState } from "react";
import axios from 'axios';
// import FileInput from "../FileInput";
import FileInput from "../../pages/FileInput";
// import styles from "./styles.module.css";
import './form.css';

const SongForm = () => {
	const [data, setData] = useState({
		title: "",
		desc: "",
		song: "",
		img: "",
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
			const url =  "/songs"
			const { data : res } = await axios.post(url, data);
			// console.log(res + " sdhsdhsd");
			// console.log("s") 
			alert(res.message)
			setData({
				title: "",
				desc: "",
				song: "",
				img: "",	
			})


		} catch (error) {
			console.log(error  + " error comes from here")
		}
	};

	return (
		<div className='Songform'>
			<form className='onSubmit' onSubmit={handleSubmit} >
				<h1 className='heading'>Song Form</h1>
				<input
					type="text"
					// className={styles.input}
					placeholder="Title"
					name="title"
					onChange={handleChange}
					value={data.title}
				/>
				<input
					type="text"
					// className={styles.input}
					placeholder="Description"
					name="desc"
					onChange={handleChange}
					value={data.desc}
				/>
				<FileInput
					name="img"
					label="Choose Image"
					handleInputState={handleInputState}
					type="image"
					value={data.img}
				/>
				<FileInput
					name="song"
					label="Choose Song"
					handleInputState={handleInputState}
					type="audio"
					value={data.song}
				/>
				<button type="submit" className='submitBtn' >
					Submit
				</button>
			</form>
		</div>
	);
};

export default SongForm;