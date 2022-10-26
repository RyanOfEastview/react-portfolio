import React from 'react'
import selfPic from "../../assets/images/MyPic.jpg";

function About() {

    return (
        <section className="my-5" >
            <h1 id="about">About Me</h1>
            <img src={selfPic} className="my-2" id="about-pic" alt="self-pic" />
            <div className="my-2">
                <p>
                    My name is Hiu Sum Jaime Yue. I am a fourth-year Computer Systems
                    Engineering student in Carleton University that will graduate in June 2023.
                    Other than computer architecture and software, I am also interested in Web Development. 
                    My future goal is to learn machine learning and AngularJS. 
                </p>

                <p>
                    I am currently looking for a job that starts in May 2023 or later.
                </p>
            </div>
        </section>
    )
}

export default About