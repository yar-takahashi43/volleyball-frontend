import React from 'react'
import "./RegisterPlayer.css"

export default function Register() {
  return (
    <div className="register">
        <div className="registerTop">
            <h2 className="registerTitle">選手登録</h2>
            <hr className="barHr1" />
        </div>   
        <div className="registerBox">
            <p className="registerMsg">登録はこちら</p>
            <input type="text" className="registerInput" placeholder='背番号' />
            <input type="text" className="registerInput" placeholder='選手名' />
            <input type="text" className="registerInput" placeholder='表示名' />
            <button className="registerButton">登録</button>
        </div>
        <hr className="barHr2" />
    </div>
  )
}
