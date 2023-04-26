import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FC } from "react";
import styles from "../styles/components/Title.module.scss";

interface TitleProps {
    link: string;
    name: string;
    className?: string;
}

const Title: FC<TitleProps> = ({ link, name, className }) => {
    return (
        <div className={className}>
            <Link href={link} className={styles.container}>
                <div className={styles.name}>{name}</div>
                <FontAwesomeIcon icon={faChevronRight} />
            </Link>
        </div>
    );
};

export default Title;
