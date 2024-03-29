import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalTitle } from 'react-bootstrap'
import "./jobs.css"
import axios from 'axios'
import FileInput from "../../FileInput";
import styles from "./styles.module.css";





const Job = () => {
    const [Data, setData] = useState([]);
    const [RowData, SetRowData] = useState([])
    const [ViewShow, SetViewShow] = useState(false)
    const handleViewShow = () => { SetViewShow(true) }
    const hanldeViewClose = () => { SetViewShow(false) }
    //FOr Edit Model
    const [ViewEdit, SetEditShow] = useState(false)
    const handleEditShow = () => { SetEditShow(true) }
    const hanldeEditClose = () => { SetEditShow(false) }
    //FOr Delete Model
    const [ViewDelete, SetDeleteShow] = useState(false)
    const handleDeleteShow = () => { SetDeleteShow(true) }
    const hanldeDeleteClose = () => { SetDeleteShow(false) }
    //FOr Add New Data Model
    const [ViewPost, SetPostShow] = useState(false)
    const handlePostShow = () => { SetPostShow(true) }
    const hanldePostClose = () => { SetPostShow(false) }

    //Define here local state that store the form Data
    const [name, setName] = useState("")
    const [designation, setDesignation] = useState("")
    const [qualification, setQualification] = useState("")
    const [email, setEmail] = useState("")
    const [experience, setExperience] = useState("")
    const [contact, setContact] = useState("")
    const [salary, setSalary] = useState("")
    const [jobType, setJobType] = useState("")
    const [address, setAddress] = useState("")
    const [imgUrl, setImgUrl] = useState("")
    const [Delete,setDelete] = useState(false)
    //Id for update record and Delete
    const [id,setId] = useState("");

  
    const GetJobRecord = () => {

    
        // const handleSubmit = async (e) => {
        //     e.preventDefault()
        //     try {
        //         // const url = process.env.REACT_APP_API_URL + "/songs"
        //         const url =  "/songs"



        //         const { data : res } = await axios.post(url, data);
        //         // console.log(res + " sdhsdhsd");
        //         // console.log("s") 
        //         alert(res.message)
        //         setData({
                  
        //             song: "",
        //             img: "",	
        //         })
    
    
        //     } catch (error) {
        //         console.log(error  + " error comes from here")
        //     }
        // };







        //here we will get all school records
        const url = 'http://localhost:5000/api/jobs'
        axios.get(url)
            .then(response => {
                const result = response.data;
                const { status, message, data } = result;
                console.log(response.data, response.data.data, message, status)
                if (status !== 'SUCCESS') {
                    alert(message, status)
                }
                else {
                    setData(data)
                    // console.log(data)
                    const jcount = data.length
                    console.log(jcount)
                    document.getElementById("jobs").innerHTML = jcount
                 
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    const handleSubmite = () => {
        


        const url = 'http://localhost:5000/api/jobs'
        const Credentials = { name, designation, qualification, experience, email, contact, salary, jobType, address, imgUrl }
        axios.post(url, Credentials)
            .then(response => {
                const result = response.data;
                const { status, message, data } = result;
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


    const handleEdit = ()=>{
    const Credentials = { name: name, designation : designation, qualification : qualification, experience,  email, contact, salary, jobType, address, imgUrl } 

        const url = `http://localhost:5000/api/jobs/${id}`
        axios.put(url, Credentials)
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
    //handle Delete Function 
    const handleDelete = () =>{
        const url = `http://localhost:5000/api/jobs/${id}`
        axios.delete(url)
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
    //call this function in useEffect
    console.log(ViewShow + " view show", RowData + "row data show")
    useEffect(() => {
      GetJobRecord();
    }, [])

    // const handleInputState = (name, value) => {
    //     setImgData((prev) => ({ ...prev, [name]: value }));
    // };
  
  
    /////////////////////////
    // function MyFunction() {

    //     var myArray = [2, 3, 4, 5, 1, 6, 8];
    //     var result = myArray.length;
    //     const url = "http://localhost:5000/api/schools"
    
    //     axios.get(url).then(response => {
    //         const count = response.data.length;
    //         console.log(count)
           
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
        
        
    //     return (
    //         <>
    //       <p>Length of Array(Total Items) = {result}</p>
    //       <p>Registered Schools <span id="school"></span></p>
    //       {/* <p>Length of Array(Total Items) = {count}</p> */}
    //         </>
    //     )
    //   }
    /////////////////////////
   
    return (
        <div className='jobs'>
             {/* <MyFunction /> */}
             <div className='teacherCount'>
               Registered Jobs <span id='jobs'></span>
                </div>
            <div className='row'>
                <div className='mt-5 mb-4'>
                    <Button variant='primary' onClick={() => { handlePostShow() }}><i className='fa fa-plu'></i>
                        + Register Job
                    </Button>
                </div>
            </div>
            <div className='row'>
                <div className='table-responsive'>
                    <table className='table table-striped table-hover table-bordered'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Designation</th>
                                <th>Qualification</th>
                                <th>Experience</th>
                                <th>Email</th>
                                <th>Contact</th>
                                <th>Salary</th>
                                <th>Job Type</th>
                                <th>Address</th>
                                <th>Logo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Data.map((item) =>
                                <tr key={item._id}>
                                    <td>{item.name}</td>
                                    <td>{item.designation}</td>
                                    <td>{item.qualification}</td>
                                    <td>{item.experience}</td>
                                    <td>{item.email}</td>
                                    <td>{item.contact}</td>
                                    <td>{item.salary}</td>
                                    <td>{item.jobType}</td>
                                    <td>{item.address}</td>
                                    <td>
                                        <img src={item.imgUrl} />
                                       </td>
                                    <td style={{ minWidth: 190 }}>
                                        <Button size='sm' variant='primary' onClick={() => { handleViewShow(SetRowData(item)) }}>View</Button>|
                                        <Button size='sm' variant='warning' onClick={()=> {handleEditShow(SetRowData(item),setId(item._id))}}>Edit</Button>|
                                        <Button size='sm' variant='danger' onClick={() => {handleViewShow(SetRowData(item),setId(item._id), setDelete(true))}}>Delete</Button>|
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* View Modal */}
            <div className='model-box-view'>
                <Modal
                    show={ViewShow}
                    onHide={hanldeViewClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>View Job Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className='form-group'>
                                <label>Name</label>
                                <input type="text" className='form-control' value={RowData.name} readOnly />
                            </div>
                            <div className='form-group'>
                                <label>Designation</label>
                                <input type="text" className='form-control' value={RowData.designation} readOnly />
                            </div>
                            <div className='form-group'>
                                <label>Qualification</label>
                                <input type="text" className='form-control' value={RowData.qualification} readOnly />
                            </div>
                            <div className='form-group mt-3'>
                            <label>Experience</label>

                                <input type="email" className='form-control' value={RowData.experience} readOnly />
                            </div>
                            <div className='form-group mt-3'>
                            <label>Email address</label>

                                <input type="email" className='form-control' value={RowData.email} readOnly />
                            </div>
                            <div className='form-group mt-3'>
                            <label>Contact</label>

                                <input type="text" className='form-control' value={RowData.contact} readOnly />
                            </div>
                            <div className='form-group mt-3'>
                            <label>Salary</label>

                                <input type="text" className='form-control' value={RowData.salary} readOnly />
                            </div>
                            <div className='form-group mt-3'>
                            <label>Job Type</label>

                                <input type="text" className='form-control' value={RowData.jobType} readOnly />
                            </div>
                            <div className='form-group mt-3'>
                            <label>Address</label>

                                <input type="text" className='form-control' value={RowData.address} readOnly />
                            </div>
                           
                            <div className='form-group mt-3'>
                            <label>Logo</label>

                                <input type="text" className='form-control' value={RowData.imgUrl} readOnly />
                            </div>
                          
                            {
                                Delete && (
                                    <Button type='submit' className='btn btn-danger mt-4' onClick={handleDelete}>Delete Teacher Record</Button>
                                )
                            }
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={hanldeViewClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            {/* Modal for submit data to database */}
            <div className='model-box-view'>
                <Modal
                    show={ViewPost}
                    onHide={hanldePostClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>+ Register Job</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className='form-group'>
                            <label>Name</label>
                                <input type="text" className='form-control' onChange={(e) => setName(e.target.value)} placeholder="e.g Expert Academy" />
                            </div>
                            <div className='form-group'>
                            <label>Designation</label>
                                <input type="text" className='form-control' onChange={(e) => setDesignation(e.target.value)} placeholder="e.g Lecturer, Clerk" />
                            </div>
                            <div className='form-group'>
                            <label>Qualification</label>
                                <input type="text" className='form-control' onChange={(e) => setQualification(e.target.value)} placeholder="e.g BS, MS, MA etc" />
                            </div>
                            <div className='form-group mt-3'>
                                <label>Experience</label>
                                <input type="text" className='form-control' onChange={(e) => setExperience(e.target.value)} placeholder="e.g 1 year, 2 years " />
                            </div>
                            <div className='form-group mt-3'>
                                <label>Email address</label>

                                <input type="email" className='form-control' onChange={(e) => setEmail(e.target.value)} placeholder="abc@xyz.com" />
                            </div>
                            <div className='form-group mt-3'>
                            <label>Contact</label>
                                <input type="text" className='form-control' onChange={(e) => setContact(e.target.value)} placeholder="e.g 03xxxxxxxxx" />
                            </div>
                            <div className='form-group mt-3'>
                                <label>Salary</label>
                                <input type="text" className='form-control' onChange={(e) => setSalary(e.target.value)} placeholder="e.g 45000, 65000" />
                            </div>
                            <div className='form-group mt-3'>
                                <label>Job Type</label>
                                <input type="text" className='form-control' onChange={(e) => setJobType(e.target.value)} placeholder="e.g Regular, Contract" />
                            </div>
                          
                            <div className='form-group mt-3'>
                                <label>Address</label>
                                <input type="text" className='form-control' onChange={(e) => setAddress(e.target.value)} placeholder="e.g Home Town, California" />
                            </div>
                            {/* <div className='form-group mt-3'>
                                <label>Logo</label>
                                <input type="text" className='form-control' onChange={(e) => setImgUrl(e.target.value)} placeholder="e.g Home Town, California" />
                            </div> */}
                            	{/* <FileInput
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
                                /> */}
				{/* {console.log(data)} */}
                            <Button type='submit' className='btn btn-success mt-4' onClick={handleSubmite}>+ Register New Job</Button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={hanldePostClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            {/* Modal for Edit school record */}

                {/* ============================================= */}


       

                {/* ============================================= */}
            <div className='model-box-view'>
                <Modal
                    show={ViewEdit}
                    onHide={hanldeEditClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Teacher</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className='form-group'>
                                <label>Name</label>
                                <input type="text" className='form-control' onChange={(e) => setName(e.target.value)} placeholder="Please enter Name" defaultValue={RowData.name}/>
                                
                            </div>
                            <div className='form-group'>
                            <label>Designation</label>
                                <input type="text" className='form-control' onChange={(e) => setDesignation(e.target.value)} placeholder="Please enter Clerk, Lecturer" defaultValue={RowData.designation}/>
                            </div>
                            <div className='form-group mt-3'>
                                <label>Qualification</label>
                                <input type="text" className='form-control' onChange={(e) => setQualification(e.target.value)} placeholder="Please enter Qualification" defaultValue={RowData.qualification}/>
                            </div>
                            <div className='form-group mt-3'>
                                <label>Experience</label>
                                <input type="text" className='form-control' onChange={(e) => setExperience(e.target.value)} placeholder="Please enter Experience" defaultValue={RowData.experience}/>
                            </div>
                            <div className='form-group mt-3'>
                                <label>Email</label>
                                <input type="email" className='form-control' onChange={(e) => setEmail(e.target.value)} placeholder="Please enter email" defaultValue={RowData.email} />
                            </div>
                            <div className='form-group mt-3'>
                                <label>Contact</label>
                                <input type="text" className='form-control' onChange={(e) => setContact(e.target.value)} placeholder="Please enter Contact" defaultValue={RowData.contact}/>
                            </div>
                            <div className='form-group mt-3'>
                                <label>Salary</label>
                                <input type="text" className='form-control' onChange={(e) => setSalary(e.target.value)} placeholder="Please enter salary" defaultValue={RowData.salary}/>
                            </div>


                            <div className='form-group mt-3'>
                                <label>Job Type</label>
                                <input type="text" className='form-control' onChange={(e) => setJobType(e.target.value)} placeholder="e.g Contract, Regular" defaultValue={RowData.jobType}/>
                            </div>
                            <div className='form-group mt-3'>
                                <label>Address</label>
                                <input type="text" className='form-control' onChange={(e) => setAddress(e.target.value)} placeholder="Please enter Address" defaultValue={RowData.address}/>
                            </div>
                            <Button type='submit' className='btn btn-warning mt-4' onClick={handleEdit}>Edit Job</Button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={hanldeEditClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
};

export default Job;