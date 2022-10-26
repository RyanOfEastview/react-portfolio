import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Portfolio() {
    const projects = [
        { name: 'Music Finder', link: "www.abc.com", imageName: "liveMusicFinderPreview" },
        { name: 'Movies Review', link: "www.abc.com", imageName: "MoviesReviewPreview" },
        { name: 'Weather Dashboard', link: "www.abc.com", imageName: "weatherDashboardPreview" },
        { name: 'Work Day Schedule', link: "www.abc.com", imageName: "workDaySchedulerPreview" },
        { name: 'NoteTaker', link: "www.abc.com", imageName: "noteTakerPreview" },
        { name: 'Tech Blog', link: "www.abc.com", imageName: "TechBlogPreview" },


    ]
    return (
        <div className="my-5" >
            <h1>Portfolio</h1>
            <h3>(Hover to see the application and the GitHub repository)</h3>

            <section>
                <div>
                    <div className="flex-row">
                        {projects.map((project, i) => (
                            <div className="project-link">
                                <img
                                    src={require(`../../assets/images/${project.imageName}.jpg`)}//${category}/${i}
                                    alt={project.name}
                                    className="img-thumbnail mx-1"></img>

                                <div className='centered-text'>
                                    <a>{project.name    }</a>
                                    <a href="https://github.com/HiuSumJaimeYue" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faGithub} size="2x" className="project-icon" />
                                    </a>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Portfolio