import './Post.css'
import {MoreVert } from '@mui/icons-material'
import { Users } from '../../Dummy';
import { useState } from 'react';
function Post({post}) {
  let [like , setLike] =useState(post.like)
  let [isLiked, setIsLiked]= useState(false)
  let likeHandler =()=>{
  setLike(isLiked ? like-1 : like+1)
  setIsLiked(!isLiked)
}
  return (
    <>
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.filter((user)=>user.id === post?.userId)[0].profilePicture}
              alt=""
            />
            <span className="postUsername">
             {Users.filter((user)=>user.id === post?.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
            <img className='postImg' src={post.photo} alt=''/>
          </div>
          <div className="postTopRight">
            <MoreVert/>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Its my first post :)</span>
          <img className="postImg" src='src/assets/assets/person/download (1).jpeg' alt="" />
        </div>
        <div className="postCenter">
          <span className="postText">Its my first post :)</span>
          <img className="postImg" src='src/assets/assets/person/images.jpeg' alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="src/assets/assets/like.png"  alt="" />
            <img className="likeIcon" src="src/assets/assets/heart.png" alt="" />
            <span className="postLikeCounter">{like} pepole like</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">1 Comment</span>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Post