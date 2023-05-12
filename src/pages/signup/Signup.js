import { Link } from 'react-router-dom';
import nfLogo from '../../assets/logo_netflix.svg';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase/firebase'
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const { dispatch } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleSignup = (e) => {
    e.preventDefault()

    setLoading(true)

    createUserWithEmailAndPassword(auth, email, password)

      .then((userCredential) => {

        if (userCredential && userCredential.uid) {

        }
        const user = userCredential.user;

        dispatch({ type: 'LOGIN', payload: user })
        navigate('/browse')

      })
      .catch((err) => {
        console.log(err.message);
        setError(err.code)
        // output password length wrong
      })
    setLoading(false)
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
              Sign Up
            </h1>
            <div className="hybrid_form">
              <form onSubmit={handleSignup}>
                <div className="form_input">
                  <input
                    type='email'
                    name="email"
                    placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {error}
                </div>
                <div className="form_input">
                  <input
                    name="password"
                    type="password"
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                  />

                </div>
                <div className="form_input">
                  <input
                    name="password"
                    type="password"
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button disabled={loading} className="hybrid_auth_button">Sign In</button>
              </form>
            </div>
            <div className="hybrid_auth_social">
              <div className="hybrid_auth_action">
                Already a member?
                <Link to='/login'> Sign In</Link>
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