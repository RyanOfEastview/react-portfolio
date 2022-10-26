import React from 'react'

function Portfolio() {
    const projects = [
        {name: 'Music Finder', link: "www.abc.com", imageName:"liveMusicFinderPreview"},
        {name: 'Movies Review', link: "www.abc.com", imageName:"MoviesReviewPreview"},
        {name: 'Weather Dashboard', link: "www.abc.com", imageName:"weatherDashboardPreview"},
        {name: 'Work Day Schedule', link: "www.abc.com", imageName:"workDaySchedulerPreview"},
        {name: 'NoteTaker', link: "www.abc.com", imageName:"noteTakerPreview"},
        {name: 'Tech Blog', link: "www.abc.com", imageName:"TechBlogPreview"},
        

    ]
    return (
        <div className="my-5" >
            <h1>Portfolio</h1>
            <section>
                <div>
                    <div className="flex-row">
                        {projects.map((project, i) => (
                            <div>
                                <img
                                src={require(`../../assets/images/${project.imageName}.jpg`)}//${category}/${i}
                                alt={project.name}
                                className="img-thumbnail mx-1"
                             //key={project.name}//<img src="./assets/images/liveMusicFinderPreview.jpg" alt="Live Music Finder Preview">
                            />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Portfolio