// import Card from '../card/Card'
// import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
// import { useRef, useState } from 'react'
// import { useFetch } from '../../../hooks/useFetch'
// import Pending from '../pending/Pending'

// export default function Carousel({ fetchUrl, genre }) {
//   const [url, setUrl] = useState(fetchUrl)
//   const { data: videos, isPending, error } = useFetch(url)
//   const [slideIndex, setSlideIndex] = useState(0)
//   const [isMoved, setIsMoved] = useState(false)

//   const listRef = useRef()

//   const arrowClickHandler = (direction) => {
//     setIsMoved(true)
//     let distance = listRef.current.getBoundingClientRect().x - 50

//     if (direction === 'left' && slideIndex > 0) {
//       setSlideIndex(slideIndex - 1)
//       listRef.current.style.transform = `translateX(${230 + distance}px)`
//     }
//     if (direction === 'right' && slideIndex < 5) {
//       setSlideIndex(slideIndex + 1)
//       listRef.current.style.transform = `translateX(${-230 + distance}px)`
//     }
//   }

//   return (
//     <div className="list">
//       {isPending && <Pending />}
//       {error && <div>{error}</div>}
//       < span className="list_title" >{genre}</span >
//       <div className="wrapper">
//         <MdArrowBackIosNew
//           onClick={() => arrowClickHandler('left')}
//           className='sliderArrow left'
//           style={{ display: !isMoved && "none" }}
//         />
//         <div className="container" ref={listRef}>
//           {
//             videos &&
//             videos.map((vid) => (
//               <div key={vid.id}>
//                 <Card
//                   poster={vid.poster_path ? `https://image.tmdb.org/t/p/original${vid.poster_path}` : ''}
//                   title={vid.original_title}
//                   overview={vid.overview}
//                   date={vid.release_date}
//                 />
//               </div>
//             ))
//           }
//         </div>
//         <MdArrowForwardIos
//           onClick={() => arrowClickHandler('right')}
//           className='sliderArrow right'
//         />
//       </div>
//     </div >
//   )
// }