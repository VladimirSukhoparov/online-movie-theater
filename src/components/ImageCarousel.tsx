import { FC, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronRight,
    faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/components/ImageCarousel.module.scss";

interface ImageCarouselProps {
    items: JSX.Element[];
    promoMod?: boolean;
}

const ImageCarousel: FC<ImageCarouselProps> = ({ items, promoMod }) => {
    return promoMod ? (
        <SingleItemCarousel items={items} />
    ) : (
        <MultipleItemCarousel items={items} />
    );
};

const SingleItemCarousel: FC<ImageCarouselProps> = ({ items }) => {
    const ITEM_GAP = 16;
    const TRANSITION_DURATION = "0.6s";
    const START_ITEM = 2;

    const gallery = useRef(null);
    const clickingAreaLeft = useRef(null);
    const clickingAreaRight = useRef(null);
    const arrowLeft = useRef(null);
    const arrowRight = useRef(null);
    const lis = useRef([]);

    const [galleryWidth, setGalleryWidth] = useState(0);
    const [galleryHeight, setGalleryHeight] = useState(0);
    const [itemWidth, setItemWidth] = useState(0);
    const [itemsCopy, setItemsCopy] = useState([...items]);
    const [isClickAllowed, setIsClickAllowed] = useState(true);
    const [position, setPosition] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [toRight, setToRight] = useState(false);
    const [toLeft, setToLeft] = useState(false);

    useEffect(() => {
        setGalleryWidth(gallery.current.offsetWidth);
        setGalleryHeight(gallery.current.offsetHeight);
        setItemWidth(lis.current[0].offsetWidth);
        lis.current[START_ITEM].classList.add(styles["s-carousel__item_light"]);
        prepareItems();
    }, []);

    useEffect(() => {
        setPosition(
            (galleryWidth - itemWidth) / 2 -
                START_ITEM * itemWidth -
                START_ITEM * ITEM_GAP
        );
        prepareClickingAreas();
    }, [galleryWidth]);

    useEffect(() => {
        gallery.current.style.transform = `translateX(${position}px)`;
    }, [position]);

    useEffect(() => {
        if (toRight) {
            lis.current[START_ITEM + 1].classList.remove(
                styles["s-carousel__item_light"]
            );
            lis.current[START_ITEM].classList.add(
                styles["s-carousel__item_light"]
            );
            setToRight(false);
        }
        if (toLeft) {
            lis.current[START_ITEM - 1].classList.remove(
                styles["s-carousel__item_light"]
            );
            lis.current[START_ITEM].classList.add(
                styles["s-carousel__item_light"]
            );
            setToLeft(false);
        }
    }, [itemsCopy]);

    const prepareClickingAreas = () => {
        clickingAreaLeft.current.style.width =
            (galleryWidth - itemWidth) / 2 - ITEM_GAP + "px";
        clickingAreaLeft.current.style.height = galleryHeight + "px";
        clickingAreaRight.current.style.width =
            (galleryWidth - itemWidth) / 2 - ITEM_GAP + "px";
        clickingAreaRight.current.style.height = galleryHeight + "px";
    };

    const prepareItems = () => {
        const newItems = [...itemsCopy];
        newItems.unshift(newItems.pop());
        newItems.unshift(newItems.pop());
        setItemsCopy([...newItems]);
    };

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
            lis.current[START_ITEM + 1].classList.add(
                styles["s-carousel__item_light"]
            );
            lis.current[START_ITEM].classList.remove(
                styles["s-carousel__item_light"]
            );
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
            lis.current[START_ITEM - 1].classList.add(
                styles["s-carousel__item_light"]
            );
            lis.current[START_ITEM].classList.remove(
                styles["s-carousel__item_light"]
            );
        }
    };

    const onTransitionEnd = () => {
        setIsClickAllowed(true);
        if (gallery.current.style.transitionDuration === TRANSITION_DURATION) {
            gallery.current.style.transitionDuration = "0s";
            if (toRight) {
                setItemsCopy(getItemsMovedToRight());
                setPosition(position + itemWidth + ITEM_GAP);
            }
            if (toLeft) {
                setItemsCopy(getItemsMovedToLeft());
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
        <div className={styles["s-carousel"]}>
            <div
                className={[
                    styles["s-carousel__area"],
                    styles["s-carousel__area_left"],
                ].join(" ")}
                ref={clickingAreaLeft}
                onClick={onLeftClick}
                onMouseEnter={() => {
                    arrowLeft.current.classList.add(
                        styles["arrow__icon_hover"]
                    );
                }}
                onMouseDown={() => {
                    arrowLeft.current.classList.add(
                        styles["arrow__icon_active"]
                    );
                }}
                onMouseUp={() => {
                    arrowLeft.current.classList.remove(
                        styles["arrow__icon_active"]
                    );
                }}
                onMouseLeave={() => {
                    arrowLeft.current.classList.remove(
                        styles["arrow__icon_hover"]
                    );
                }}
            >
                <div
                    className={[
                        styles.arrow,
                        styles["s-carousel__arrow"],
                        styles["s-carousel__arrow_left"],
                    ].join(" ")}
                >
                    <FontAwesomeIcon
                        icon={faChevronLeft}
                        className={styles.arrow__icon}
                        ref={arrowLeft}
                    />
                </div>
            </div>
            <ul
                className={styles["s-carousel__gallery"]}
                ref={gallery}
                onTransitionEnd={onTransitionEnd}
            >
                {itemsCopy.map((item, index) => (
                    <li
                        key={index}
                        ref={(el) => (lis.current[index] = el)}
                        className={styles["s-carousel__item"]}
                    >
                        {item}
                    </li>
                ))}
            </ul>
            <div
                className={[
                    styles["s-carousel__area"],
                    styles["s-carousel__area_right"],
                ].join(" ")}
                ref={clickingAreaRight}
                onClick={onRightClick}
                onMouseEnter={() => {
                    arrowRight.current.classList.add(
                        styles["arrow__icon_hover"]
                    );
                }}
                onMouseDown={() => {
                    arrowRight.current.classList.add(
                        styles["arrow__icon_active"]
                    );
                }}
                onMouseUp={() => {
                    arrowRight.current.classList.remove(
                        styles["arrow__icon_active"]
                    );
                }}
                onMouseLeave={() => {
                    arrowRight.current.classList.remove(
                        styles["arrow__icon_hover"]
                    );
                }}
            >
                <div
                    className={[
                        styles.arrow,
                        styles["s-carousel__arrow"],
                        styles["s-carousel__arrow_right"],
                    ].join(" ")}
                >
                    <FontAwesomeIcon
                        icon={faChevronRight}
                        className={styles.arrow__icon}
                        ref={arrowRight}
                    />
                </div>
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
        <div className={styles["m-carousel"]}>
            {position === 0 ? (
                <div className={styles["m-carousel__replacement"]}></div>
            ) : (
                <div className={styles.arrow} onClick={onLeftClick}>
                    <FontAwesomeIcon
                        icon={faChevronLeft}
                        className={styles.arrow__icon}
                    />
                </div>
            )}
            <div className={styles["m-carousel__gallery"]} ref={gallery}>
                <ul ref={ul}>
                    {items.map((item, index) => (
                        <li key={index} ref={li}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            {position === -maxWidth ? (
                <div className={styles["m-carousel__replacement"]}></div>
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
