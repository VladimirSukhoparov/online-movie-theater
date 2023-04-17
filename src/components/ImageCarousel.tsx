import { FC, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronRight,
    faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/components/ImageCarousel.module.scss";

interface ImageCarouselProps {
    items: JSX.Element[];
    oneItemMod?: boolean;
}

const ImageCarousel: FC<ImageCarouselProps> = ({ items, oneItemMod }) => {
    const ITEM_GAP = 24;
    const [galleryWidth, setGalleryWidth] = useState(0);
    const [itemWidth, setItemWidth] = useState(0);
    const [position, setPosition] = useState(0);
    const itemCount = (galleryWidth + ITEM_GAP) / (itemWidth + ITEM_GAP);
    const maxWidth =
        itemWidth * items.length +
        ITEM_GAP * (items.length - itemCount) -
        itemCount * itemWidth;
    const ul = useRef(null);
    const gallery = useRef(null);
    const li = useRef(null);
    useEffect(() => {
        ul.current.style.transform = `translateX(${position}px)`;
    }, [position]);
    useEffect(() => {
        setGalleryWidth(gallery.current.offsetWidth);
        setItemWidth(li.current.offsetWidth);
    }, []);
    const onLeftClick = () => {
        const newPos = oneItemMod
            ? position + galleryWidth + ITEM_GAP
            : position + galleryWidth - itemWidth;
        if (newPos > 0) {
            setPosition(0);
        } else {
            setPosition(newPos);
        }
    };
    const onRightClick = () => {
        const newPos = oneItemMod
            ? position - itemWidth - ITEM_GAP
            : position - galleryWidth + itemWidth;
        if (Math.abs(newPos) > maxWidth) {
            setPosition(-maxWidth);
        } else {
            setPosition(newPos);
        }
    };
    return (
        <div className={styles.container}>
            {position === 0 ? (
                <div className={styles.replacement}></div>
            ) : (
                <div className={styles.arrow} onClick={onLeftClick}>
                    <FontAwesomeIcon
                        icon={faChevronLeft}
                        className={styles.arrow__icon}
                    />
                </div>
            )}
            <div className={styles.gallery} ref={gallery}>
                <ul ref={ul}>
                    {items.map((item, index) => (
                        <li key={index} ref={li}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            {position === -maxWidth ? (
                <div className={styles.replacement}></div>
            ) : (
                <div className={styles.arrow} onClick={onRightClick}>
                    <FontAwesomeIcon
                        icon={faChevronRight}
                        className={styles.arrow__icon}
                    />
                </div>
            )}
        </div>
    );
};

export default ImageCarousel;
