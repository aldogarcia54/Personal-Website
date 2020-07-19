import React from 'react'
import Headshot from '../assets/Headshot.jpg'

function AboutMe(){
    return (

        <div>
            <div className="header">
                <img className="headshot" src={Headshot} alt=""/>
                <div className="info">
                    <h1>Aldo Garcia</h1>
                    <h2>hirealdogarcia@gmail.com</h2>
                </div>
            </div>
            <div className="about-me">
                <h1>About Me</h1>
                <p>
                    I am a recent graduate from Texas State University with a Bachelors of Science in Computer Science 
                    looking for my first full time role as a Software Engineer.
                    I have knowledge of Python, C++, Swift, C#, Cuda, and I am familiar with a few other languages. 
                    My skills and experience include mobile app development, cpu and gpu parallel programming, and windows desktop application development.
                    I enjoy building software that will improve people’s life and is easy to use. 
                    I am a highly motivated, I love learning new technologies and software development practices and methodologies, 
                    and I enjoy collaborating with others, but I thrive working alone as well. 
            </p>
            </div>
        </div>
    )
}

export default AboutMe