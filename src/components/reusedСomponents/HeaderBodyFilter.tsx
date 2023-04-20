import React from "react";
import styles from "../../styles/components/reusedСomponents/HeaderBodyFilter.module.scss";

const HeaderBodyFilter = () => {
  return (
    <>
      <div className={styles.header_body_genre}>
        <p className={styles.header_body_title}>Жанры</p>
        <ul className={styles.header_body_list}></ul>
      </div>
      <div className={styles.header_body_country}>
        <p className={styles.header_body_title}>Страны</p>
        <ul className={styles.header_body_list}></ul>
        <p className={styles.header_body_title}>Годы</p>
        <ul className={styles.header_body_list}></ul>
      </div>
      <div className={styles.header_body_content}>
        <hr className={styles.header_body_line} />
        <ul className={styles.header_body_content_list}></ul>
      </div>
    </>
  );
};

export default HeaderBodyFilter;
