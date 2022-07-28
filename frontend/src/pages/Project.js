import React from 'react'

import { Banner, ProjectList } from '../components/shared'

let projectsObj = require('../../src/data/projects.json')

function Project() {
    return (
        <div id="projects">
            <Banner 
                header="Our Projects"
                body="All of Blueprint's work is open source because we believe in building technology that makes us more open and connected."
                buttonText="View our github"
                externalLink="https://github.com/UofA-Blueprint"
            />

            <ProjectList title="Current Projects" projects={projectsObj.current}/>

            <ProjectList title="Past Projects" projects={projectsObj.past}/>
        </div>
    )
}

export default Project
