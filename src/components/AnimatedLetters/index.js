import './index.scss'

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${Math.floor(Math.random() * (16)) + 1}`}>
          {char}
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters
