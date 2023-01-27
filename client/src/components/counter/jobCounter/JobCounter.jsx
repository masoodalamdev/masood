import React from 'react'
import './jobCounter.css'
import jobPic from './job.png'
import axios from 'axios'


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
            // console.log(data)
            const jcount = data.length
            console.log(jcount)
            document.getElementById("job").innerHTML = jcount
         
        }
    })
    .catch(err => {
        console.log(err)
    })


export default function JobCounter() {
  return (
    <div className='jobCounter'>
    <div><img src={jobPic}/> Registered Jobs <span id='job'></span>
    </div>
  </div>
  )
}

