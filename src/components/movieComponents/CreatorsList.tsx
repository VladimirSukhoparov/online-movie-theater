import React from 'react'
import styles from '../../styles/components/movieComponents/CreatorsList.module.scss'
import Link from 'next/link'
import PersonCard from './PersonCard'
import { useLocale } from "../../hooks/useLocale";


const CreatorsList = ({film}) => {
  const {persons} = film;
  const { creatorsList: translation } = useLocale();

  return (
  
    <div className={styles.creatorsList}>
        <div className={styles.creatorsList_title}><Link href={''} >{translation.title}</Link></div>
        <div className={styles.creatorsList_carousel}>
          {persons.map((el)=>(
            el.profession=='режиссеры' &&
            <PersonCard name={translation.title=="Actors and creators"?el.enName:!!el.name?el.name:el.enName} profession={translation.title=="Актёры и создатели"?el.profession.slice(0,-1):el.enProfession} photo={el.photo} key={el.id} />
          ))}
            {persons.slice(0, 9).map((el)=>(
              <PersonCard name={translation.title=="Actors and creators"?el.enName:!!el.name?el.name:el.enName} profession={translation.title=="Актёры и создатели"?el.profession.slice(0,-1):el.enProfession} photo={el.photo} key={el.id} />
            ))}
            <PersonCard id={film.id} alt = {translation.button}/>
        </div>
    </div>

  )
}

export default CreatorsList