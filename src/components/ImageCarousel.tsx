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
    return oneItemMod ? (
        <SingleItemCarousel items={items} />
    ) : (
        <MultipleItemCarousel items={items} />
    );
};

const SingleItemCarousel: FC<ImageCarouselProps> = ({ items }) => {
    const gallery = useRef(null);
    const itemWidth = 1216;
    const ITEM_GAP = 16;
    const TRANSITION_DURATION = "0.6s";
    const [galleryWidth, setGalleryWidth] = useState(0);
    const [itemsCopy, setItemsCopy] = useState([...items]);
    const [isClickAllowed, setIsClickAllowed] = useState(true);
    const [position, setPosition] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    3;
    const [toRight, setToRight] = useState(false);
    const [toLeft, setToLeft] = useState(false);

    useEffect(() => {
        const width = gallery.current.offsetWidth;
        setGalleryWidth(width);
        setPosition((width - itemWidth) / 2 - itemWidth - ITEM_GAP);
        const newItems = [...itemsCopy];
        const lastItem = newItems.pop();
        setItemsCopy([lastItem, ...newItems]);
    }, []);
    useEffect(() => {
        gallery.current.style.transform = `translateX(${position}px)`;
    }, [position]);
    const onRightClick = () => {
        if (isClickAllowed) {
            setIsClickAllowed(false);
            setToRight(true);
            gallery.current.style.transitionDuration = TRANSITION_DURATION;
            setPosition(position - itemWidth - ITEM_GAP);
            if (currentIndex === items.length - 1) {
                setCurrentIndex(0);
            } else {
                setCurrentIndex(currentIndex + 1);
            }
        }
    };
    const onLeftClick = () => {
        if (isClickAllowed) {
            setIsClickAllowed(false);
            setToLeft(true);
            gallery.current.style.transitionDuration = TRANSITION_DURATION;
            setPosition(position + itemWidth + ITEM_GAP);
            if (currentIndex === 0) {
                setCurrentIndex(items.length - 1);
            } else {
                setCurrentIndex(currentIndex - 1);
            }
        }
    };
    const onTransitionEnd = () => {
        setIsClickAllowed(true);
        if (gallery.current.style.transitionDuration === TRANSITION_DURATION) {
            gallery.current.style.transitionDuration = "0s";
            if (toRight) {
                setItemsCopy(getItemsMovedToRight());
                setToRight(false);
                setPosition(position + itemWidth + ITEM_GAP);
            }
            if (toLeft) {
                setItemsCopy(getItemsMovedToLeft());
                setToLeft(false);
                setPosition(position - itemWidth - ITEM_GAP);
            }
        }
    };
    const getItemsMovedToRight = () => {
        const newItems = [...itemsCopy];
        const startItem = newItems[0];
        for (let i = 0; i < itemsCopy.length - 1; i++) {
            newItems[i] = newItems[i + 1];
        }
        newItems.pop();
        newItems.push(startItem);
        return newItems;
    };
    const getItemsMovedToLeft = () => {
        const newItems = [...itemsCopy];
        const endItem = newItems[newItems.length - 1];
        for (let i = itemsCopy.length - 1; i > 0; i--) {
            newItems[i] = newItems[i - 1];
        }
        newItems.shift();
        newItems.unshift(endItem);
        return newItems;
    };
    return (
        <div className={styles.single}>
            <div
                className={[
                    styles.arrow,
                    styles["single__arrow"],
                    styles["single__arrow_left"],
                ].join(" ")}
                onClick={onLeftClick}
            >
                <FontAwesomeIcon
                    icon={faChevronLeft}
                    className={styles.arrow__icon}
                />
            </div>
            <ul
                className={styles["single__gallery"]}
                ref={gallery}
                onTransitionEnd={onTransitionEnd}
            >
                {itemsCopy.map((item, index) => (
                    <li
                        key={index}
                        className={[
                            styles["single__item"],
                            index === 1 ? styles["single__item_active"] : null,
                        ].join(" ")}
                    >
                        {item}
                    </li>
                ))}
            </ul>
            <div
                className={[
                    styles.arrow,
                    styles["single__arrow"],
                    styles["single__arrow_right"],
                ].join(" ")}
                onClick={onRightClick}
            >
                <FontAwesomeIcon
                    icon={faChevronRight}
                    className={styles.arrow__icon}
                />
            </div>
        </div>
    );
};

const MultipleItemCarousel: FC<ImageCarouselProps> = ({ items }) => {
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
        const newPos = position + galleryWidth - itemWidth;
        if (newPos > 0) {
            setPosition(0);
        } else {
            setPosition(newPos);
        }
    };
    const onRightClick = () => {
        const newPos = position - galleryWidth + itemWidth;
        if (Math.abs(newPos) > maxWidth) {
            setPosition(-maxWidth);
        } else {
            setPosition(newPos);
        }
    };

    return (
        <div className={styles["multiple"]}>
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
            <div className={styles["multiple__gallery"]} ref={gallery}>
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
