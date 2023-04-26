import React, { useState } from "react";
import styles from "../styles/components/header/Header.module.scss";
import { useLocale } from "../hooks/useLocale";
import Link from "next/link";
import LocaleSwitcher from "./LocaleSwitcher";
import Button from "./reusedСomponents/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const translation = useLocale();
  const [focus, setFocus] = useState(0);
  const [sideScroll, setSideScroll] = useState(0);
  const [sideHover, setSideHover] = useState(0);

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

  const dpropdownMenu = (num) => {
    setFocus(num);
    setSideScroll(0);
    setSideHover(0)
  };

  const scroll = (num) => {
    setSideScroll(num * 27);
    setSideHover(num)
  };

  return (
    <div className={styles.header} onMouseLeave={() => dpropdownMenu(0)} >
      {/* onMouseLeave={() => dpropdownMenu(0)} */}
      <div
        className={
          focus === 0 || focus === 1
            ? styles.header_body
            : styles.header_link_container
        }
      >
        <div className={styles.header_content}>
          <div className={styles.header_content_first}>
            <img
              src="https://solea-parent.dfs.ivi.ru/picture/ea003d,ffffff/reposition_iviLogoPlateRounded.svg"
              alt="IVI"
            />
            <nav>
              <ul>
                {translation.header.map((el, index) => {
                  return (
                    <Link
                      href={el.path}
                      key={translation.header.indexOf(el)}
                      onMouseEnter={() => dpropdownMenu(index)}
                    >
                      <li>{el.text}</li>
                    </Link>
                  );
                })}
              </ul>
            </nav>
          </div>
          <div className={styles.header_content_second}>
            <LocaleSwitcher></LocaleSwitcher>
            <Button
              classN="header_subscribe"
              type="button"
              children={translation.header_subscribe}
            />
            <Link href="?ivi_search">Поиск</Link>
            <Button
              classN="header_notification"
              type="button"
              children={<FontAwesomeIcon icon={faBell} />}
            />
            <Button
              classN="header_login"
              type="button"
              children={<FontAwesomeIcon icon={faUser} />}
            />
          </div>
        </div>
        {focus > 1 ? <div className={styles.header_dropdown_container}>
          <div className={styles.header_dropdown_genres}>
            <div className={styles.header_title}>
            {translation.welcome === "добро пожаловать" ? "Жанры" : "Genres"}
            </div>
            <ul>
              {translation.header_links_content[focus - 2].genres.map((el) => {
                  return (
                    <li key={el.text}>
                      {el.text}
                    </li>
                  )
                })}
            </ul>
          </div>
          <div className={styles.header_dropdown_countriesandyears}>
            <div className={styles.header_country}>
            <div className={styles.header_title}>
              {translation.welcome === "добро пожаловать" ? "Страны" : "Countries"}
              </div>
              <ul>
              {translation.header_links_content[focus - 2].countries.map((el) => {
                  return (
                    <li key={el.text}>
                      {el.text}
                    </li>
                  )
                })}
            </ul>
            </div>
            <div className={styles.header_years}>
            <div className={styles.header_title}>
            {translation.welcome === "добро пожаловать" ? "Годы" : "Years"}
            </div>
            <ul>
              {translation.header_links_content[focus - 2].years.map((el) => {
                  return (
                    <li key={el.text}>
                      {el.text}
                    </li>
                  )
                })}
            </ul>
            </div>
          </div>
          <div className={styles.header_dropdown_sidecontent}>
            <div className={styles.header_sidecontent_recomandation}>
              <div className={styles.header_recomandation_scroll}>
                <div className={styles.header_scroll} style={{margin: `${sideScroll}px 0px 0px 0px`}} ></div>
              </div>
              <ul>
                {translation.header_links_content[focus - 2].recomandation.map((el, index) => {
                  if(sideHover === index) {
                    return (
                      <li key={el.text} onMouseEnter={() => scroll(index)} style={{color: "white"}}>
                        {el.text}
                      </li>
                    )
                  } else {
                    return (
                      <li key={el.text} onMouseEnter={() => scroll(index)}>
                        {el.text}
                      </li>
                    )
                  }
                })}
              </ul>
            </div>
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
                </div>
                <Link href="https://www.ivi.ru/pages/tvsmart/">
                    ds
                </Link>
              </div>
            </div>
          </div>
        </div>
        : null 
        }
      </div>
    </div>
  );
};

export default Header;
