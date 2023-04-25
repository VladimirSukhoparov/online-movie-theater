import React from 'react'
import styles from '../../styles/components/movieComponents/CreatorsList.module.scss'
import Link from 'next/link'
import PersonCard from './PersonCard'


const CreatorsList = ({film}) => {
  const {persons} = film;

  return (
  
    <div className={styles.creatorsList}>
        <div className={styles.creatorsList_title}><Link href={''} >Актёры и создатели</Link></div>
        <div className={styles.creatorsList_carousel}>
          {persons.map((el)=>(
            el.profession=='режиссеры' &&
            <PersonCard name={!!el.name?el.name:el.enName} profession={el.profession.slice(0,-1)} photo={el.photo} key={el.id} />
          ))}
            {persons.slice(0, 9).map((el)=>(
              <PersonCard name={!!el.name?el.name:el.enName} profession={el.profession.slice(0,-1)} photo={el.photo} key={el.id} />
            ))}
            <PersonCard id={film.id} alt = {'Ещё'}/>
        </div>
    </div>

  )
}

export default CreatorsList