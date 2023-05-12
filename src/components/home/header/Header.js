import nfLogo from '../../../assets/logo_netflix.svg'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='home_header_wrapper'>
      <div className="home_header">
        <img
          src={nfLogo}
          alt="Netflix logo"
          className='svg-nfLogo'
        />
        <Link to='Login' className='authLinks'>Sign In</Link>
      </div>
    </header>
  )
}
