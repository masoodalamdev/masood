import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalTitle } from 'react-bootstrap'
import axios from 'axios'
import './school.css'
import { Link } from 'react-router-dom';
const School = () => {
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
    const [schoolName, setSchoolName] = useState("")
    const [email, setEmail] = useState("")
    const [principalName, setPrincipalName] = useState("")
    const [principalCnic, setPrincipalCnic] = useState("")
    const [principalContact, setPrincipalContact] = useState("")
    const [schoolAddress, setSchoolAddress] = useState("")
    const [Delete,setDelete] = useState(false)
    //Id for update record and Delete
    const [id,setId] = useState("");

  
    const GetSchoolRecord = () => {

        //here we will get all school records
        const url = 'http://localhost:5000/api/schools'
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
                    document.getElementById("school").innerHTML = scount
                 
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    const handleSubmite = () => {
        const url = 'http://localhost:5000/api/schools'
        const Credentials = { schoolName, email, principalName, principalCnic, principalContact, schoolAddress }
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
        const url = `http://localhost:5000/api/schools/${id}`
        const Credentials = { schoolName, email, principalName, principalCnic, principalContact, schoolAddress }
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
        const url = `http://localhost:5000/api/schools/${id}`
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
        GetSchoolRecord();
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
        <div className='home'>


             <div className='schoolCount'>
               Registered Schools <span id='school'></span>
                </div>
            


            <div className='row'>
                <div className='mt-5 mb-4'>
                    <Button variant='primary' onClick={() => { handlePostShow() }}><i className='fa fa-plu'></i>
                        + Register School
                    </Button>
                </div>

                <Link to="/teacher" className="link">
                  
                <div className='mt-5 mb-4'>
                    <Button variant='primary' ><i className='fa fa-plu'></i>
                        + Register Teacher
                    </Button>
                </div>
                  </Link>
            </div>
            <div className='row'>
                <div className='table-responsive'>
                    <table className='table table-striped table-hover table-bordered'>
                        <thead>
                            <tr>
                                <th>School Name</th>
                                <th>Email</th>
                                <th>Principal Name</th>
                                <th>Principal CNIC</th>
                                <th>Principal Contact</th>
                                <th>Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Data.map((item) =>
                                <tr key={item._id}>
                                    <td>{item.schoolName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.principalName}</td>
                                    <td>{item.principalContact}</td>
                                    <td>{item.principalCnic}</td>
                                    <td>{item.schoolAddress}</td>
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
                        <Modal.Title>View School Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className='form-group'>
                                <label>School Name</label>
                                <input type="text" className='form-control' value={RowData.schoolName} readOnly />
                            </div>
                            <div className='form-group mt-3'>
                            <label>Email address</label>

                                <input type="email" className='form-control' value={RowData.email} readOnly />
                            </div>
                            <div className='form-group mt-3'>
                            <label>Principal Name</label>

                                <input type="text" className='form-control' value={RowData.principalName} readOnly />
                            </div>
                            <div className='form-group mt-3'>
                            <label>Principal CNIC</label>

                                <input type="text" className='form-control' value={RowData.principalCnic} readOnly />
                            </div>
                            <div className='form-group mt-3'>
                            <label>Principal Contact</label>

                                <input type="text" className='form-control' value={RowData.principalContact} readOnly />
                            </div>
                            <div className='form-group mt-3'>
                            <label>School Address</label>

                                <input type="text" className='form-control' value={RowData.schoolAddress} readOnly />
                            </div>
                            {
                                Delete && (
                                    <Button type='submit' className='btn btn-danger mt-4' onClick={handleDelete}>Delete School Record</Button>
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
                        <Modal.Title>+ Register School</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className='form-group'>
                                <lable>School Name</lable>
                                <input type="text" className='form-control' onChange={(e) => setSchoolName(e.target.value)} placeholder="e.g SK DigiTech Academy" />
                            </div>
                            <div className='form-group mt-3'>
                                <lable>Email address</lable>

                                <input type="email" className='form-control' onChange={(e) => setEmail(e.target.value)} placeholder="abc@xyz.com" />
                            </div>
                            <div className='form-group mt-3'>
                                <lable>Principal Name</lable>
                                <input type="text" className='form-control' onChange={(e) => setPrincipalName(e.target.value)} placeholder="e.g Mr. John" />
                            </div>
                            <div className='form-group mt-3'>
                                <lable>Principal Cnic Number</lable>
                                <input type="text" className='form-control' onChange={(e) => setPrincipalCnic(e.target.value)} placeholder="e.g 1234512345679" />
                            </div>
                            <div className='form-group mt-3'>
                                <lable>Contact Number</lable>
                                <input type="text" className='form-control' onChange={(e) => setPrincipalContact(e.target.value)} placeholder="03001234567" />
                            </div>
                            <div className='form-group mt-3'>
                                <lable>School Address</lable>
                                <input type="text" className='form-control' onChange={(e) => setSchoolAddress(e.target.value)} placeholder="e.g Home Town, California" />
                            </div>
                            <Button type='submit' className='btn btn-success mt-4' onClick={handleSubmite}>+ Register New School</Button>
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
                        <Modal.Title>Edit School</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className='form-group'>
                                <label>School Name</label>
                                <input type="text" className='form-control' onChange={(e) => setSchoolName(e.target.value)} placeholder="Please enter School Name" defaultValue={RowData.schoolName}/>
                            </div>
                            <div className='form-group mt-3'>
                                <label>Email</label>
                                <input type="email" className='form-control' onChange={(e) => setEmail(e.target.value)} placeholder="Please enter email" defaultValue={RowData.email} />
                            </div>
                            <div className='form-group mt-3'>
                                <label>Principal Name</label>
                                <input type="text" className='form-control' onChange={(e) => setPrincipalName(e.target.value)} placeholder="Please enter Principal Name" defaultValue={RowData.principalName}/>
                            </div>
                            <div className='form-group mt-3'>
                                <label>Principal CNIC</label>
                                <input type="text" className='form-control' onChange={(e) => setPrincipalCnic(e.target.value)} placeholder="Please enter Principal CNIC" defaultValue={RowData.principalCnic}/>
                            </div>
                            <div className='form-group mt-3'>
                                <label>Principal Contact</label>
                                <input type="text" className='form-control' onChange={(e) => setPrincipalContact(e.target.value)} placeholder="Please enter Principal Contact" defaultValue={RowData.principalContact}/>
                            </div>
                            <div className='form-group mt-3'>
                                <label>School Address</label>
                                <input type="text" className='form-control' onChange={(e) => setSchoolAddress(e.target.value)} placeholder="Please enter School Address" defaultValue={RowData.schoolAddress}/>
                            </div>
                            <Button type='submit' className='btn btn-warning mt-4' onClick={handleEdit}>Edit School</Button>
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

export default School;