import '../project.css'
import { useContext } from 'react'
import { ThemeContext } from '../App'

export default function Project(props) {
    const { theme } = useContext(ThemeContext)
    const classProjectName = "project-name-"+theme;
    return (
        <article className="project-entry">
            <h3 className={classProjectName}>{props.name}</h3>
            <div className="project-description">{props.description}</div>
            <div className="project-skills">Built with: {props.skills}</div>
            <div className="project-code">
                <a href={props.link}>Code</a>
            </div>            
        </article>
    )
}