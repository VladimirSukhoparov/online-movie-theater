import React, { useRef, useState } from "react";
import Modal from "react-modal";
import Button from "../UI/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/components/movieComponents/CardMovie.module.scss";
import {
  faPlay,
  faBookmark,
  faArrowUpFromBracket,
  faVolumeUp,
  faClosedCaptioning,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";
import dynamic from "next/dynamic";
import Medallion from "./Medallion";

const CardMovie = ({ film }) => {
  const Player = dynamic(() => import("../movieComponents/Player"), {
    ssr: false,
  });

  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  }

  const [count, setCount] = useState(film.rating?.kp);
  const updateRating = (e) => {
    let value = e.target.id;
    value < count && setCount(count - (count - value) * 0.005);
    value > count && setCount(count + (value - count) * 0.005);
    value === count && setCount(count);
    closeModal();
  };

  const hidden = useRef(null);
  const show = useRef(null);
  const hide = useRef(null);
  const none = useRef(null);

  const showBox = () => {
    hidden.current.style.display = "block";
    none.current.style.display = "block";
    hide.current.style.display = "block";
    show.current.style.display = "none";
  };

  const hideBox = () => {
    hidden.current.style.display = "-webkit-box";
    show.current.style.display = "block";
    none.current.style.display = "none";
    hide.current.style.display = "none";
  };

  return (
    <>
      <div className={styles.card}>
        <div className={styles.card_container}>
          <div className={styles.card_player}>
            <div className={styles.card_movie}>
              <Player url={"https://www.youtube.com/watch?v=zwpV5grj0Sk"} />
            </div>
            <div className={styles.card_user_btn}>
              <Button
                classN="trailer"
                type="button"
                children={
                  <Link href={film.videos.trailers[0].url} target={"_blank"}>
                    <FontAwesomeIcon icon={faPlay} />
                    <p>Трейлер</p>
                  </Link>
                }
              />
              <Button
                classN="bookmark"
                type="button"
                children={<FontAwesomeIcon icon={faBookmark} />}
              />
              <Button
                classN="share"
                type="button"
                children={<FontAwesomeIcon icon={faArrowUpFromBracket} />}
              />
            </div>
          </div>
          <div className={styles.card_info}>
            <p className={styles.card_title}>{film.name}</p>
            <p className={styles.card_title}>(Фильм {film.year})</p>
            <div className={styles.card_params}>
              <ul className={styles.card_paramsList}>
                <li className={styles.card_paramsLink}>
                  <Link href={film.name}>{film.year}</Link>
                </li>
                <li className={styles.card_paramsDuration}>2 ч. 12 мин.</li>
                <li className={styles.card_paramsDuration}>16+</li>
              </ul>
              <ul className={styles.card_paramsList}>
                {film.countries.map((el) => (
                  <li className={styles.card_paramsLink} key={el.name}>
                    <Link href={el.name}>{el.name}</Link>
                    {film.countries.indexOf(el) !==
                      film.countries.length - 1 && (
                      <span className={styles.card_paramsPoint}>&#183;</span>
                    )}
                  </li>
                ))}

                {film.genres.map((el) => (
                  <li className={styles.card_paramsLink} key={el.name}>
                    <span className={styles.card_paramsPoint}>&#183;</span>
                    <Link href={el.name}>
                      {el.name.replace(el.name[0], el.name[0].toUpperCase())}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className={styles.card_paramsList}>
                <li className={styles.card_paramsItem}>
                  <p>FullHD</p>
                </li>
                <li className={styles.card_paramsItem}>
                  <FontAwesomeIcon icon={faVolumeUp} />
                  Рус<span className={styles.card_paramsPoint}>&#183;</span>Eng
                  <FontAwesomeIcon icon={faClosedCaptioning} />
                  Рус
                </li>
                <li></li>
              </ul>
            </div>
            <div className={styles.card_medallions}>
              <Medallion
                rating={(Math.round(count * 100) / 100).toFixed(1)}
                name={"Рейтинг"}
                name2={"иви"}
              />
              {film.persons.slice(0, 4).map((el) => (
                <div key={el.id}>
                  <Medallion src={el.photo} name={el.name} />
                </div>
              ))}
            </div>
            <div className={styles.card_description}>
              <p className={styles.card_description_hidden} ref={hidden}>
                {film.description}
              </p>
              <div className={styles.card_description_hiddenBox} ref={none}>
                <p>
                  {`Приглашаем посмотреть фильм «${film.name}» в нашем онлайн-кинотеатре совершенно бесплатно в хорошем HD качестве. Приятного просмотра!`}
                </p>
                <div className={styles.card_description_box}>
                  <hr />
                  <p className={styles.card_description_boxTitle}>Языки</p>
                  <p className={styles.card_description_boxText}>
                    Русский, Английский
                  </p>
                  <p className={styles.card_description_boxTitle}>Субтитры</p>
                  <p className={styles.card_description_boxText}>Русский</p>
                  <p className={styles.card_description_boxTitle2}>
                    Изображение и звук.{" "}
                  </p>
                  <span className={styles.card_description_boxText2}>
                    Фактическое качество зависит от устройства и ограничений
                    правообладателя.
                  </span>
                  <ul>
                    <li className={styles.card_description_item}>
                      <p>4K</p>
                    </li>
                    <li className={styles.card_description_item}>
                      <p>FullHD</p>
                    </li>
                    <li className={styles.card_description_item}>
                      <p>HD</p>
                    </li>
                    <li className={styles.card_description_item}>
                      <p>1080</p>
                    </li>
                    <li className={styles.card_description_item}>
                      <p>720</p>
                    </li>
                    <li className={styles.card_description_item}>
                      <p>HDR10</p>
                    </li>
                    <li className={styles.card_description_item}>
                      <p>5.1</p>
                    </li>
                  </ul>
                  <hr />
                </div>
              </div>
              <span
                className={styles.card_description_show}
                ref={show}
                onClick={showBox}
              >
                Детали о фильме
              </span>
              <span
                className={styles.card_description_hide}
                ref={hide}
                onClick={hideBox}
              >
                Свернуть детали
              </span>
            </div>
            <div className={styles.card_rating} onClick={openModal}>
              <div className={styles.card_rating_box}>
                <div className={styles.card_rating_boxNum}>
                  {(Math.round(count * 100) / 100).toFixed(1)}
                </div>
                <ul>
                  <li className={styles.card_rating_boxTitle}>Рейтинг Иви</li>
                  <li className={styles.card_rating_boxCaption}>
                    Интересный сюжет
                  </li>
                  <li className={styles.card_rating_boxCounter}>
                    114 934 оценки
                  </li>
                </ul>
                <Button classN="rating" type="button" children={"Оценить"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <div className={styles.popup}>
          <FontAwesomeIcon icon={faXmark} onClick={closeModal} />
          <div className={styles.popup_box}>
            <div className={styles.popup_box_content}>
              <p className={styles.popup_box_contentTitle}>Ваша оценка</p>
              <p className={styles.popup_box_contentSubTitle}>
                Оценки улучшают рекомендации
              </p>
              <ul className={styles.popup_box_contentList}>
                <li
                  className={styles.popup_box_contentItem}
                  id="1"
                  onClick={(e) => {
                    updateRating(e);
                  }}
                >
                  1
                </li>
                <li
                  className={styles.popup_box_contentItem}
                  id="2"
                  onClick={(e) => {
                    updateRating(e);
                  }}
                >
                  2
                </li>
                <li
                  className={styles.popup_box_contentItem}
                  id="3"
                  onClick={(e) => {
                    updateRating(e);
                  }}
                >
                  3
                </li>
                <li
                  className={styles.popup_box_contentItem}
                  id="4"
                  onClick={(e) => {
                    updateRating(e);
                  }}
                >
                  4
                </li>
                <li
                  className={styles.popup_box_contentItem}
                  id="5"
                  onClick={(e) => {
                    updateRating(e);
                  }}
                >
                  5
                </li>
                <li
                  className={styles.popup_box_contentItem}
                  id="6"
                  onClick={(e) => {
                    updateRating(e);
                  }}
                >
                  6
                </li>
                <li
                  className={styles.popup_box_contentItem}
                  id="7"
                  onClick={(e) => {
                    updateRating(e);
                  }}
                >
                  7
                </li>
                <li
                  className={styles.popup_box_contentItem}
                  id="8"
                  onClick={(e) => {
                    updateRating(e);
                  }}
                >
                  8
                </li>
                <li
                  className={styles.popup_box_contentItem}
                  id="9"
                  onClick={(e) => {
                    updateRating(e);
                  }}
                >
                  9
                </li>
                <li
                  className={styles.popup_box_contentItem}
                  id="10"
                  onClick={(e) => {
                    updateRating(e);
                  }}
                >
                  10
                </li>
              </ul>
              <div className={styles.popup_box_contentLabels}>
                <p>очень плохо</p>
                <p>отлично</p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CardMovie;
