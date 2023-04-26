import { FC, useRef } from "react";
import { faBookmark, faStar } from "@fortawesome/free-regular-svg-icons";
import { faWandMagicSparkles, faBan } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/components/posterComponents/PosterCard.module.scss";
import ProgressBar from "./ProgressBar";
import PromptIcon from "./PromptIcon";
import Link from "next/link";

interface PosterCardProps {
    link: string;
    title: string;
    price: string;
    image: string;
    age: string;
    info: string;
    name: string;
    seasons: string;
    rating: string;
    progress: string;
    charts: string[];
}

const PosterCard: FC<PosterCardProps> = ({
    link,
    title,
    price,
    image,
    age,
    info,
    name,
    seasons,
    rating,
    progress,
    charts,
}) => {
    const [integerRating, fractionalRating] = rating.split(",");
    const panelRef = useRef(null);
    const imgRef = useRef(null);
    const titleRef = useRef(null);
    const mainRef = useRef(null);
    const onMouseEnter = () => {
        panelRef.current.style.visibility = "visible";
        panelRef.current.style.opacity = 1;
        imgRef.current.classList.add(styles.main__images_hover);
        titleRef.current.classList.add(styles.title_hover);
        mainRef.current.classList.add(styles.main_hover);
    };
    const onMouseLeave = () => {
        panelRef.current.style.visibility = "hidden";
        panelRef.current.style.opacity = 0;
        imgRef.current.classList.remove(styles.main__images_hover);
        titleRef.current.classList.remove(styles.title_hover);
        mainRef.current.classList.remove(styles.main_hover);
    };
    return (
        <Link
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            href={link}
        >
            <div className={styles.container}>
                <div className={styles.main} ref={mainRef}>
                    <div className={styles.main__images} ref={imgRef}>
                        <img
                            src={image}
                            alt={title}
                            className={styles.main__background}
                        />
                        <img className={styles.age} src={age} />
                    </div>
                    <div ref={panelRef} className={styles.main__panel}>
                        <div className={styles.main__icons}>
                            <PromptIcon
                                icon={faBookmark}
                                prompt={"Смотреть позже"}
                            />
                            <PromptIcon
                                icon={faWandMagicSparkles}
                                prompt={"Похожее"}
                            />
                            <PromptIcon
                                icon={faStar}
                                prompt={"Уже смотрел, оценить"}
                            />
                            <PromptIcon
                                icon={faBan}
                                prompt={"Не нравится такое"}
                            />
                        </div>
                        <div className={styles.main__info}>
                            <div className={styles.rating}>
                                <div className={styles.number}>
                                    <span className={styles.number__integer}>
                                        {integerRating}
                                    </span>
                                    <span className={styles.number__fractional}>
                                        ,{fractionalRating}
                                    </span>
                                </div>
                                <div className={styles.rating__charts}>
                                    {charts.map((value) => (
                                        <ProgressBar
                                            progress={Number(value)}
                                            className={
                                                styles.rating__progressbar
                                            }
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className={styles.text}>{name}</div>
                            <ProgressBar
                                className={styles.progressbar}
                                progress={Number(progress)}
                            />
                            <div className={styles.text}>{info}</div>
                            <div className={styles.text}>{seasons}</div>
                        </div>
                    </div>
                </div>
                <div className={styles.title} ref={titleRef}>
                    {title}
                </div>
                <div
                    className={[
                        styles.price,
                        price === "Бесплатно" ? styles.price_free : null,
                    ].join(" ")}
                >
                    {price}
                </div>
            </div>
        </Link>
    );
};

export default PosterCard;
