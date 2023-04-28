import React from "react";
import styles from "../../styles/components/movieComponents/PersonCard.module.scss";
import Link from "next/link";

const PersonCard = (props) => {
    const subName =
        !!props.name && props.name.trim().replace(/\s+/g, " ").split(" ");

    return (
        <div className={!!props.persons ?styles.persons:styles.personCard}>
            {!!props.alt ? (
                <Link href={`/movies/${props.id}/person`}>
                    <div className={!!props.persons ?styles.persons_image:styles.personCard_image}>
                        <span>{props.alt}</span>
                    </div>
                </Link>
            ) : (
                <Link href={""}>
                    <div className={!!props.persons ?styles.persons_image:styles.personCard_image}>
                        <img src={props.photo} alt="" />
                    </div>
                    <div className={!!props.persons ?styles.persons_caption:styles.personCard_caption}>
                        {!!subName&&subName.map((el) => (
                            <p
                                className={!!props.persons ?styles.persons_caption_title:styles.personCard_caption_title}
                                key={el}
                            >
                                {el}
                            </p>
                        ))}
                        {!!props.profession&&<p className={!!props.persons ?styles.persons_caption_subTitle:styles.personCard_caption_subTitle}>
                            {props.profession}
                        </p>}
                    </div>
                </Link>
            )}
        </div>
    );
};

export default PersonCard;
