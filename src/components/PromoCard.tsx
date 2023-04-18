import { FC } from "react";
import styles from "../styles/components/PromoCard.module.scss";
import Button from "./reusedСomponents/Button";
import { useLocale } from "../hooks/useLocale";

interface Image {
  src: string;
  alt?: string;
}

interface PromoCardProps {
  image: Image;
  title: string;
  synopsis: string;
}

const PromoCard: FC<PromoCardProps> = ({ image, title, synopsis }) => {
  const transltion = useLocale();
  return (
    <div className={styles.container}>
      <img className={styles.image} src={image.src} alt={image.alt} />
      <div className={styles.description}>
        <div className={styles.title}>{title}</div>
        <div className={styles.synopsis}>{synopsis}</div>
        <Button classN="header_subscribe">{transltion.show_selection}</Button>
      </div>
    </div>
  );
};

export default PromoCard;
