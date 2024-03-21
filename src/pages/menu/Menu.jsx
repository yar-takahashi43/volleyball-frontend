import { Person, Search,} from '@mui/icons-material'
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import AddCommentIcon from '@mui/icons-material/AddComment';
import React from 'react'
import "./Menu.css"

export default function Menu() {
  return (
    <div className='menubar'>
        <h2 className="title">メニュー</h2>
        <hr className="menubarHr1" />
        <div className="menubarWrapper">
            <ul className="menubarList">
                <li className="menubarListItem">
                    <SportsVolleyballIcon className='menubarIcon'/>
                    <span className="menubarListItemText">新規試合</span>
                </li>
                <li className="menubarListItem">
                    <Search className='menubarIcon'/>
                    <span className="menubarListItemText">試合一覧</span>
                </li>
                <li className="menubarListItem">
                    <PersonAddIcon className='menubarIcon'/>
                    <span className="menubarListItemText">選手登録</span>
                </li>
                <li className="menubarListItem">
                    <Person className='menubarIcon'/>
                    <span className="menubarListItemText">選手一覧</span>
                </li>
                <li className="menubarListItem">
                    <AddCommentIcon className='menubarIcon'/>
                    <span className="menubarListItemText">対戦相手登録</span>
                </li>
                <li className="menubarListItem">
                    <InsertCommentIcon className='menubarIcon'/>
                    <span className="menubarListItemText">対戦相手一覧</span>
                </li>
            </ul>
        </div>
        {/** 横線を入れる */}
        <hr className="menubarHr2" />
    </div>
  )
}
