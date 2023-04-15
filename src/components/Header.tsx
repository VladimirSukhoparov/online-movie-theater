import React from "react";
import styles from "../styles/components/header/Header.module.scss";
import { useLocale } from "../hooks/useLocale";
import Link from "next/link";
import LocaleSwitcher from "./LocaleSwitcher";

const Header = () => {
  const translation = useLocale();
  return (
    <div className={styles.header}>
      <div className={styles.header_body}>
        <div className={styles.header_content}>
          <div className={styles.header_content_first}>
            <img
              src="https://solea-parent.dfs.ivi.ru/picture/ea003d,ffffff/reposition_iviLogoPlateRounded.svg"
              alt="IVI"
            />
            <nav>
              <ul>
                {translation.header.map((el) => {
                  return (
                    <Link href={el.path} key={el.text}>
                      <li>{el.text}</li>
                    </Link>
                  );
                })}
              </ul>
            </nav>
          </div>
          <div className={styles.header_content_second}>
            <LocaleSwitcher></LocaleSwitcher>
            <button>Смотреть 30 дней за 1 ₽</button>
            <img
              src="https://icones.pro/wp-content/uploads/2022/02/icone-de-cloche-grise.png"
              alt=""
            />
            <img
              src="https://romanroadtrust.co.uk/wp-content/uploads/2018/01/profile-icon-png-898.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
