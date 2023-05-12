import Card from '../card/Card'
import { useState } from 'react'
import { useFetch } from '../../../hooks/useFetch'
import Pending from '../pending/Pending'

export default function Row({ fetchUrl, genre, favorites, setFavorites }) {
  const [url, setUrl] = useState(fetchUrl)
  const { data: videos, isPending, error } = useFetch(url)


  return (
    <div className="list">
      {isPending && <Pending />}
      {error && <div>{error}</div>}
      <span className="list_title">{genre}</span >
      <div className="wrapper">
        <div className="container" >
          {
            videos &&
            videos.map((vid) => (
              <div key={vid.id}>
                <Card
                  poster={vid.poster_path ? `https://image.tmdb.org/t/p/w500${vid.poster_path}` : ''}
                  title={vid.original_title || vid.name}
                  overview={vid.overview}
                  date={vid.release_date || vid.first_air_date}
                />
              </div>
            ))
          }
        </div>
      </div>
    </div >
  )
}