import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import films from "../../../public/data/example.json";
import styles from "../../styles/components/movieComponents/MovieDetails.module.scss";
import { useLocale } from "../../hooks/useLocale";


const MovieDetails = (props) => {
    const { movieDetails: translation } = useLocale();
    const [isVisible, setIsVisible] = useState(props.page);
   
    const film = films;
    const items = [
        { id: 1, name: translation.creators, href: "person" },
        { id: 2, name: translation.comments, href: "comments" },
        { id: 3, name: translation.trailers, href: "trailers" },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Link href={`/movies/${props.id}`} className={styles.content_back}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                    <p>{translation.button}</p>
                </Link>
                <div className={styles.movie_container}>
                    <div className={styles.movie_content}>
                        <p className={styles.movie_content_title}>
                            {film.name} {`${translation.title} ${film.year}`}
                        </p>
                        <ul
                            className={styles.movie_content_list}
                            id="personList"
                        >
                            {items.map((el) => (
                                <li
                                    onClick={() => setIsVisible(el.href)}
                                    key={el.id}
                                     className={
                                        isVisible === el.href
                                            ? styles.active
                                            : null
                                    }
                                >
                                    <Link href={`/movies/${props.id}/${el.href}`}>
                                        {el.name}
                                        
                                       
                                    </Link>
                                           {/* <sup>{3}</sup>  */}
                                </li>
                            ))}
                        </ul>
                        <hr />
                        <div>
                            {props.children}
                            </div>
                    </div>

                    <div className={styles.movie_poster}>
                        <Link href={`/movies/${props.id}`}>
                        <img src={film.poster.previewUrl} alt="" />
                        </Link>
                        <div className={styles.movie_info}>
                            <div className={styles.rating}>
                                <div className={styles.number}>
                                    <span className={styles.number__integer}>
                                        {film.rating.imdb}
                                    </span>
                                </div>
                                <div className={styles.rating_charts}>
                                    {Object.values(film.rating).map((value,ind) => (
                                       <div className={styles.bar} key={ind}>
                                       <div
                                           className={styles.progress}
                                           style={{ width: Number(value) * 10 + "%" }}
                                       ></div>
                                   </div>
                                    
                                    ))}
                                </div>
                            </div>
                            <div className={styles.text}>{`${film.year}, ${film.countries.map((el)=>(` ${el.name}`))}`}</div>
                            <div className={styles.text}>{film.genres.map((el)=>(` ${el.name}`))}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
