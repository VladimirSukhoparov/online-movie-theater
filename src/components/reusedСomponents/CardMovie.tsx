import React, { useRef } from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/components/reusedСomponents/CardMovie.module.scss";
import {
  faPlay,
  faBookmark,
  faArrowUpFromBracket,
  faVolumeUp,
  faClosedCaptioning,
} from "@fortawesome/free-solid-svg-icons";
import testFilm from "../../../public/data/testFilm.json";
import Link from "next/link";
import dynamic from "next/dynamic";
import Medallion from "./Medallion";

const CardMovie = () => {
  const Player = dynamic(() => import("./Player"), { ssr: false });

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
    <div className={styles.card}>
      <div className={styles.card_container}>
        <div className={styles.card_player}>
          <div className={styles.card_movie}>
            <Player />
          </div>
          <div className={styles.card_user_btn}>
            <Button
              classN="trailer"
              type="button"
              children={
                <>
                  <FontAwesomeIcon icon={faPlay} />
                  <p>Трейлер</p>
                </>
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
          <p className={styles.card_title}>
            {testFilm[0].name} (Фильм {testFilm[0].year})
          </p>
          <div className={styles.card_params}>
            <ul className={styles.card_paramsList}>
              <li className={styles.card_paramsLink}>
                <Link href={testFilm[0].name}>{testFilm[0].year}</Link>
              </li>
              <li className={styles.card_paramsDuration}>2 ч. 12 мин.</li>
              <li className={styles.card_paramsDuration}>16+</li>
            </ul>
            <ul className={styles.card_paramsList}>
              <li className={styles.card_paramsLink}>
                <Link href={testFilm[0].country[0].name}>
                  {testFilm[0].country[0].name}
                </Link>
              </li>

              {testFilm[0].genre.map((el) => (
                <li className={styles.card_paramsLink} key={el.name}>
                  <Link href={el.name}>
                    <span className={styles.card_paramsPoint}>&#183;</span>
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
            <Medallion rating={"8.1"} name={"Рейтинг"} name2={"иви"} />
          </div>
          <div className={styles.card_description}>
            <p className={styles.card_description_hidden} ref={hidden}>
              {
                "Четвертая по счету работа блестящего дуэта настоящих профессионалов своего дела Мартина Скорсезе и Леонардо ДиКаприо, на этот раз в жанре мистического триллера с элементами психологической драмы, никого не оставит равнодушным. Америка середины 50-х. На удаленном от всего мира острове расположена специальная лечебница для особо буйных душевнобольных преступников. В клинике происходят странные события: при загадочных обстоятельствах пропала одна из пациенток. Остров хорошо охраняется, вокруг бескрайний океан, а катера приходят лишь в строго определенное время и место. Побег полностью исключен. В поисках разгадки на остров прибывают два судебных пристава с большой земли: Тедди Дениелс, страдающий необъяснимыми головными болями после трагической гибели жены, и его напарник Чак Оул. Даже на первый взгляд им становится понятно, что на острове творится что-то неладное. Охранники постоянно начеку, держат палец на спусковом крючке, а впоследствии выясняется, что руководство клиники скрывает страшную тайну. Для того чтобы узнать, как дальше будут развиваться события, рекомендуем смотреть онлайн «Остров проклятых»."
              }
            </p>
            <div className={styles.card_description_hiddenBox} ref={none}>
              <p>
                {
                  "Приглашаем посмотреть фильм «Остров проклятых» в нашем онлайн-кинотеатре совершенно бесплатно в хорошем HD качестве. Приятного просмотра!"
                }
              </p>
              <div className={styles.card_description_box}>
                <hr />
                <p className={styles.card_description_boxTitle}>Языки</p>
                <p className={styles.card_description_boxText}>Русский, Английский</p>
                <p className={styles.card_description_boxTitle}>Субтитры</p>
                <p className={styles.card_description_boxText}>Русский</p>
                <p className={styles.card_description_boxTitle2}>Изображение и звук. </p>
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
          <div className={styles.card_rating}>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMovie;
