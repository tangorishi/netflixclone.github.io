import { useState, useEffect } from 'react'
import Card from '../card/Card'
import { useTitle } from '../../../hooks/useTitle'
import Pending from '../pending/Pending'
import { useContext } from 'react'
import { useCollection } from '../../../hooks/useCollection'
import { AuthContext } from '../../../context/AuthContext';

export default function Favorites({ tabTitle }) {
  const { currentUser } = useContext(AuthContext)
  const { documents: favorites, isPending } = useCollection(`users/${currentUser.uid}/favorites`)
  useTitle(tabTitle)

  return (
    <div className="favorites_wrapper">
      {isPending && <Pending />}
      <div className="favorites_title">
        <h2>My List</h2>
      </div>
      <div className="favorites_content">
        {favorites &&
          favorites.map((favorite) => (
            <div key={favorite.id} className="img_container">
              <Card
                id={favorite.id}
                poster={favorite.poster ? `https://image.tmdb.org/t/p/w500${favorite.poster}` : ''}
                title={favorite.title}
                date={favorite.date}
                overview={favorite.overview} >
              </Card >
            </div >
          ))
        }
      </div >
    </div >

  )
}
