import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  return (
    <section id = "contact" className="container contact-page">
        <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['Get',' ', 'i','n', ' ', 't', 'o', 'u', 'c', 'h']}
                idx={15}
              />
            </h1>
              <h2>
            I’m currently looking for full-time SDE opportunities and my inbox is always open. Whether you have a question or interested in working with me, please reach out to me by clicking the link below!
            </h2>
            <a href = "mailto:ramasamy.h@northeastern.edu" className='flat-button'>
                        Say hi
            </a>
        </div>
    </section>
  )
}

export default Contact;