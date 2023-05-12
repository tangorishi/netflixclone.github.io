import { Link } from 'react-router-dom';
import nfLogo from '../../assets/logo_netflix.svg';
import { auth } from '../../firebase/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)


  const navigate = useNavigate()

  const { dispatch } = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault()

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {

        const user = userCredential.user;

        dispatch({ type: 'LOGIN', payload: user })
        navigate('/browse')
      })
      .catch((error) => {
        console.log(error.message);
        // if (error.code === 'auth/wrong-password')
        // setError('Wronrd')g Passwo
      });

  }


  return (
    <div className="hybrid_wrapper">
      <div className="hybrid_background"></div>
      <div className="hybrid_auth_contents">
        <div className="hybrid_auth_header">
          <Link to="/">
            <img
              src={nfLogo}
              alt="Netflix logo"
              className='svg-nfLogo'></img>
          </Link>
        </div>
        <div className="hybrid_auth_body">
          <div className="hybrid_auth_content">
            <h1 className="hybrid_auth_page_title">
              Sign In
            </h1>
            <div className="hybrid_form">
              <form onSubmit={handleLogin}>
                <div className="form_input">
                  <input
                    type='email'
                    name="email"
                    placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form_input">
                  <input
                    name="password"
                    type="password"
                    placeholder='Password'
                    // value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div>
                  {error && <p>{error}</p>}
                </div>
                <button className="hybrid_auth_button">Sign In</button>
              </form>
            </div>
            <div className="hybrid_auth_social">
              <div className="hybrid_auth_action">
                New to Netflix?
                <Link to='/signup'> Sign up now</Link>
              </div>
              <div className="terms_of_use">
                <p>
                  This page is protected by Google reCAPTCHA to ensure you're not a bot. <span>Learn more</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
