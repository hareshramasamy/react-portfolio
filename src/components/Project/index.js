import Health360 from '../../assets/images/health360.png'
import Eduverse from '../../assets/images/eduverse.png'
import Ams from '../../assets/images/airlinemanagementsystem.png'
import Gtw from '../../assets/images/globetravelwebsite.png'
import Bb from '../../assets/images/blogbytes.png'
import Cc from '../../assets/images/canvascalculator.png'
import Sdn from '../../assets/images/stablediffusionnaruto.png'
import Sg from '../../assets/images/sqlgenerator.png'
import Ls from '../../assets/images/librarystore.png'
import Ll from '../../assets/images/liftlog.png'
import Mmis from '../../assets/images/mmismini.png'
import Sm from '../../assets/images/servicemarketplace.png'
import Aai from '../../assets/images/avatarai.png'
import Dra from '../../assets/images/deepresearchapp.png'
import Ms from '../../assets/images/medischedule.png'
import './index.scss';
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faExternalLink} from '@fortawesome/free-solid-svg-icons'

export default function Project(props) {
    let imgSrc
    if (props.coverImg === "eduverse.png") {
        imgSrc = Eduverse
    } else if (props.coverImg === "health360.png") {
        imgSrc = Health360
    } else if (props.coverImg === "airlinemanagementsystem.png") {
        imgSrc = Ams
    } else if (props.coverImg === "globetravelwebsite.png") {
        imgSrc = Gtw
    } else if (props.coverImg === "blogbytes.png") {
        imgSrc = Bb
    } else if (props.coverImg === "canvascalculator.png") {
        imgSrc = Cc
    } else if (props.coverImg === "stablediffusionnaruto.png") {
        imgSrc = Sdn
    } else if (props.coverImg === "sqlgenerator.png") {
        imgSrc = Sg
    } else if (props.coverImg === "librarystore.png") {
        imgSrc = Ls
    } else if (props.coverImg === "liftlog.png") {
        imgSrc = Ll
    } else if (props.coverImg === "mmismini.png") {
        imgSrc = Mmis
    } else if (props.coverImg === "servicemarketplace.png") {
        imgSrc = Sm
    } else if (props.coverImg === "avatarai.png") {
        imgSrc = Aai
    } else if (props.coverImg === "deepresearchapp.png") {
        imgSrc = Dra
    } else if (props.coverImg === "medischedule.png") {
        imgSrc = Ms
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