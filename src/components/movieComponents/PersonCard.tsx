import React from "react";
import styles from "../../styles/components/movieComponents/PersonCard.module.scss";
import Link from "next/link";

const PersonCard = (props) => {
    const subName = !!props.name && props.name.trim().replace(/\s+/g, " ").split(" ");

  return (
    <div className={styles.personCard}>
      {!!props.alt ? (
        <Link href={`/movies/${props.id}/person`}>
          <div className={styles.personCard_image}>
            <span>{props.alt}</span>
          </div>
        </Link>
      ) : (
        <Link href={""}>
          <div className={styles.personCard_image}>
            <img src={props.photo} alt="" />
          </div>
          <div className={styles.personCard_caption}>
            {subName.map((el) => (
              <p className={styles.personCard_caption_title} key={el}>
                {el}
              </p>
            ))}
            <p className={styles.personCard_caption_subTitle}>{props.profession}</p>
          </div>
        </Link>
      )}
    </div>
  );
};

export default PersonCard;
