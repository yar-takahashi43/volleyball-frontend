import React from 'react'
import "./OpponentList.css"
import { Opponents } from '../../dummyData'
import Opponent from './Opponent'

export default function OpponentList() {
    console.log(Opponents)
  return (
    <div className='bar'>
        <h2 className="title">対戦相手一覧</h2>
        <div className="barWrapper">
            <hr className="barHr1" />
            <div className="opponentList">
                {Opponents.map((opponent) => (
                  <Opponent opponent={opponent} number={opponent.num}/>
                ))}
            </div>
        </div>
            <hr className="barHr2" />
    </div>
  )
}
