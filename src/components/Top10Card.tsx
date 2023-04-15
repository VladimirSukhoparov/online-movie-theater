import { FC } from "react";
import styles from "../styles/components/Top10Card.module.scss";
import Link from "next/link";

interface Image {
    src: string;
    alt?: string;
}

interface Top10CardProps {
    image: Image;
    name: Image;
    number: Image;
    link: string;
}

const Top10Card: FC<Top10CardProps> = ({ image, name, number, link }) => {
    return (
        <Link href={link}>
            <div className={styles.container}>
                <div className={styles.gradient}></div>
                <img className={styles.image} src={image.src} alt={image.alt} />
                <img className={styles.name} src={name.src} />
                <img className={styles.number} src={number.src} />
            </div>
        </Link>
    );
};

export default Top10Card;
