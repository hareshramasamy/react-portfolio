import Health360 from '../../assets/images/health360.png'
import Ams from '../../assets/images/airlinemanagementsystem.png'
import Gtw from '../../assets/images/globetravelwebsite.png'
import Bb from '../../assets/images/blogbytes.png'
import Cc from '../../assets/images/canvascalculator.png'
import './index.scss';
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faExternalLink} from '@fortawesome/free-solid-svg-icons'

export default function Project(props) {
    let imgSrc
    if (props.coverImg === "health360.png") {
        imgSrc = Health360
    } else if (props.coverImg === "airlinemanagementsystem.png") {
        imgSrc = Ams
    } else if (props.coverImg === "globetravelwebsite.png") {
        imgSrc = Gtw
    } else if (props.coverImg === "blogbytes.png") {
        imgSrc = Bb
    } else if (props.coverImg === "canvascalculator.png") {
        imgSrc = Cc
    }

    return (
        <a className="project" href = {`${props.deployed ? props.link : props.github}`} target="_blank" rel="noreferrer">
            <img 
                src={imgSrc} 
                className="project--image" 
                alt={`${props.alt}`}
            />
            <div className = "project-text-container">
                <div className="project-title-container">
                    <h2 className="project--title">{props.title}</h2>
                    <div className = "project--icons">
                        <a href = {`${props.github}`} target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faGithub} color="#000000" size='xl'/>
                        </a> {
                            props.deployed &&
                            <a href = {`${props.link}`} target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faExternalLink} color="#000000" size ='xl'/>
                        </a>
                        }
                    </div>
                </div>
                <p className="project--description">
                    {props.description}
                </p>
            </div>
            <ul className='tools--list'>
                    {props.tools.map(
                        item => {
                        return (
                            <li>
                                {item}
                            </li>
                        )
                        }
                    )}
            </ul>
        </a>
    )
}