import React from "react";
import styles from "../../styles/components/movieComponents/Medallion.module.scss";
import Image from "next/image";
import Link from "next/link";

const Medallion = (props) => {
  return (
  
      <Link href={""} className={styles.medallion}>
        <div className={styles.medallion_box}>
          <div className={styles.medallion_image}>
            {!!props.src && <img src={props.src} alt="" />}
            {!!props.rating && props.rating}
          </div>
        </div>
        <div className={styles.medallion_title}>
          <p>{props.name}</p>
          {!!props.name2 && <p>{props.name2}</p>}
        </div>
      </Link>
  
  );
};

export default Medallion;
