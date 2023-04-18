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
    numbers: [Image];
    link: string;
}

const Top10Card: FC<Top10CardProps> = ({ image, name, numbers, link }) => {
    return (
        <Link href={link}>
            <div className={styles.container}>
                <div className={styles.image}>
                    <div className={styles.gradient}></div>
                    <img src={image.src} alt={image.alt} />
                </div>
                <img className={styles.name} src={name.src} />
                <div className={styles.numbers}>
                    {numbers.map((number) => (
                        <img src={number.src} />
                    ))}
                </div>
            </div>
        </Link>
    );
};

export default Top10Card;
