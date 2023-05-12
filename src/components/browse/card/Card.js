// import { BsPlayFill } from 'react-icons/bs'
// import { RiCheckboxCircleLine, RiCloseCircleLine } from 'react-icons/ri'
// import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'
import { useState, useEffect } from 'react'
import Modal from '../modal/Modal'

export default function Card({ poster, title, date, overview, id }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    isModalOpen ?
      document.body.style.overflow = 'hidden'
      :
      document.body.style.overflow = 'visible'
  }, [isModalOpen]);

  return (
    <>
      {
        isModalOpen &&
        <Modal
          setIsModalOpen={setIsModalOpen}
          isModalOpen={isModalOpen}
          id={id}
          poster={poster}
          title={title}
          date={date}
          overview={overview}
        />
      }
      <div className="card">
        <img
          onClick={() => setIsModalOpen(true)}
          className="card_img"
          src={poster}
          alt={title}
        />
        {/* <div className="card_info">
        <BsPlayFill />
        <RiCheckboxCircleLine />
        <AiOutlineDislike />
        <AiOutlineLike />
        <div className="card_info_top">
          <span>{title}</span>
          <div className='release_date'></div>
          <span>{date.split('-')[0]}</span>
        </div>
        <div className="overview">
          {overview}
        </div> */}
      </div>
    </>
  )
}
