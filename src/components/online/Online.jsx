import React from 'react'

export default function Online({user}) {
  return (
    <li className="rightbarFriend">
    <div className="rightbarProfileImgContainer">
      <img src={user.profilePicture} alt="" className='rightbarProfileImg'/>
      {/** オンライン状態を表す丸いマークはspanタグを空っぽにして表す。通知と同じ */}
      <span className="rightbarOnline"></span>
    </div>
    <span className="rightbarUsername">{user.username}</span>
  </li>
  )
}
