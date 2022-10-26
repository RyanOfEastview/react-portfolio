import React from 'react'

function Resume() {
    const webdevFrontEndProficiency =
        ["HTML", "CSS", "Javascript", "jQuery",
            "responsive design", "React", "Bootstrap"];
    const webdevBackEndProficiency =
        ["APIs", "Node", "Express", "MySQL, Sequelize",
            "MongoDB, Mongoose", "REST", "GraphQL"];
    const generalProgrammingLanguages = ["Python", "Java", "C"];

    return (
        <div className="my-5" >
            <h1>Resume</h1>
            <div className="my-2">
                <p>
                    Here is the link to download my   
                    <a href={require("../../assets/HiuSumJaime_Yue_Resume.pdf")} download="HiuSumJaime_Yue_Resume.pdf">
                        Resume</a>.
                </p>
                <br></br>
                <h2>My proficiencies:</h2>
                <h3>Front-end</h3>
                <ul className="skills-list">
                    {webdevFrontEndProficiency.map((skill) => (
                        <li className="mx-1">
                            {skill}
                        </li>
                    ))}
                </ul>
                <h3>Back-end</h3>
                <ul className="skills-list">
                    {webdevBackEndProficiency.map((skill) => (

                        <li className="mx-1">
                            {skill}
                        </li>
                    ))}
                </ul>
                <h3>General Programming Languages</h3>
                <ul className="skills-list">
                    {generalProgrammingLanguages.map((skill) => (

                        <li className="mx-1">
                            {skill}
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    )
}

export default Resume