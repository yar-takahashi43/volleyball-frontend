import React from 'react'
import "./RegisterOpponent.css"

export default function RegisterOpponent() {
    return (
        <div className="register">
            <div className="registerTop">
                <h2 className="registerTitle">対戦相手登録</h2>
            </div> 
                <hr className="barHr1" />  
            <div className="registerBox">
                <p className="registerMsg">登録はこちら</p>
                <input type="text" className="registerInput" placeholder='対戦相手名（学校）' />
                <input type="text" className="registerInput" placeholder='表示名' />
                <button className="registerButton">登録</button>
            </div>
            <hr className="barHr2" />
        </div>
      )
    }
    