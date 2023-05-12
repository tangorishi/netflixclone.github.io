import { useState, useEffect } from "react";
import Featured from "../../components/browse/featured/Featured";
import Navbar from "../../components/browse/navbar/Navbar";
import Footer from "../../components/home/footer/Footer";
import filmTitle from '../../assets/film_title.jpeg';
import filmBackground from '../../assets/film_bg.jpeg';
import seriesTitle from '../../assets/series_title.jpeg';
import seriesBackground from '../../assets/series_bg.jpeg';
import Row from '../../components/browse/row/Row';
import requests from "../../services/requests";
import Favorites from '../../components/browse/favorites/Favorites'


export default function Browse() {
  const [isActive, setIsActive] = useState('films')

  return (
    <div className="browse_page">

      <Navbar
        setIsActive={setIsActive}
      />

      {isActive === 'films' &&
        <>
          <Featured
            tabTitle='Films - Netflix'
            title={filmTitle}
            featuredPoster={filmBackground}
            overview="A woman who's been alone on a spaceship her whole life becomes enamored with an engineer who suddenly enters her world and upends her universe."
          />

          <Row
            genre='Trending Now'
            fetchUrl={requests.trendingFilm}
          />
          <Row
            genre='Crime'
            fetchUrl={requests.crimeFilm}
          />
          <Row
            genre='Action'
            fetchUrl={requests.actionFilm}
          />
          <Row
            genre='Romance'
            fetchUrl={requests.romanceFilm}
          />
          <Row
            genre='Science Fiction'
            fetchUrl={requests.scienceFictionFilm}
          />
          <Row
            genre='Horror'
            fetchUrl={requests.horrorFilm}
          />
        </>
      }

      {
        isActive === 'series' &&
        <>
          <Featured
            tabTitle='Series - Netflix'
            title={seriesTitle}
            featuredPoster={seriesBackground}
            overview="A highly decorated ex-Marine sniper returns to action to foil an assassination plot targeting the president, but soon finds himself framed for murder."
          />

          <Row
            genre='Trending Now'
            fetchUrl={requests.trendingSeries}
          />
          <Row
            genre='Family'
            fetchUrl={requests.familySeries}
          />
          <Row
            genre='History'
            fetchUrl={requests.historySeries}
          />
          <Row
            genre='Crime'
            fetchUrl={requests.crimeSeries}
          />
          <Row
            genre='Romance'
            fetchUrl={requests.romanceSeries}
          />
          <Row
            genre='comedy'
            fetchUrl={requests.comedySeries}
          />
        </>
      }

      {isActive === 'favorites' &&
        <Favorites
          tabTitle='Favourites - Netflix'
        />
      }

      <Footer />
    </div>
  )
}
