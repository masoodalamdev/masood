import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalTitle } from 'react-bootstrap'
import "./teacher.css"
import axios from 'axios'
const Teacher = () => {
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
    const [teacherName, setTeacherName] = useState("")
    const [schoolName, setSchoolName] = useState("")
    const [email, setEmail] = useState("")
    const [teacherContact, setTeacherContact] = useState("")
    const [teacherCnic, setTeacherCnic] = useState("")
    const [teacherQualification, setTeacherQualification] = useState("")
    const [teacherExperience, setTeacherExperience] = useState("")
    const [teacherSalary, setTeacherSalary] = useState("")
    const [teacherAddress, setTeacherAddress] = useState("")
    const [Delete,setDelete] = useState(false)
    //Id for update record and Delete
    const [id,setId] = useState("");

  
    const GetTeacherRecord = () => {

        //here we will get all school records
        const url = 'http://localhost:5000/api/teacher'
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
                    const tcount = data.length
                    console.log(tcount)
                    document.getElementById("teacher").innerHTML = tcount
                 
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    const handleSubmite = () => {
        const url = 'http://localhost:5000/api/teacher'
        const Credentials = { teacherName, schoolName, email, teacherContact, teacherCnic, teacherQualification, teacherExperience, teacherSalary, teacherAddress }
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
    const handleEdit = () =>{
        const url = `http://localhost:5000/api/teacher/${id}`
        const Credentials = { teacherName, schoolName, email, teacherContact, teacherCnic, teacherQualification, teacherExperience, teacherSalary, teacherAddress }
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
        const url = `http://localhost:5000/api/teacher/${id}`
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
        GetTeacherRecord();
    }, [])

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
        <div className='teacher'>
             {/* <MyFunction /> */}
             <div className='teacherCount'>
               Registered Teachers <span id='teacher'></span>
                </div>
            <div className='row'>
                <div className='mt-5 mb-4'>
                    <Button variant='primary' onClick={() => { handlePostShow() }}><i className='fa fa-plu'></i>
                        + Register Teacher
                    </Button>
                </div>
            </div>
            <div className='row'>
                <div className='table-responsive'>
                    <table className='table table-striped table-hover table-bordered'>
                        <thead>
                            <tr>
                                <th>Teacher Name</th>
                                <th>School Name</th>
                                <th>Email</th>
                                <th>Teacher Contact</th>
                                <th>Teacher CNIC</th>
                                <th>Teacher Qualification</th>
                                <th>Teacher Experience</th>
                                <th>Teacher Salary</th>
                                <th>Teacher Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Data.map((item) =>
                                <tr key={item._id}>
                                    <td>{item.teacherName}</td>
                                    <td>{item.schoolName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.teacherContact}</td>
                                    <td>{item.teacherCnic}</td>
                                    <td>{item.teacherQualification}</td>
                                    <td>{item.teacherExperience}</td>
                                    <td>{item.teacherSalary}</td>
                                    <td>{item.teacherAddress}</td>
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
                        <Modal.Title>View Teacher Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className='form-group'>
                                <label>Teacher Name</label>
                                <input type="text" className='form-control' value={RowData.teacherName} readOnly />
                            </div>
                            <div className='form-group'>
                                <label>School Name</label>
                                <input type="text" className='form-control' value={RowData.schoolName} readOnly />
                            </div>
                            <div className='form-group mt-3'>
                            <label>Email address</label>

                                <input type="email" className='form-control' value={RowData.email} readOnly />
                            </div>
                            <div className='form-group mt-3'>
                            <label>Contact</label>

                                <input type="text" className='form-control' value={RowData.teacherContact} readOnly />
                            </div>
                            <div className='form-group mt-3'>
                            <label>CNIC</label>

                                <input type="text" className='form-control' value={RowData.teacherCnic} readOnly />
                            </div>
                            <div className='form-group mt-3'>
                            <label>Qualification</label>

                                <input type="text" className='form-control' value={RowData.teacherQualification} readOnly />
                            </div>
                            <div className='form-group mt-3'>
                            <label>Experience</label>

                                <input type="text" className='form-control' value={RowData.teacherExperience} readOnly />
                            </div>
                           
                            <div className='form-group mt-3'>
                            <label>Salary</label>

                                <input type="text" className='form-control' value={RowData.teacherSalary} readOnly />
                            </div>
                            <div className='form-group mt-3'>
                            <label>Address</label>

                                <input type="text" className='form-control' value={RowData.teacherAddress} readOnly />
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
                        <Modal.Title>+ Register Teacher</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className='form-group'>
                            <label>Teacher Name</label>
                                <input type="text" className='form-control' onChange={(e) => setTeacherName(e.target.value)} placeholder="e.g Mr. John" />
                            </div>
                            <div className='form-group'>
                            <label>School Name</label>
                                <input type="text" className='form-control' onChange={(e) => setSchoolName(e.target.value)} placeholder="e.g Modern Tech Academy" />
                            </div>
                            <div className='form-group mt-3'>
                                <lable>Email address</lable>

                                <input type="email" className='form-control' onChange={(e) => setEmail(e.target.value)} placeholder="abc@xyz.com" />
                            </div>
                            <div className='form-group mt-3'>
                            <label>Contact</label>
                                <input type="text" className='form-control' onChange={(e) => setTeacherContact(e.target.value)} placeholder="e.g 03xxxxxxxxx" />
                            </div>
                            <div className='form-group mt-3'>
                                <lable>CNIC</lable>
                                <input type="text" className='form-control' onChange={(e) => setTeacherCnic(e.target.value)} placeholder="e.g 1234512345679" />
                            </div>
                            <div className='form-group mt-3'>
                                <lable>Qualification</lable>
                                <input type="text" className='form-control' onChange={(e) => setTeacherQualification(e.target.value)} placeholder="e.g Intermediate, Graduate, Master" />
                            </div>
                            <div className='form-group mt-3'>
                                <lable>Experience</lable>
                                <input type="text" className='form-control' onChange={(e) => setTeacherExperience(e.target.value)} placeholder="e.g 1 year, 2 years " />
                            </div>
                            <div className='form-group mt-3'>
                                <lable>Salary</lable>
                                <input type="text" className='form-control' onChange={(e) => setTeacherSalary(e.target.value)} placeholder="e.g 45000, 65000" />
                            </div>
                            <div className='form-group mt-3'>
                                <lable>Address</lable>
                                <input type="text" className='form-control' onChange={(e) => setTeacherAddress(e.target.value)} placeholder="e.g Home Town, California" />
                            </div>
                            <Button type='submit' className='btn btn-success mt-4' onClick={handleSubmite}>+ Register New Teacher</Button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={hanldePostClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            {/* Modal for Edit school record */}
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
                                <label>Teacher Name</label>
                                <input type="text" className='form-control' onChange={(e) => setTeacherName(e.target.value)} placeholder="Please enter Teacher Name" defaultValue={RowData.teacherName}/>
                            </div>
                            <div className='form-group'>
                                <label>School Name</label>
                                <input type="text" className='form-control' onChange={(e) => setSchoolName(e.target.value)} placeholder="Please enter School Name" defaultValue={RowData.schoolName}/>
                            </div>
                            <div className='form-group mt-3'>
                                <label>Email</label>
                                <input type="email" className='form-control' onChange={(e) => setEmail(e.target.value)} placeholder="Please enter email" defaultValue={RowData.email} />
                            </div>
                            <div className='form-group mt-3'>
                                <label>Contact</label>
                                <input type="text" className='form-control' onChange={(e) => setTeacherContact(e.target.value)} placeholder="Please enter Teacher Contact" defaultValue={RowData.teacherContact}/>
                            </div>
                            <div className='form-group mt-3'>
                                <label>CNIC</label>
                                <input type="text" className='form-control' onChange={(e) => setTeacherCnic(e.target.value)} placeholder="Please enter Teacher CNIC" defaultValue={RowData.teacherCnic}/>
                            </div>


                            <div className='form-group mt-3'>
                                <label>Qualification</label>
                                <input type="text" className='form-control' onChange={(e) => setTeacherQualification(e.target.value)} placeholder="Please enter Teacher Qualification" defaultValue={RowData.teacherQualification}/>
                            </div>
                            <div className='form-group mt-3'>
                                <label>Experience</label>
                                <input type="text" className='form-control' onChange={(e) => setTeacherExperience(e.target.value)} placeholder="Please enter Teacher Experience" defaultValue={RowData.teacherExperience}/>
                            </div>
                            <div className='form-group mt-3'>
                                <label>Salary</label>
                                <input type="text" className='form-control' onChange={(e) => setTeacherSalary(e.target.value)} placeholder="Please enter Teacher Salary" defaultValue={RowData.teacherSalary}/>
                            </div>
                            <div className='form-group mt-3'>
                                <label>Address</label>
                                <input type="text" className='form-control' onChange={(e) => setTeacherAddress(e.target.value)} placeholder="Please enter Teacher Address" defaultValue={RowData.teacherAddress}/>
                            </div>
                            <Button type='submit' className='btn btn-warning mt-4' onClick={handleEdit}>Edit Teacher</Button>
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

export default Teacher;