import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalTitle } from 'react-bootstrap'
import "./student.css"
import axios from 'axios'
const Student = () => {
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
    const [studentName, setStudentName] = useState("")
    const [fatherName, setFatherName] = useState("")
    const [schoolName, setSchoolName] = useState("")
    const [dob, setDob] = useState("")
    const [studentContact, setStudentContact] = useState("")
    const [fatherContact, setFatherContact] = useState("")
    const [studentCnic, setStudentCnic] = useState("")
    const [studentAddress, setStudentAddress] = useState("")
    const [Delete,setDelete] = useState(false)
    //Id for update record and Delete
    const [id,setId] = useState("");

  
    const GetStudentRecord = () => {

        //here we will get all school records
        const url = 'http://localhost:5000/api/student'
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
                    const scount = data.length
                    console.log(scount)
                    document.getElementById("student").innerHTML = scount
                 
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    const handleSubmite = () => {
        const url = 'http://localhost:5000/api/student'
        const Credentials = { studentName, fatherName, schoolName, dob, studentContact, fatherContact, studentCnic, studentAddress }
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
        const url = `http://localhost:5000/api/student/${id}`
        const Credentials = { studentName, fatherName, schoolName, dob, studentContact, fatherContact, studentCnic, studentAddress }
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
        const url = `http://localhost:5000/api/student/${id}`
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
        GetStudentRecord();
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
        <div className='student'>
             {/* <MyFunction /> */}
             <div className='studentCount'>
               Registered Students <span id='student'></span>
                </div>
            <div className='row'>
                <div className='mt-5 mb-4'>
                    <Button variant='primary' onClick={() => { handlePostShow() }}><i className='fa fa-plu'></i>
                        + Register student
                    </Button>
                </div>
            </div>
            <div className='row'>
                <div className='table-responsive'>
                    <table className='table table-striped table-hover table-bordered'>
                        <thead>
                            <tr>
                                <th>Student Name</th>
                                <th>Father Name</th>
                                <th>School Name</th>
                                <th>DOB</th>
                                <th>Student Contact</th>
                                <th>Father Contact</th>
                                <th>Student CNIC / CRMS No. </th>
                                <th>Student Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Data.map((item) =>
                                <tr key={item._id}>
                                    <td>{item.studentName}</td>
                                    <td>{item.fatherName}</td>
                                    <td>{item.schoolName}</td>
                                    <td>{item.dob}</td>
                                    <td>{item.studentContact}</td>
                                    <td>{item.fatherContact}</td>
                                    <td>{item.studentCnic}</td>
                                    <td>{item.studentAddress}</td>
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
                        <Modal.Title>View Student Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className='form-group'>
                                <label>Student Name</label>
                                <input type="text" className='form-control' value={RowData.studentName} readOnly />
                            </div>
                            <div className='form-group'>
                                <label>Father Name</label>
                                <input type="text" className='form-control' value={RowData.fatherName} readOnly />
                            </div>
                            <div className='form-group'>
                                <label>School Name</label>
                                <input type="text" className='form-control' value={RowData.schoolName} readOnly />
                            </div>
                            <div className='form-group mt-3'>
                            <label>DOB</label>
                                <input type="email" className='form-control' value={RowData.dob} readOnly />
                            </div>
                            <div className='form-group mt-3'>
                            <label>Student Contact</label>
                                <input type="text" className='form-control' value={RowData.studentContact} readOnly />
                            </div>
                            <div className='form-group mt-3'>
                            <label>Father Contact</label>
                                <input type="text" className='form-control' value={RowData.fatherContact} readOnly />
                            </div>
                            <div className='form-group mt-3'>
                            <label>Student CNIC / CRMS No.</label>
                                <input type="text" className='form-control' value={RowData.studentCnic} readOnly />
                            </div>
                           
                            <div className='form-group mt-3'>
                            <label>Address</label>

                                <input type="text" className='form-control' value={RowData.studentAddress} readOnly />
                            </div>
                            {
                                Delete && (
                                    <Button type='submit' className='btn btn-danger mt-4' onClick={handleDelete}>Delete Student Record</Button>
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
                        <Modal.Title>+ Register Student</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className='form-group'>
                            <label>Student Name</label>
                                <input type="text" className='form-control' onChange={(e) => setStudentName(e.target.value)} placeholder="e.g Mr. John" />
                            </div>
                            <div className='form-group'>
                            <label>Father Name</label>
                                <input type="text" className='form-control' onChange={(e) => setFatherName(e.target.value)} placeholder="e.g Mr. Sins" />
                            </div>
                            <div className='form-group'>
                            <label>School Name</label>
                                <input type="text" className='form-control' onChange={(e) => setSchoolName(e.target.value)} placeholder="e.g Modern Tech Academy" />
                            </div>
                            <div className='form-group mt-3'>
                                <lable>DOB</lable>
                                <input type="email" className='form-control' onChange={(e) => setDob(e.target.value)} placeholder="DDMMYYYY" />
                            </div>
                            <div className='form-group mt-3'>
                            <label>Student Contact</label>
                                <input type="text" className='form-control' onChange={(e) => setStudentContact(e.target.value)} placeholder="e.g 03xxxxxxxxx" />
                            </div>
                            <div className='form-group mt-3'>
                            <label>Father Contact</label>
                                <input type="text" className='form-control' onChange={(e) => setFatherContact(e.target.value)} placeholder="e.g 03xxxxxxxxx" />
                            </div>
                            <div className='form-group mt-3'>
                                <lable>Student CNIC / CRMS No.</lable>
                                <input type="text" className='form-control' onChange={(e) => setStudentCnic(e.target.value)} placeholder="e.g 1234512345679" />
                            </div>
                         
                            <div className='form-group mt-3'>
                                <lable>Address</lable>
                                <input type="text" className='form-control' onChange={(e) => setStudentAddress(e.target.value)} placeholder="e.g Home Town, California" />
                            </div>
                            <Button type='submit' className='btn btn-success mt-4' onClick={handleSubmite}>+ Register New Student</Button>
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
                        <Modal.Title>Edit Student</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className='form-group'>
                                <label>Student Name</label>
                                <input type="text" className='form-control' onChange={(e) => setStudentName(e.target.value)} placeholder="Please enter student Name" defaultValue={RowData.studentName}/>
                            </div>
                            <div className='form-group'>
                                <label>Father Name</label>
                                <input type="text" className='form-control' onChange={(e) => setFatherName(e.target.value)} placeholder="Please enter father Name" defaultValue={RowData.fatherName}/>
                            </div>
                            <div className='form-group'>
                                <label>School Name</label>
                                <input type="text" className='form-control' onChange={(e) => setSchoolName(e.target.value)} placeholder="Please enter School Name" defaultValue={RowData.schoolName}/>
                            </div>
                            <div className='form-group mt-3'>
                                <label>DOB</label>
                                <input type="email" className='form-control' onChange={(e) => setDob(e.target.value)} placeholder="Please enter your date of birth" defaultValue={RowData.dob} />
                            </div>
                            <div className='form-group mt-3'>
                                <label>Student Contact</label>
                                <input type="text" className='form-control' onChange={(e) => setStudentContact(e.target.value)} placeholder="Please enter student Contact" defaultValue={RowData.studentContact}/>
                            </div>
                            <div className='form-group mt-3'>
                                <label>Father Contact</label>
                                <input type="text" className='form-control' onChange={(e) => setStudentContact(e.target.value)} placeholder="Please enter father Contact" defaultValue={RowData.fatherContact}/>
                            </div>
                            <div className='form-group mt-3'>
                                <label>Student CNIC / CRMS No. </label>
                                <input type="text" className='form-control' onChange={(e) => setStudentCnic(e.target.value)} placeholder="Please enter student CNIC / CRMS" defaultValue={RowData.studentCnic}/>
                            </div>

                            <div className='form-group mt-3'>
                                <label>Address</label>
                                <input type="text" className='form-control' onChange={(e) => setStudentAddress(e.target.value)} placeholder="Please enter student Address" defaultValue={RowData.studentAddress}/>
                            </div>
                            <Button type='submit' className='btn btn-warning mt-4' onClick={handleEdit}>Edit Student</Button>
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

export default Student;