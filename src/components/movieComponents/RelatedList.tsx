import React from 'react'
import styles from '../../styles/components/movieComponents/RelatedList.module.scss'

const RelatedList = ({film}) => {
    
  return (
    <div className={styles.container}>
        <div className={styles.container_title}>{`С фильмом «${film.name}» смотрят`}</div>
        <div className={styles.container_carousel}>
            Тут должна быть карусель...
        </div>
    </div>
  )
}

export default RelatedList