import "./post.css";
import {Link} from "react-router-dom"

export default function Post({post}) {
  const PF = "http://localhost:5000/images/"
  return (
    <div className="post">
        {post.photo && (

          <img className="postImg"
          src={post.photo} alt="image" />
          )}
    <div className="postInfo">
        <div className="postCategories">
          {post.categories.map(c=>(
            <span className="postCategories">{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
        <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
        <p className="postDescription">{post.desc}
        </p>
    
    </div>
    
    </div>
  )
}
