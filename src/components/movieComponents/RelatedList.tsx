import React from 'react'
import styles from '../../styles/components/movieComponents/RelatedList.module.scss'
import PosterCard from '../posterComponents/PosterCard'
import posterjson from '../../../public/data/posterListTEMP.json'
import ImageCarousel from '../ImageCarousel';

const POSTER_CARD_SAMPLE = (
  <PosterCard
      link={posterjson.link}
      title={posterjson.title}
      price={posterjson.price}
      image={posterjson.image}
      age={posterjson.age}
      info={posterjson.info}
      name={posterjson.name}
      seasons={posterjson.seasons}
      rating={posterjson.rating}
      progress={posterjson.progress}
      charts={posterjson.charts}
  />
);

const RelatedList = ({film}) => {
    
  return (
    <div className={styles.container}>
      
        <div className={styles.container_title}>{`С фильмом «${film.name}» смотрят`}</div>
       
           <ImageCarousel  items={[
                        POSTER_CARD_SAMPLE,
                        POSTER_CARD_SAMPLE,
                        POSTER_CARD_SAMPLE,
                        POSTER_CARD_SAMPLE,
                        POSTER_CARD_SAMPLE,
                        POSTER_CARD_SAMPLE,
                        POSTER_CARD_SAMPLE,
                        POSTER_CARD_SAMPLE,
                        POSTER_CARD_SAMPLE,
                        POSTER_CARD_SAMPLE,
                        POSTER_CARD_SAMPLE,
                    ]}
                />
        
    </div>
  )
}

export default RelatedList