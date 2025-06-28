import '../project.css'
import { useContext } from 'react'
import { ThemeContext } from '../App'

export default function About() {
    const { theme } = useContext(ThemeContext)
    const classH1 = 'h1-' + theme;
    const classProjectName = "project-name-"+theme;

    return (
        <div className='project'>
            <div className="project-container" style={{paddingLeft: "15px"}}>
            <h1 className={classH1} style={{marginTop:"40px", paddingRight:"0px"}}>About Me</h1>
            <p style={{marginBottom: "30px", color: 'gray'}}>Creating the tools that help me grow</p>
            <h3 className={classProjectName}>things i'm proud of</h3>
            <div className="project-description">
                <ul>
                    <li>graduated with distinction in software engineering</li>
                    <li>becoming good at swimming</li>
                    <li>trying to be a better version of myself every day</li>
                </ul>
            </div>

            <h3 className={classProjectName} style={{marginTop:"30px"}}>my skills</h3>
            <div className="project-description">
            <ul>
                    <li>Languages: JavaScript (ES6+), Java, Shell Scripting, C, C++, Python</li>
                    <li>Web Technologies: HTML, CSS</li>
                </ul>
            </div>
        </div>
        </div>
    )
}