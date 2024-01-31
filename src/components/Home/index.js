import {Link} from 'react-router-dom'
import './index.scss'
import { useEffect, useState } from 'react'
import Haresh from '../../assets/images/haresh.jpg'
import AnimatedLetters from '../AnimatedLetters'
import {faHourglass3} from '@fortawesome/free-solid-svg-icons'
import Sidebar from '../Sidebar'
import About from '../About'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const nameArray = [' ','H', 'a', 'r', 'e', 's', 'h', ' ', 'R', 'a', 'm', 'a', 's', 'a', 'm', 'y']

    return (
        
        <div>
            <div className="container home-page">
            <div className = "text-zone">
                <img className = "haresh-img" src = {Haresh} alt="haresh"></img>
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>

                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={nameArray}
                    idx={15}
                    />
                    <br />
                </h1>
                <h2>
                a passionate Software Engineering Systems graduate student at Northeastern University, fueled by my love for coding and drive to innovate.                </h2>
                <Link to = "/about" className='flat-button'>ABOUT ME</Link>
            </div>
        </div>
        </div>
        
    );
}

export default Home