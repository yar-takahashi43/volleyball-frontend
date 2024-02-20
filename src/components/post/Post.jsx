import { MoreVert } from '@mui/icons-material'
import React, { useState } from 'react'
import "./Post.css"
import {Users} from "../../dummyData"

export default function Post({post}) {
  // いいねを保存するための状態変数を作成
  const [like, setLike] = useState(post.like)
  const [isLike, setIsLike] = useState(false) //いいねが押されているかどうか（初期値は押されていない）

  const handleLike = () => {
    setLike(isLike ? like - 1 : like + 1)
    setIsLike(!isLike)
  }

  // console.log(post)
  return (
    <div className='post'>
      <div className="postWrapper">
            <div className="postTop">
              <div className="postTopLeft">
                <img src={Users.filter((user) => user.id === post.id)[0].profilePicture} alt='' className='postProfileImg'/>
                {/* <span className="postUsername">shin code</span> */}
                <span className="postUsername">
                  {Users.filter((user) => user.id === post.id)[0].username}
                </span>
                <span className="postDate">{post.date}</span>
              </div>
              <div className="postTopRight">
                <MoreVert />
              </div>
            </div>
            <div className="postCenter">
              <span className="postText">{post.desc}</span>
              <img src={post.photo} alt='' className='postImg' />
            </div>
            <div className="postBottom">
              <div className="postBottomLeft">
                <img 
                  src='./assets/heart.png' 
                  alt=''
                  className='likeIcon'
                  onClick={() => handleLike()} 
                />
                <span className="postLikeCounter">{like}人がいいねを押しました。</span>
              </div>
              <div className="postBottomRight">
                <span className="postCommentText">{post.comment}: コメント</span>
              </div>
            </div>
          </div>
    </div>
  )
}
