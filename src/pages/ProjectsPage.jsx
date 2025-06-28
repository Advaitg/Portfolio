import Project from "./Project";
import '../project.css'
import data from '../data/data'
import { useContext } from 'react'
import { ThemeContext } from '../App'

export default function ProjectsPage() {
    const { theme } = useContext(ThemeContext)
    const classH1 = 'h1-' + theme;

    const dataArray = data
    const projectArray = dataArray.map(function(project){
        return (
            <Project 
                    name={project.name}
                    description={project.description}
                    skills={project.skills}
                    link={project.link}
                />
        )
    })

    return (
        <div className="project">
            <h1 className={classH1} style={{marginTop:"40px", paddingRight:"0px"}}>Projects</h1>
            <p style={{ color: 'gray'}}>Things that I have built and worked on...</p>
            <div className="project-container">
                {projectArray}
            </div>
        </div>

    )
}