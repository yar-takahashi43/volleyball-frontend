import React from 'react'
import "./PlayerList.css"
import { Players } from '../../dummyData'
import Player from '../../components/player/Player'

export default function PlayerList() {
  console.log(Players)
  return (
    <div className='bar'>
        <h2 className="title">選手一覧</h2>
        <div className="barWrapper">
            <hr className="barHr1" />
            <div className="playerList">
                {Players.map((player) => (
                  <Player player={player} number={player.num}/>
                ))}
            </div>
        </div>
            <hr className="barHr2" />
    </div>
  )
}
