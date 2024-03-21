import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeIcon from '@mui/icons-material/Home';
import "../home/Top.css"

export default function PlayerDetailsTop() {
    return (
        <div className="top">
            <div className='topLeft'>
                <div className="topBack">
                    <ArrowBackIcon className='backIcon'/>
                <span className="iconName">前ページ</span>
                </div>
            </div>
            <div className="topName">
                <span className="name">選手一覧</span>
            </div>
            <div className='topRight'>
                <div className='topForward'>
                    <HomeIcon />
                    <span className='iconName'>TOPへ</span>
                </div>
            </div>
        </div>
      )
    }
    