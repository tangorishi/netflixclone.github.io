import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='home_page_card footer_card'>
      <div className="footer_wrapper">
        <p className='footer_top'>Questions? Contact us.</p>

        <div className="footer_row">
          <div className="col">
            <Link to="#">FAQ</Link>
            <Link to="#">Investor Relations</Link>
            <Link to="#">Ways to Watch</Link>
            <Link to="#">Corporate Information</Link>
            <Link to="#">Only on Netflix</Link>
          </div>

          <div className="col">
            <Link to="#">Help Centre</Link>
            <Link to="#">Jobs</Link>
            <Link to="#">Terms of Use</Link>
            <Link to="#">Contact Us</Link>
          </div>

          <div className="col">
            <Link to="#">Account</Link>
            <Link to="#">Redeem gift cards</Link>
            <Link to="#">Privacy</Link>
            <Link to="#">Speed Test</Link>
          </div>

          <div className="col">
            <Link to="#">Media Centre</Link>
            <Link to="#">Buy gift cards</Link>
            <Link to="#">Cookie Preferences</Link>
            <Link to="#">Legal Notices</Link>
          </div>
        </div>

        <p className='footer_country'>Netflix United Kingdom</p>
      </div>
    </footer >
  )
}
