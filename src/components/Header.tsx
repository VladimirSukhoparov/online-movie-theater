import React, { useState } from "react";
import styles from "../styles/components/header/Header.module.scss";
import { useLocale } from "../hooks/useLocale";
import Link from "next/link";
import LocaleSwitcher from "./LocaleSwitcher";
import Button from "./reusedСomponents/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUser } from "@fortawesome/free-solid-svg-icons";
import SubscribeContainer from "./headerComponents/SubscribeContainer"

const Header = () => {
  const translation = useLocale();
  const [focus, setFocus] = useState(0);
  const [sideScroll, setSideScroll] = useState(0);
  const [sideHover, setSideHover] = useState(0);

  

  // Функция для открытия Drop Меню
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
    <div className={styles.header} onMouseLeave={() => dpropdownMenu(0)}>
      <div
        className={
          focus === 0 || focus === 1
            ? styles.header_body
            : styles.header_link_container
        }
      >
        <div className={styles.header_content}>
          <div className={styles.header_content_first}>
            <Link href="/" style={{cursor: "pointer"}}>
            <img
              src="https://solea-parent.dfs.ivi.ru/picture/ea003d,ffffff/reposition_iviLogoPlateRounded.svg"
              alt="IVI"
            />
            </Link>
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
        {/* Drop Меню для фильмов, сериалов и мультсериалов */}
        {focus > 1 && focus < 5? <div className={styles.header_dropdown_container}>
          <hr />
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
            <SubscribeContainer />
          </div>
        </div>
        : null 
        }
        {/* Меню для TV+ */}
        {focus === 5? <div className={styles.header_dropdown_container}>
          <hr />
          <div className={styles.header_channels_container}>
            <div>
              <div className={styles.header_title}>
                ТВ онлайн
              </div>
                <ul>
                  {translation.header_tv_links.channels.map((el) => {
                      return (
                          <li key={el.text}>
                            <Link href={el.url}>
                                {el.text}
                              </Link>
                          </li>
                      )
                  })}
                </ul>
            </div>
              <Link href="https://www.ivi.ru/tvplus/tv-schedule-today" className={styles.tv_button}>
                  {translation.welcome === "добро пожаловать" ? "Телепрограмма" : "TV program"}
              </Link>
          </div>
          <div className={styles.header_shows_container}>
            <div className={styles.header_shows_contant}>
              <div className={styles.header_programs_container}>
                <div className={styles.header_programs}>
                  <div className={styles.header_programs_title}>
                    Федеральные каналы
                  </div>
                  <div className={styles.header_programs_overflow}>
                    {translation.header_tv_links.federal_channels.map((el) => {
                      return (
                      <div className={styles.header_overflow}>
                          <img
                            src={el.src}
                            alt="IVI"
                          />
                        </div>
                      )
                    })}
                  </div>
                </div>
                <div className={styles.header_programs}>
                  <div className={styles.header_programs_title}>
                    Спортивные каналы
                  </div>
                  <div className={styles.header_programs_overflow}>
                    {translation.header_tv_links.sport_channels.map((el) => {
                        return (
                        <div className={styles.header_overflow}>
                            <img
                              src={el.src}
                              alt="IVI"
                            />
                          </div>
                        )
                    })}
                  </div>
                </div>
                <div className={styles.header_liveaction_container}>
                  <div className={styles.header_liveaction_title}>
                    Популярные трансляции
                  </div>
                  <div className={styles.header_liveaction_contant}>
                    <div className={styles.header_liveaction}>
                      fsdfs
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <SubscribeContainer />  
        </div>
        : null 
        }
      </div>
      </div>
  );
};

export default Header;
