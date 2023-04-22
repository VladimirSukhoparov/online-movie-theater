import React from 'react'
import styles from '../../styles/pages/[id].module.scss'
import CardMovie from '../../components/reusedСomponents/CardMovie'

const Movie = () => {
  return (
   <div className={styles.movie}>
   <CardMovie />
   </div>
  )
}

export default Movie