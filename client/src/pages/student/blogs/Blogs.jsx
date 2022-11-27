import React from 'react'
import './blogs.css'
import Posts from "../../../components/posts/Posts";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Blogs() {
  const [posts,setPosts] = useState([]);
  const {search} = useLocation()
  
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data)};
    fetchPosts();
  },[search])
  return (
    <div className='blogs'>
        <Posts posts={posts} />
      
    </div>
  )
}

