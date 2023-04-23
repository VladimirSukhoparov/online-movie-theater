import React from 'react'
import styles from '../../styles/pages/[id].module.scss'
import CardMovie from '../../components/movieComponents/CardMovie'
import testFilm from '../../../public/data/testFilm.json'
import RelatedList from '../../components/movieComponents/RelatedList'
import CreatorsList from '../../components/movieComponents/CreatorsList'
import AllDevices from '../../components/movieComponents/AllDevices'

const Movie = () => {
  return (
   <div className={styles.movie}>
   <CardMovie testFilm={testFilm[0]}/>
   <RelatedList film = {testFilm[0]} />
   <CreatorsList />
   <AllDevices film = {testFilm[0]}/>
   </div>
  )
}

export default Movie