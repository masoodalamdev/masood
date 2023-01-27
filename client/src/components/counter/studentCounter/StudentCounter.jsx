import React from 'react'
import './studentCounter.css'
import studentPic from './student.png'
import axios from 'axios'

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
            // console.log(data)
            const scount = data.length
            console.log(scount)
            document.getElementById("student").innerHTML = scount
         
        }
    })
    .catch(err => {
        console.log(err)
    })


export default function StudentCounter() {
  return (
    <div><img src={studentPic}/> Registered Students <span id='student'></span></div>
    )
}
