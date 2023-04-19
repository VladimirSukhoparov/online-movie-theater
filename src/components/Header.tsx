import React, { useState } from "react";
import styles from "../styles/components/header/Header.module.scss";
import { useLocale } from "../hooks/useLocale";
import Link from "next/link";
import LocaleSwitcher from "./LocaleSwitcher";
import Button from "./reusedСomponents/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUser } from "@fortawesome/free-solid-svg-icons";
import HeaderBody from "./reusedСomponents/HeaderBody";

import cn from "classnames";
import classes from "../styles/components/header/Header.module.scss";

const Header = () => {
  const translation = useLocale();
  const [isHovered, setIsHovered] = useState("");
  const [propChildren, setPropChildren] = useState(null)
  const [headerBlock, setHeaderBlock] = useState('')
 

  const visibleNotification = () => {
   !isHovered && setIsHovered("header__visible");
   setHeaderBlock('notification')
    setPropChildren(<><FontAwesomeIcon icon={faBell} /><p>{translation.header_notification}</p></>)
  };

  const visibleLogin = () => {
    !isHovered && setIsHovered("header__visible");
    setHeaderBlock('login')
    setPropChildren(null)
  };

  const hideBlock = () => {
    setIsHovered("");
  };

  const mainCn = cn(
    classes.header__notVisible,
    isHovered === "header__visible" && classes.header__visible,
  
  );
  return (
    <>
      <div className={styles.header}>
        <div className={styles.header_body}>
          <div className={styles.header_content}>
            <div className={styles.header_content_first}>
              <img className={styles.header__logo}
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
              <div  onMouseOver={visibleNotification} >
                <Button
                  classN="header_notification"
                  type="button"
                  children={<FontAwesomeIcon icon={faBell} />}
                />
              </div>
              <div  onMouseOver={visibleLogin}>
                <Button
                  classN="header_login"
                  type="button"
                  children={<FontAwesomeIcon icon={faUser} />}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={mainCn} >
        <hr />
        <div onMouseOut={hideBlock}>
        <HeaderBody
          classN={headerBlock}
          children={propChildren}
          />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
