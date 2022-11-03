import React from "react";
import selfPic from "../../assets/images/profile.jpg";

function About() {
  return (
    <section className="my-5">
      <h1 id="about">About Me</h1>
      <img src={selfPic} className="my-2" id="about-pic" alt="self-pic" />
      <div className="my-2">
        <p>
          I'm an aspiring web developer with ten years of administrative
          experience in the Federal Government. I have a certification in
          Business Data Analysis from Cornell University and I am currently
          working on a Web Development Coding Bootcamp with Carleton University.
          I have ten years of administrative experience with the Federal
          Government in an an Emergency Management and Business Continuity
          Officer role.
        </p>

        <p>
          I am searching for an opportunity as a full-stack web developer where
          I can use my recently obtained skills to bring positive change to a
          company that I deem a good fit for my values and skillset.
        </p>
      </div>
    </section>
  );
}

export default About;
