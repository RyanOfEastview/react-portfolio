import React from 'react'

function Portfolio() {
    const projects = [
        {name: 'Code Quiz', link: "www.abc.com"},
        {},
        {}
    ]
    return (
        <div className="my-5" >
            <h1>Portfolio</h1>
            <section>
                <div>
                    <div className="flex-row">
                        {projects.map((project, i) => (
                            <img
                                src={require(`../../assets/images/liveMusicFinderPreview.jpg`)}//${category}/${i}
                                alt={project.name}
                                className="img-thumbnail mx-1"
                             //key={project.name}//<img src="./assets/images/liveMusicFinderPreview.jpg" alt="Live Music Finder Preview">
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Portfolio