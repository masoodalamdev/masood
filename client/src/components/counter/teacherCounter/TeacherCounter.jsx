import React from 'react'
import './teacherCounter.css'
import teacherPic from './teacher.png'

import axios from 'axios'

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
            // console.log(data)
            const scount = data.length
            console.log(scount)
            document.getElementById("teacher").innerHTML = scount
         
        }
    })
    .catch(err => {
        console.log(err)
    })

export default function TeacherCounter() {
  return (
    <div><img src={teacherPic}/> Registered Teachers <span id="teacher"></span></div>
  )
}
