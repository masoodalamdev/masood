// import Header from "../../components/header/Header";
// import Posts from "../../components/posts/Posts";
// // import Sidebar from "../../components/sidebar/Sidebar";
// import axios from "axios";
// import "./home.css"
// import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";

// export default function Home() {
//   const [posts,setPosts] = useState([]);
//   const {search} = useLocation()
  
//   useEffect(() => {
//     const fetchPosts = async () => {
//       const res = await axios.get("/posts" + search);
//       setPosts(res.data)
//     };
//     fetchPosts();
//   },[search])
//   return (
//     <>
//     <div  className="home">
      
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quae quo tempora nesciunt earum maiores iure sequi laboriosam! Inventore rem accusamus esse quia vitae iure vero quae culpa ipsa voluptas.
//         {/* <Posts posts={posts} /> */}
//         <Posts posts={posts} />

//             {/* <Header/> */}
//     </div>
//     </>
//   )
// }



import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios";
import "./home.css"
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Home() {
  const [posts,setPosts] = useState([]);
  const {search} = useLocation()
  
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data)};
    fetchPosts();
  },[search])
  return (
    <>
            {/* <Header/> */}
    <div  className="home">
        <Posts posts={posts} />
        {/* <Sidebar/> */}
    </div>
    </>
  )
}