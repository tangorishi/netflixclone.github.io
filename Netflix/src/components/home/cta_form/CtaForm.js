import { HiOutlineChevronRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'

export default function CtaForm() {
  return (
    <form className="cta_form">
      <h3 className='cta_form_title'>Ready to watch? Enter your email to create or restart your membership.</h3>
      <div className="cta_form_lockup">
        <label placeholder='email'>
          <input type="email" placeholder='Email address' />
        </label>
        <div className="cta_submit_btn_container">
          <Link to='signup'>
            <button>
              <span className='cta-btn-txt'>
                Get Started
              </span>
              <span className='chevron-right-arrow'>
                <HiOutlineChevronRight />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </form>
  )
}
