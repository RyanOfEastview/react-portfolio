import React from 'react'
import selfPic from "../../assets/myPic/MyPic.jpg";

function About() {

    return (
        <section className="my-5" >
            <h1 id="about">About Me</h1>
            <img src={selfPic} className="my-2" alt="self-pic" />
            <div className="my-2">
                <p>
                    My name is Hiu Sum Jaime Yue. I am a fourth-year Computer Systems
                    Engineering student in Carleton University that will gradurate in June 2023.
                    Other than computer architecture and software, I am also interested in the web development. 
                    My future goal is to learn machine learning. 
                </p>
            </div>
        </section>
    )
}

export default About