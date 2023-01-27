import React from 'react'
import "./schoolCounter.css"
import schoolPic from './school.png'
import axios from 'axios'


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
            // console.log(data)
            const scount = data.length
            console.log(scount)
            document.getElementById("school").innerHTML = scount
         
        }
    })
    .catch(err => {
        console.log(err)
    })

export default function SchoolCounter() {
  return (
    <div className='schoolCounter'>
      <div><img src={schoolPic}/> Registered Schools <span id='school'></span>
      </div>
    </div>
  )
}
