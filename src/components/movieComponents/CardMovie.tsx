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
    faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useLocale } from "../../hooks/useLocale";
import Link from "next/link";
import dynamic from "next/dynamic";
import Medallion from "./Medallion";

const CardMovie = ({ film }) => {
    const { cardMovie: translation } = useLocale();
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
    const [isCount, setIsCount] = useState(114934);
    const updateRating = (e) => {
        let value = e.target.id;
        value < count && setCount(count - (count - value) * 0.005);
        value > count && setCount(count + (value - count) * 0.005);
        value === count && setCount(count);
        setIsCount(isCount + 1);
        closeModal();
    };

    const hidden = useRef(null);
    const showDetail = useRef(null);
    const hideDetail = useRef(null);
    const readMore = useRef(null);
    const hide = useRef(null);
    const none = useRef(null);


    const showBox = () => {
        hidden.current.style.display = "block";
        none.current.style.display = "block";
        hideDetail.current.style.display = "block";
        showDetail.current.style.display = "none";
    };

    const hideBox = () => {
        hidden.current.style.display = "-webkit-box";
        showDetail.current.style.display = "block";
        none.current.style.display = "none";
        hideDetail.current.style.display = "none";
    };

    const showMobile = () => {
        hidden.current.style.display = "block";
        none.current.style.display = "block";
        hide.current.style.display = "block";
        readMore.current.style.display = "none";
    };

    const hideMobile = () => {
        hidden.current.style.display = "-webkit-box";
        readMore.current.style.display = "block";
        none.current.style.display = "none";
        hide.current.style.display = "none";
    };

    return (
        <>
            <div className={styles.header}>
                <Link href={`/movies`} className={styles.header_btn}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                    <p>{translation.button}</p>
                </Link>
            </div>
            <div className={styles.card}>
                <div className={styles.card_container}>
                    <div className={styles.card_player}>
                        <div className={styles.card_mobile}>
                            <p
                                className={styles.card_mobile_title}
                            >{`${film.name} (${translation.title} ${film.year})`}</p>
                            <div className={styles.card_mobile_params}>
                                <ul className={styles.card_mobile_paramsList}>
                                    <li
                                        className={
                                            styles.card_mobile_paramsLink
                                        }
                                    >
                                        <Link href={film.name}>
                                            {film.year}
                                        </Link>
                                    </li>
                                    <li
                                        className={
                                            styles.card_mobile_paramsDuration
                                        }
                                    >
                                        2 {translation.hour} 12{" "}
                                        {translation.minutes}
                                    </li>
                                    <li
                                        className={
                                            styles.card_mobile_paramsDuration
                                        }
                                    >
                                        16+
                                    </li>
                                </ul>
                                <ul className={styles.card_mobile_paramsList}>
                                    {film.countries.map((el) => (
                                        <li
                                            className={
                                                styles.card_mobile_paramsLink
                                            }
                                            key={el.name}
                                        >
                                            <Link href={el.name}>
                                                {el.name}
                                            </Link>
                                            {film.countries.indexOf(el) !==
                                                film.countries.length - 1 && (
                                                <span
                                                    className={
                                                        styles.card_mobile_paramsPoint
                                                    }
                                                >
                                                    &#183;
                                                </span>
                                            )}
                                        </li>
                                    ))}

                                    {film.genres.map((el) => (
                                        <li
                                            className={
                                                styles.card_mobile_paramsLink
                                            }
                                            key={el.name}
                                        >
                                            <span
                                                className={
                                                    styles.card_mobile_paramsPoint
                                                }
                                            >
                                                &#183;
                                            </span>
                                            <Link href={el.name}>
                                                {el.name.replace(
                                                    el.name[0],
                                                    el.name[0].toUpperCase()
                                                )}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                <ul className={styles.card_mobile_paramsList}>
                                    <li
                                        className={
                                            styles.card_mobile_paramsItem
                                        }
                                    >
                                        <p>FullHD</p>
                                    </li>
                                    <li
                                        className={
                                            styles.card_mobile_paramsItem
                                        }
                                    >
                                        <FontAwesomeIcon icon={faVolumeUp} />
                                        {translation.voiceLanguage}
                                        <span
                                            className={
                                                styles.card_mobile_paramsPoint
                                            }
                                        >
                                            &#183;
                                        </span>
                                        Eng
                                        <FontAwesomeIcon
                                            icon={faClosedCaptioning}
                                        />
                                        {translation.preSubtitles}
                                    </li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.card_movie}>
                            <Player
                                url={
                                    "https://www.youtube.com/watch?v=zwpV5grj0Sk"
                                }
                                src={
                                    "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/45e33bc3-b553-4873-9d04-f73e9fdc7741/1920x"
                                }
                            />
                        </div>
                        <div className={styles.card_user_btn}>
                            <Button
                                classN="trailer"
                                type="button"
                                children={
                                    <Link
                                        href={film.videos.trailers[0].url}
                                        target={"_blank"}
                                    >
                                        <FontAwesomeIcon icon={faPlay} />
                                        <p>{translation.trailer}</p>
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
                                children={
                                    <FontAwesomeIcon
                                        icon={faArrowUpFromBracket}
                                    />
                                }
                            />
                        </div>
                    </div>
                    <div className={styles.card_info}>
                        <div className={styles.card_screen}>
                            <p
                                className={styles.card_title}
                            >{`${film.name} (${translation.title} ${film.year})`}</p>
                            <div className={styles.card_params}>
                                <ul className={styles.card_paramsList}>
                                    <li className={styles.card_paramsLink}>
                                        <Link href={film.name}>
                                            {film.year}
                                        </Link>
                                    </li>
                                    <li className={styles.card_paramsDuration}>
                                        2 {translation.hour} 12{" "}
                                        {translation.minutes}
                                    </li>
                                    <li className={styles.card_paramsDuration}>
                                        16+
                                    </li>
                                </ul>
                                <ul className={styles.card_paramsList}>
                                    {film.countries.map((el) => (
                                        <li
                                            className={styles.card_paramsLink}
                                            key={el.name}
                                        >
                                            <Link href={el.name}>
                                                {el.name}
                                            </Link>
                                            {film.countries.indexOf(el) !==
                                                film.countries.length - 1 && (
                                                <span
                                                    className={
                                                        styles.card_paramsPoint
                                                    }
                                                >
                                                    &#183;
                                                </span>
                                            )}
                                        </li>
                                    ))}

                                    {film.genres.map((el) => (
                                        <li
                                            className={styles.card_paramsLink}
                                            key={el.name}
                                        >
                                            <span
                                                className={
                                                    styles.card_paramsPoint
                                                }
                                            >
                                                &#183;
                                            </span>
                                            <Link href={el.name}>
                                                {el.name.replace(
                                                    el.name[0],
                                                    el.name[0].toUpperCase()
                                                )}
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
                                        {translation.voiceLanguage}
                                        <span
                                            className={styles.card_paramsPoint}
                                        >
                                            &#183;
                                        </span>
                                        Eng
                                        <FontAwesomeIcon
                                            icon={faClosedCaptioning}
                                        />
                                        {translation.preSubtitles}
                                    </li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.card_medallions}>
                            <Medallion
                                rating={(Math.round(count * 100) / 100).toFixed(
                                    1
                                )}
                                name={translation.rating}
                                name2={translation.ivi}
                                open={openModal}/>
                            {film.persons.slice(0, 4).map((el) => (
                                <div key={el.id}>
                                    <Medallion
                                        src={el.photo}
                                        name={
                                            translation.title == "Movie"
                                                ? el.enName
                                                : el.name
                                        }
                                    />
                                </div>
                            ))}
                        </div>
                        <div className={styles.card_mobile_user_btn}>
                            <Button
                                classN="trailer_mobile"
                                type="button"
                                children={
                                    <Link
                                        href={film.videos.trailers[0].url}
                                        target={"_blank"}
                                    >
                                        <FontAwesomeIcon icon={faPlay} />
                                        <p>{translation.trailer}</p>
                                    </Link>
                                }
                            />
                            <Button
                                classN="bookmark_mobile"
                                type="button"
                                children={<FontAwesomeIcon icon={faBookmark} />}
                            />
                            <Button
                                classN="share_mobile"
                                type="button"
                                children={
                                    <FontAwesomeIcon
                                        icon={faArrowUpFromBracket}
                                    />
                                }
                            />
                        </div>
                        <div className={styles.card_description}>
                            <p
                                className={styles.card_description_hidden}
                                ref={hidden}
                            >
                                {film.description}
                            </p>
                            <div
                                className={styles.card_description_hiddenBox}
                                ref={none}
                            >
                                <p>
                                    {`${translation.paragraph} «${film.name}» ${translation.paragraph2}`}
                                </p>
                                <div className={styles.card_description_box}>
                                    <hr />
                                    <p
                                        className={
                                            styles.card_description_boxTitle
                                        }
                                    >
                                        {translation.languages}
                                    </p>
                                    <p
                                        className={
                                            styles.card_description_boxText
                                        }
                                    >
                                        {translation.language}
                                    </p>
                                    <p
                                        className={
                                            styles.card_description_boxTitle
                                        }
                                    >
                                        {translation.subtitles}
                                    </p>
                                    <p
                                        className={
                                            styles.card_description_boxText
                                        }
                                    >
                                        {translation.subtitle}
                                    </p>
                                    <p
                                        className={
                                            styles.card_description_boxTitle2
                                        }
                                    >
                                        {translation.imgSound}{" "}
                                    </p>
                                    <span
                                        className={
                                            styles.card_description_boxText2
                                        }
                                    >
                                        {translation.quality}
                                    </span>
                                    <ul>
                                        <li
                                            className={
                                                styles.card_description_item
                                            }
                                        >
                                            <p>4K</p>
                                        </li>
                                        <li
                                            className={
                                                styles.card_description_item
                                            }
                                        >
                                            <p>FullHD</p>
                                        </li>
                                        <li
                                            className={
                                                styles.card_description_item
                                            }
                                        >
                                            <p>HD</p>
                                        </li>
                                        <li
                                            className={
                                                styles.card_description_item
                                            }
                                        >
                                            <p>1080</p>
                                        </li>
                                        <li
                                            className={
                                                styles.card_description_item
                                            }
                                        >
                                            <p>720</p>
                                        </li>
                                        <li
                                            className={
                                                styles.card_description_item
                                            }
                                        >
                                            <p>HDR10</p>
                                        </li>
                                        <li
                                            className={
                                                styles.card_description_item
                                            }
                                        >
                                            <p>5.1</p>
                                        </li>
                                    </ul>
                                    <hr />
                                </div>
                            </div>
                            <span
                                className={styles.card_description_showDetail}
                                ref={showDetail}
                                onClick={showBox}
                            >
                                {translation.showDetail}
                            </span>
                            <span
                                className={styles.card_description_hideDetail}
                                ref={hideDetail}
                                onClick={hideBox}
                            >
                                {translation.hideDetail}
                            </span>

                            <span
                                className={styles.card_mobile_description_show}
                                ref={readMore}
                                onClick={showMobile}
                            >
                                {translation.readMore}
                            </span>
                            <span
                                className={styles.card_mobile_description_hide}
                                ref={hide}
                                onClick={hideMobile}
                            >
                                {translation.hide}
                            </span>
                        </div>
                        <div className={styles.card_rating} onClick={openModal}>
                            <div className={styles.card_rating_box}>
                                <div className={styles.card_rating_boxNum}>
                                    {(Math.round(count * 100) / 100).toFixed(1)}
                                </div>
                                <ul>
                                    <li className={styles.card_rating_boxTitle}>
                                        {translation.rating} {translation.ivi}
                                    </li>
                                    <li
                                        className={
                                            styles.card_rating_boxCaption
                                        }
                                    >
                                        {translation.plot}
                                    </li>
                                    <li
                                        className={
                                            styles.card_rating_boxCounter
                                        }
                                    >
                                        {isCount}{" "}
                                        {translation.ratings == "ratings"
                                            ? translation.ratings
                                            : isCount % 10 == 1
                                            ? translation.ratings
                                            : isCount % 10 == 2 ||
                                              isCount % 10 == 3 ||
                                              isCount % 10 == 4
                                            ? translation.ratings.substring(
                                                  0,
                                                  translation.ratings.length - 1
                                              ) + "и"
                                            : translation.ratings.substring(
                                                  0,
                                                  translation.ratings.length - 2
                                              ) + "ок"}
                                    </li>
                                </ul>
                                <Button
                                    classN="rating"
                                    type="button"
                                    children={translation.evaluation}
                                />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className={styles.card_mobile_container}>
                            <div
                                className={styles.card_mobile_rating}
                                onClick={openModal}
                            >
                                <div className={styles.card_mobile_rating_box}>
                                    <div
                                        className={
                                            styles.card_mobile_rating_boxNum
                                        }
                                    >
                                        {(
                                            Math.round(count * 100) / 100
                                        ).toFixed(1)}
                                    </div>
                                    <ul>
                                        <li
                                            className={
                                                styles.card_mobile_rating_boxTitle
                                            }
                                        >
                                            {translation.rating}{" "}
                                            {translation.ivi}
                                        </li>
                                        <li
                                            className={
                                                styles.card_mobile_rating_boxCaption
                                            }
                                        >
                                            {translation.plot}
                                        </li>
                                    </ul>
                                    <Button
                                        classN="rating"
                                        type="button"
                                        children={translation.evaluation}
                                    />
                                </div>
                            </div>
                            <div className={styles.card_mobile_description_box}>
                            <div className={styles.card_mobile_description_lang}>
                                    <p>
                                        {translation.languages}
                                    </p>
                                    <p>
                                        {translation.language}
                                    </p>
                                    </div>
                                    <hr />
                                    <div className={styles.card_mobile_description_lang}>
                                    <p>
                                        {translation.subtitles}
                                    </p>
                                    <p>
                                        {translation.subtitle}
                                    </p>
                                    </div>
                                    <hr />
                                    <div className={styles.card_mobile_description_lang}>
                                    <p>
                                        {translation.qualityMobile}
                                    </p>
                                    <ul>
                                        <li
                                            className={
                                                styles.card_mobile_description_item
                                            }
                                        >
                                            <p>4K</p>
                                        </li>
                                        <li
                                            className={
                                                styles.card_mobile_description_item
                                            }
                                        >
                                            <p>FullHD</p>
                                        </li>
                                        <li
                                            className={
                                                styles.card_mobile_description_item
                                            }
                                        >
                                            <p>HD</p>
                                        </li>
                                        <li
                                            className={
                                                styles.card_mobile_description_item
                                            }
                                        >
                                            <p>1080</p>
                                        </li>
                                        <li
                                            className={
                                                styles.card_mobile_description_item
                                            }
                                        >
                                            <p>720</p>
                                        </li>
                                        <li
                                            className={
                                                styles.card_mobile_description_item
                                            }
                                        >
                                            <p>HDR10</p>
                                        </li>
                                        <li
                                            className={
                                                styles.card_mobile_description_item
                                            }
                                        >
                                            <p>5.1</p>
                                        </li>
                                    </ul>
                                    </div>
                                </div>∏
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
                            <p className={styles.popup_box_contentTitle}>
                                Ваша оценка
                            </p>
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
