import { FaCaretDown, FaSearch } from 'react-icons/fa'
import { BsFillBellFill } from 'react-icons/bs'
import { useState } from "react";
import Netflix from '../../../assets/logo_netflix.svg'
import Avatar from '../../../assets/users/1.png'
import { AiOutlineUser } from 'react-icons/ai'
import { BiHelpCircle } from 'react-icons/bi'
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom'
import { auth } from '../../../firebase/firebase'


export default function Navbar({ setIsActive }) {
  const [isScrolled, setIsScrolled] = useState(false)
  // const [searchQuery, setSearchQuery] = useState(false)

  const { currentUser } = useContext(AuthContext)
  const { dispatch } = useContext(AuthContext)


  const userName = currentUser.email.split('@')[0]
  const navigate = useNavigate();

  const signOutHandler = () => {
    signOut(auth).then(() => {
      dispatch({ type: 'LOGOUT', currentUser: null })
      console.log('Sign-out successful.');
      navigate('/home');

    }).catch((error) => {
      console.log(`An error happened.${error}`);
    });
  }

  const navScrollHandler = () => {
    window.scrollY >= 70 ? setIsScrolled(true) : setIsScrolled(false)
  }
  window.addEventListener('scroll', navScrollHandler)

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left_navbar">
          <img
            src={Netflix}
            alt="Netflix logo red text"
          />
          <div className="monitor_links">
            <span onClick={() => setIsActive('films')}>
              Films
            </span>
            <span onClick={() => setIsActive('series')}>
              Series
            </span>
            <span onClick={() => setIsActive('favorites')}>
              My List
            </span>
          </div>
          <div className="browse_links">
            <span>
              Browse
              <FaCaretDown />
            </span>
            <div className="media_options">
              <span onClick={() => setIsActive('films')}>
                Films
              </span>
              <span onClick={() => setIsActive('series')}>
                Series
              </span>
              <span onClick={() => setIsActive('favorites')}>
                My List
              </span>
            </div>
          </div>
        </div>
        <div className="right_navbar">
          {/* <input*/}
          <FaSearch
            // onClick={() => setSearchQuery(true)}
            className="icon search_icon" />
          <span className='mobile_responsive_up'>Children</span>
          <BsFillBellFill className="icon" />
          <div className="profile">
            <img
              src={Avatar}
              alt="User Avatar"
            />
            <FaCaretDown className="icon mobile_responsive_up" />
            <div className="options">
              <span>
                <img src={Avatar} alt="User Avatar" />
                {userName}
              </span>
              <span>
                <AiOutlineUser className="icon" />
                Account
              </span>
              <span>
                <BiHelpCircle className="icon" />
                Help Center
              </span>
              <span onClick={() => signOutHandler()}>Sign out of Netflix</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

