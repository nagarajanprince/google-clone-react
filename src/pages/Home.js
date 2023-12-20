import React from 'react'
import { Link } from 'react-router-dom'

import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import './Home.css'
import Search from './Search';

export default function Home() {
  return (
    <div className='home'>
      <div className='home_header'>
        <div className='home_headerLeft'>
            <Link to='/about'>About</Link>
            <Link to='/store'>Store</Link>
        </div>
        <div className='home_headerRight'>
            <Link to='/gmail'>Gmail</Link>
            <Link to='/images'>Images</Link>
            <AppsIcon />
            <AccountCircleIcon/>
        </div>
      </div>
      <div className='home_body'>
          <img src=' https://www.google.com/logos/doodles/2020/stay-and-play-at-home-with-popular-past-google-doodles-loteria-2019-6753651837108772.2-2xa.gif' alt="Google Img"/>
        <div className='home_inputContainer'>
          <Search/>
        </div>
      </div>
    </div>
  )
}
