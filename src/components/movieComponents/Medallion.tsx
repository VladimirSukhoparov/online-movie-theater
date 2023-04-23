import React from 'react'
import styles from '../../styles/components/movieComponents/Medallion.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const Medallion = (props) => {
  return (
    <>
       <Link href={''} className={styles.medallion}>
        <div className={styles.medallion_box}>
          <div className={styles.medallion_image}>
          {!!props.src&&<img src={props.src} alt='' width='100' height='100' />} 
            {!!props.rating&&props.rating}
            {/* <p className={styles.medallion_rating}>{props.rating}</p> */}
            </div>
        </div>
        <div className={styles.medallion_title}>
          <p>{props.name}</p>
          {!!props.name2 && <p>{props.name2}</p>}
        </div>
        </Link>
    </>
  )
}

export default Medallion