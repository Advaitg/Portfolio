import '../home.css'
import { useContext } from 'react'
import { ThemeContext } from '../App'
//import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Home() {
     const { theme } = useContext(ThemeContext)
     const classNameBody = 'body-' + theme;
     const classNameHeroSection = "hero-section-" + theme;
     const classNameHeroDescription = "hero-description-" + theme;
     const classHighlight = "highlight-" + theme;
     const classImageOutline = "image-outline-" + theme;
     console.log(theme)

    return (
        <section className={classNameBody}>
            <section className={classNameHeroSection}>
            <div className='hero-left'>
            <h1 className="hero-name">Advait Ghagare</h1>
                <p className={classNameHeroDescription}>
                <span className={classHighlight}>Frontend Developer</span>,  with 4.5 years of experience, including 3.5 years working with React.js. Skilled in building, enhancing, and maintaining responsive user interfaces using React, Redux, and modern JavaScript. Experienced in integrating APIs, handling routing with React Router, and improving existing UI features.
                </p>
                <button className="contact-button">Contact Me</button>
            </div>

            <img src='src\assets\curved_arrow.png'alt="arrow" style={{width: "100px"}}></img>
            <div className="hero-right">
                <div className="image-wrapper">
                <img
                    src="/src/assets/person2.png"
                    alt="Advait Ghagare"
                    className="profile-img"
                />
                <div className={classImageOutline}></div>
                </div>

                {/* <div className="social-icons">
                <FaInstagram />
                <FaLinkedin />
                <FaGithub />
                </div>  */}
            </div>
        </section>
        </section>
    )
}