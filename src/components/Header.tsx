import React from "react";
import styles from "../styles/components/header/Header.module.scss";
import { useLocale } from "../hooks/useLocale";
import Link from "next/link";
import LocaleSwitcher from "./LocaleSwitcher";
import Button from "./reusedСomponents/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUser } from "@fortawesome/free-solid-svg-icons";

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
                    <Link href={el.path} key={translation.header.indexOf(el)}>
                      <li>{el.text}</li>
                    </Link>
                  );
                })}
              </ul>
            </nav>
          </div>
          <div className={styles.header_content_second}>
            <LocaleSwitcher></LocaleSwitcher>
            <Button
              classN="header_subscribe"
              type="button"
              children={translation.header_subscribe}
            />
            {/* <button>Смотреть 30 дней за 1 ₽</button> */}
            <Button
              classN="header_notification"
              type="button"
              children={<FontAwesomeIcon icon={faBell} />}
            />
            <Button
              classN="header_login"
              type="button"
              children={<FontAwesomeIcon icon={faUser} />}
            />
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
