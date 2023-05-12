import background from '../../assets/404_bg.jpeg'
import { AuthContext } from '../../context/AuthContext'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function PageNotFound() {
  const [counter, setCounter] = useState(5)
  const { currentUser } = useContext(AuthContext)

  const navigate = useNavigate()

  const redirectHandler = () => {
    currentUser ? navigate('/browse') : navigate('/login')
  }

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 4000);
    if (counter === 0) {
      redirectHandler()
    }
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div className="PageNotFound">
      <img src={background} alt="Lost in space" />

      <div className="content">
        <div className="404_title">
          <h1>Can't find your way ?</h1>
        </div>
        <div className="404_subtitle">
          <h2>Sorry, we can't find that page.</h2>
          <h3>You will be redirected in {counter}</h3>
        </div>
        <div className="404_btn">
          <button onClick={() => redirectHandler()}>Netflix Home</button>
        </div>
      </div>
    </div>
  )
}
