import React from 'react'
import JobCounter from '../../components/counter/jobCounter/JobCounter'
import SchoolCounter from '../../components/counter/schoolCounter/SchoolCounter'
import StudentCounter from '../../components/counter/studentCounter/StudentCounter'
import TeacherCounter from '../../components/counter/teacherCounter/TeacherCounter'
import './home.css'


export default function Home() {
  return (
    <div className='home'>
        <div className='counter'>

        <SchoolCounter/>
        <TeacherCounter/>
        <StudentCounter/>
        <JobCounter/>
        </div>

    </div>
  )
}
