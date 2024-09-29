import React, { useEffect, useState } from 'react'
import './MainSection.style.css'
import profileImage from "../../Assets/profileImage.png"

const MainSection = () => {

    const [greetingMessage, setGreetingMessage] = useState('');
    
    const greetingMessageByHour = {
        morning : "Good Morning",
        afternoon : "Good Afternoon",
        evening : "Good Evening"
    }

    const updateGreetingMessage = () => {
        let currentTime = new Date();
        let currentHour = currentTime.getHours();

        console.log("currentTime>>", currentTime);
        console.log("currentHour>>", currentHour);

        if (currentHour >= 0 && currentHour < 5){
            setGreetingMessage('Hello')
        } else if(currentHour < 12){
            setGreetingMessage(greetingMessageByHour.morning)
        } else if (currentHour < 18) {
            setGreetingMessage(greetingMessageByHour.afternoon)
        } else {
            setGreetingMessage(greetingMessageByHour.evening)
        }
    }

    useEffect(()=>{
        updateGreetingMessage()
    },[greetingMessage])

  return (
    <div className='mainSection'>
        <div className='mainSection__container'>
            <div className='mainSection__container_left'>
                <h1>{greetingMessage}!</h1>
                <p>The sun is shining bright, let's make the most of it!</p>
            </div>
            <div className='mainSection__container_right'>
                <img src={profileImage} alt="profile" />
            </div>
        </div>
    </div>
  )
}

export default MainSection
