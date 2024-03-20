import React, { useState } from 'react'
import "./Home.css"
import Topbar from '../../components/topbar/Topbar'
import Sidebar from "../../components/sidebar/Sidebar"
import Menu from '../menu/Menu.jsx'
import PlayerList from '../playerList/PlayerList.jsx'
import RegisterOpponent from '../opponent/RegisterOpponent.jsx'
import OpponentList from '../opponent/OpponentList.jsx'
// import Opponent from '../opponent/Opponent.jsx'
import { Opponents } from '../../dummyData'
import Register from '../register/RegisterPlayer.jsx'

export default function Home() {

  const [opponent, setOpponent] = useState(Opponents)

  return (
    <>  
        {/* <Topbar opponent={opponent} key={opponent.id} /> */}
        <div className="homeContainer">
            {/* <Menu /> */}
            {/* <PlayerList /> */}
            <Register />
            {/* <RegisterOpponent/> */}
            {/* <OpponentList/> */}
        </div>
    </>
  )
}