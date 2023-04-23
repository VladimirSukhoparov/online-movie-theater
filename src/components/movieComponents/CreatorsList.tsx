import React from 'react'
import styles from '../../styles/components/movieComponents/CreatorsList.module.scss'
import Link from 'next/link'

const CreatorsList = () => {
  return (
    <div className={styles.creatorsList}>
        <div className={styles.creatorsList_title}><Link href={''} >Актёры и создатели</Link></div>
        <div className={styles.creatorsList_carousel}>
            Тут будут создатели фильма...
        </div>
    </div>
  )
}

export default CreatorsList