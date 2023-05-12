import { BsPlayFill, BsFillXCircleFill } from 'react-icons/bs'
import {
  AiOutlinePlusCircle,
  AiOutlineCheckCircle
} from 'react-icons/ai'
import {
  doc,
  deleteDoc,
  addDoc,
  collection,
  getDoc,
  setDoc
} from 'firebase/firestore'
import { db } from '../../../firebase/firebase'
import { AuthContext } from '../../../context/AuthContext'
import { useContext, useState, useEffect } from 'react'
import { useCollection } from '../../../hooks/useCollection'

export default function Modal({ poster, featuredPoster, title, date, overview, setIsModalOpen }) {
  const [isFavorite, setIsFavorite] = useState(false)
  const { currentUser } = useContext(AuthContext)
  const { documents: favorites } = useCollection(`users/${currentUser.uid}/favorites`)

  useEffect(() => {
    const currentFavorite = async () => {
      if (favorites)
        favorites.map((favorite) => {
          // filter
          if (favorite.title === title) {
            setIsFavorite(true)
          }
        })
    }

    currentFavorite()

  }, [favorites, title])

  const addDocHandler = async () => {
    const docRef = doc(db, 'users', `${currentUser.uid}`, 'favorites', title);

    await setDoc(docRef, {
      title,
      poster,
      date,
      overview
    })
    console.log(title, 'Added');
  }


  const deleteDocHandler = async () => {
    const docRef = doc(db, 'users', `${currentUser.uid}`, 'favorites', title);

    await deleteDoc(docRef)

    setIsFavorite(false)
    console.log(title, 'Deleted');
  }


  return (
    <div className="modal">
      <div className="modal_content">
        <div
          onClick={() => setIsModalOpen(false)}
          className="modal_close">
          <BsFillXCircleFill />
        </div>
        <div className="modal_img">
          <div className="modal_img_overlay"></div>
          <img className='img' src={poster || featuredPoster} alt={title} />
        </div>
        <div className="modal_info">
          <div className="modal_title">
            <h3>{title}</h3>
            <span>{date}</span>
          </div>
          <div className="modal_overview">
            {overview}
          </div>
          <div className="modal_btns">
            <button className='play'>
              <BsPlayFill />
              <span>Play</span>
            </button>

            {isFavorite ? (
              <span onClick={() => deleteDocHandler()}>
                <AiOutlineCheckCircle className='like' />
              </span>
            ) : (
              <span onClick={() => addDocHandler()} >
                <AiOutlinePlusCircle className='like' />
              </span>
            )}

          </div>
        </div>
      </div>
    </div>
  )
}
