import React from 'react';
import '../styles/header.css';
//image imports
import hamburger from '../assets/hamburger.png';
import hondalogo from '../assets/hondalogo.png';
import profiletop from '../assets/profiletop.png';
export default function Header(){
    return(
        <div className="header">
          <img src={hamburger} alt="" className="hamburger"/>
          <img src={hondalogo} alt="" className="hondalogo"/>
          <img src={profiletop} alt="" className="profiletop"/>
        </div>
    )
}