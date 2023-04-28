import React from 'react';
import styles from "../../styles/components/header/Header.module.scss"
import Link from 'next/link';
import { useLocale } from '../../hooks/useLocale';

const scrollImages = [
    [
      {
        src: "https://thumbs.dfs.ivi.ru/storage31/contents/1/a/898e30c389b8323a844d3b93ee1b47.jpg/256x144//?q=85",
        url: "watch/151784"
      },
      {
        src: "https://thumbs.dfs.ivi.ru/storage31/contents/1/a/898e30c389b8323a844d3b93ee1b47.jpg/256x144//?q=85",
        url: "watch/151684"
      },
      {
        src: "https://thumbs.dfs.ivi.ru/storage31/contents/1/a/898e30c389b8323a844d3b93ee1b47.jpg/256x144//?q=85",
        url: "watch/151884"
      },
      {
        src: "https://thumbs.dfs.ivi.ru/storage31/contents/1/a/898e30c389b8323a844d3b93ee1b47.jpg/256x144//?q=85",
        url: "watch/152884"
      },
      {
        src: "https://thumbs.dfs.ivi.ru/storage31/contents/1/a/898e30c389b8323a844d3b93ee1b47.jpg/256x144//?q=85",
        url: "watch/151885"
      },
      {
        src: "https://thumbs.dfs.ivi.ru/storage31/contents/1/a/898e30c389b8323a844d3b93ee1b47.jpg/256x144//?q=85",
        url: "watch/151886"
      },
      {
        src: "https://thumbs.dfs.ivi.ru/storage31/contents/1/a/898e30c389b8323a844d3b93ee1b47.jpg/256x144//?q=85",
        url: "watch/151887"
      },
    ],
    [
      {
        src: "https://thumbs.dfs.ivi.ru/storage31/contents/1/a/898e30c389b8323a844d3b93ee1b47.jpg/256x144//?q=85",
        url: "watch/151888"
      },
      {
        src: "https://thumbs.dfs.ivi.ru/storage31/contents/1/a/898e30c389b8323a844d3b93ee1b47.jpg/256x144//?q=85",
        url: "watch/151889"
      },
      {
        src: "https://thumbs.dfs.ivi.ru/storage31/contents/1/a/898e30c389b8323a844d3b93ee1b47.jpg/256x144//?q=85",
        url: "watch/151880"
      },
      {
        src: "https://thumbs.dfs.ivi.ru/storage31/contents/1/a/898e30c389b8323a844d3b93ee1b47.jpg/256x144//?q=85",
        url: "watch/151814"
      },
      {
        src: "https://thumbs.dfs.ivi.ru/storage31/contents/1/a/898e30c389b8323a844d3b93ee1b47.jpg/256x144//?q=85",
        url: "watch/151824"
      },
      {
        src: "https://thumbs.dfs.ivi.ru/storage31/contents/1/a/898e30c389b8323a844d3b93ee1b47.jpg/256x144//?q=85",
        url: "watch/151834"
      },
      {
        src: "https://thumbs.dfs.ivi.ru/storage31/contents/1/a/898e30c389b8323a844d3b93ee1b47.jpg/256x144//?q=85",
        url: "watch/151844"
      },
    ],
    [
      {
        src: "https://thumbs.dfs.ivi.ru/storage31/contents/1/a/898e30c389b8323a844d3b93ee1b47.jpg/256x144//?q=85",
        url: "watch/121884"
      },
      {
        src: "https://thumbs.dfs.ivi.ru/storage31/contents/1/a/898e30c389b8323a844d3b93ee1b47.jpg/256x144//?q=85",
        url: "watch/131884"
      },
      {
        src: "https://thumbs.dfs.ivi.ru/storage31/contents/1/a/898e30c389b8323a844d3b93ee1b47.jpg/256x144//?q=85",
        url: "watch/141884"
      },
      {
        src: "https://thumbs.dfs.ivi.ru/storage31/contents/1/a/898e30c389b8323a844d3b93ee1b47.jpg/256x144//?q=85",
        url: "watch/161884"
      },
      {
        src: "https://thumbs.dfs.ivi.ru/storage31/contents/1/a/898e30c389b8323a844d3b93ee1b47.jpg/256x144//?q=85",
        url: "watch/171884"
      },
      {
        src: "https://thumbs.dfs.ivi.ru/storage31/contents/1/a/898e30c389b8323a844d3b93ee1b47.jpg/256x144//?q=85",
        url: "watch/181884"
      },
      {
        src: "https://thumbs.dfs.ivi.ru/storage31/contents/1/a/898e30c389b8323a844d3b93ee1b47.jpg/256x144//?q=85",
        url: "watch/151234"
      },
    ],
  ]

const SubscribeContainer = () => {
  const translation = useLocale();
    return (
        <div className={styles.header_dropdown_sidecontent}>
            <div className={styles.header_sidecontent_subscribe}>
              <div className={styles.header_subscribe_ivi}>
                <div className={styles.subscribe_left_fade}>
                </div>
                <div className={styles.subscribe_right_fade}>
                </div>
                <div className={styles.header_subscribe_posters}>
                  <div className={styles.posters_container}>
                  <div className={styles.posters_contant}>
                    {scrollImages[0].map((el) => {
                      return (
                        <img src={el.src} alt="" key={el.url}/>
                      )
                    })}
                  </div>
                  <div className={styles.posters_contant_second}>
                    {scrollImages[1].map((el) => {
                      return (
                        <img src={el.src} alt="" key={el.url}/>
                      )
                    })}
                  </div>
                  <div className={styles.posters_contant}>
                    {scrollImages[2].map((el) => {
                      return (
                        <img src={el.src} alt="" key={el.url}/>
                      )
                    })}
                  </div>
                  </div> 
                  <div className={styles.posters_button}>
                    <img src="https://ruvod.com/wp-content/uploads/2022/09/Default.png" alt="" />
                    <div className={styles.posters_button_text}>
                    <span>
                      {translation.welcome === "добро пожаловать" ? "Подписка Иви" : "Subscribe Ivi"}
                    </span>
                    <p>
                    {translation.welcome === "добро пожаловать" ? "От 199 ₽ за месяц" : "199 ₽ per month"}
                    </p>
                    </div>
                  </div>
                </div>
              </div>
              <Link href="https://www.ivi.ru/pages/tvsmart/">
                <img src="https://img.icons8.com/ios-glyphs/30/FFFFFF/tv.png"/>
                {translation.welcome === "добро пожаловать" ? "Смотреть на SmartTV" : "Watch on SmartTV"}
              </Link>
            </div>
          </div>
    );
};

export default SubscribeContainer;