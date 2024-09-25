import React from 'react'
import './MainSection.style.css'
import profileImage from "../../Assets/profileImage.png"

const mainSection = () => {
  return (
    <div className='mainSection'>
        <div className='mainSection__contents'>
            <div className='mainSection__contents_left'>
                <h1>Good Morning</h1>
                <p>The sun is shining bright, let's make the most of it!</p>
            </div>
            <div className='mainSection__contents_right'>
                <img src={profileImage} alt="profile" />
            </div>
        </div>
    </div>
  )
}

export default mainSection
