import React from 'react'
import film from '../../../public/data/example.json'
import styles from '../../styles/components/movieComponents/TrailersMovie.module.scss'
import Link from 'next/link';

const TrailersMovie = (props) => {
    const trailers = film.videos.trailers;
  return (
    <div className={styles.container}>
      
        {!!props.title&&<div className={styles.container_title}><Link href={`/movies/${props.id}/trailers`}>Трейлеры&nbsp;</Link>и доп.материалы</div>}
    <ul className={styles.trailers}>
    {
      trailers.map((el)=>(
        <li key={el.name}>
          <Link href={el.url} target={'_blank'}>
            <img src={'https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/5ec896b4-0f34-4cfb-9df8-b013776615f3/orig'} alt="" />
            {el.name}</Link>
        </li>
      ))
    }
   </ul>
   </div>
  )
}

export default TrailersMovie