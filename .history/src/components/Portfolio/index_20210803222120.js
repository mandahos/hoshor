import React from 'react';

function Portfolio({ projects }) {
    return(
        <section>
            {projects.map((project) => (
                <div>
                    <span>{project.name}</span>
                    <img
                    src={require(`../../assets/images/${project.image}`).default}
                    alt={project.name}
                    className="img"
                    />
                <div>
                    <p>{project.description}</p>
                    <a href={project.github}>
                        
                    </a>
                    <a href={project.url}>

                    </a>
                </div>
                </div>
            ) )}
            <div>
                
            </div>
        </section>
    )
}

export default Portfolio;