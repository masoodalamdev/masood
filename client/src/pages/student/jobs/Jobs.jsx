import React from 'react'
import './jobs.css';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Jobs() {
   const [cat, setCats] = useState([]);

  useEffect(()=>{
    const getCats = async ()=>
    {
      const res = await axios.get("/categories")
      setCats(res.data)
    }
    getCats()
  },[])
  return (
    <div className='jobs'>Jobs section
    
    
    <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
           <ul className="sidebarList">

             {cat.map(c=>(
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>

            ))}

          </ul>
        </div>

    
    </div>
  )
}
