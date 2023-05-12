const API = '5110a18bf289e8466990eeaaf03df978'

const requests =
{
  trendingFilm: `/trending/movie/day?api_key=${API}`,
  actionFilm: `/discover/movie?api_key=${API}&with_genres=28`,
  crimeFilm: `/discover/movie?api_key=${API}&with_genres=80`,
  scienceFictionFilm: `/discover/movie?api_key=${API}&with_genres=878`,
  romanceFilm: `/discover/movie?api_key=${API}&with_genres=10749`,
  horrorFilm: `/discover/movie?api_key=${API}&with_genres=27`,

  trendingSeries: `/trending/tv/day?api_key=${API}`,
  familySeries: `/discover/tv?api_key=${API}&with_genres=10751`,
  historySeries: `/discover/tv?api_key=${API}&with_genres=36`,
  crimeSeries: `/discover/tv?api_key=${API}&with_genres=80`,
  romanceSeries: `/discover/tv?api_key=${API}&with_genres=10749`,
  comedySeries: `/discover/tv?api_key=${API}&with_genres=35`,
}


export default requests