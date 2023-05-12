import { useState } from 'react'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { BsPlayFill } from 'react-icons/bs'
import { useTitle } from '../../../hooks/useTitle'
import Modal from '../modal/Modal'

export default function Featured({ title, overview, featuredPoster, tabTitle }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  useTitle(tabTitle)
  console.log(title);
  return (
    <div className="featured_background">
      <img src={featuredPoster} alt={overview} />
      <div className="info">
        <img
          src={title}
          alt={overview}
        />
        <span className="desc">
          {overview}
        </span>
        <div className="buttons">
          <button className="play">
            <BsPlayFill />
            <span>Play</span>
          </button>
          <button onClick={() => setIsModalOpen(true)} className="more">
            <AiOutlineInfoCircle />
            <span>More Info</span>
          </button>
        </div>
      </div>
      {
        isModalOpen &&
        <Modal
          setIsModalOpen={setIsModalOpen}
          isModalOpen={isModalOpen}
          poster={featuredPoster}
          // title={title}
          // date={date}
          overview={overview}
        />

      }
    </div>
  )
}
