import React from 'react'
import styles from '../../styles/components/movieComponents/AllDevices.module.scss'
import Link from 'next/link'
import Button from '../reusedСomponents/Button'

const AllDevices = ({film}) => {
  return (
    <div className={styles.allDevices}>
        <div className={styles.allDevices_link}>
        <p className={styles.allDevices_link_title}>Cмотреть «{film.name}» на всех устройствах</p>
        <p className={styles.allDevices_link_subTitle}>Приложение доступно для скачивания на iOS, Android, SmartTV и приставках</p>
        <Link href={'https://www.ivi.ru/devices'}>
            <Button 
            classN="allDevices"
            type="button"
            children={'Подключить устройства'}
            />
        </Link>
        </div>
        <div className={styles.allDevices_image}>
        <img className={styles.allDevices_image_tv} src="https://www.ivi.ru/images/_ds/watchAllDevices/tv-without-poster.png" alt="Устройства для просмотра Иви" />
        <img className={styles.allDevices_image_tablet} src="https://www.ivi.ru/images/_ds/watchAllDevices/ipad-without-poster.png" alt="Устройства для просмотра Иви"/>
        <img className={styles.allDevices_image_tvPoster} src="https://thumbs.dfs.ivi.ru/storage4/contents/a/4/61feb857b264aa92da1b5c8744ee02.jpg/400x226/" alt="Постер Остров проклятых"/>
        <img className={styles.allDevices_image_tabletPoster} src="https://thumbs.dfs.ivi.ru/storage4/contents/a/4/61feb857b264aa92da1b5c8744ee02.jpg/400x226/" alt="Постер Остров проклятых"/>
        </div>
    </div>
  )
}

export default AllDevices