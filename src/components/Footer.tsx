import React from "react";
import styles from "../styles/components/footer/Footer.module.scss";
import { useLocale } from "../hooks/useLocale";
import Link from "next/link";
import Button from "./reusedСomponents/Button";

const Footer = () => {
  const translation = useLocale();

  let links = [
    "https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_vkontakte.svg",
    "https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_odnoklassniki.svg",
    "https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_twitter.svg",
    "https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_viber.svg",
    "https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_linkedin.svg",
    "https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_telegram.svg",
  ];

  return (
    <>
      <div className={styles.footer_container}>
        <hr />
        <div className={styles.footer_first_container}>
          {translation.footer_ul.map((item: string[], index: number) => {
            const li = item.map((el) => {
              return <li key={el}>{el}</li>;
            });
            return <ul key={index}>{li}</ul>;
          })}
          <div className={styles.footer_third_content}>
            <div className={styles.third_content_title}>
              {translation.footer_third_title}
            </div>
            <span>{translation.footer_third_span}</span>
            <Button
              classN="footer_third_button"
              type="button"
              children={translation.footer_third_button}
            />
            <div className={styles.third_content_buttons}>
              <button>
                <img src="https://img.icons8.com/ios-filled/50/FFFFFF/new-post.png" />
              </button>
              <button>
                <img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/FFFFFF/external-call-food-delivery-tanah-basah-glyph-tanah-basah.png" />
              </button>
            </div>
            <Link href={""}>ask.ivi.ru</Link>
            <p>{translation.footer_third_p}</p>
          </div>
          <div className={styles.footer_fourth_content}>
            <Link href={""}>
              <button>
                <img src="https://img.icons8.com/ios/100/FFFFFF/adware-free.png" />
              </button>
              <span>{translation.footer_fourth}</span>
            </Link>
          </div>
        </div>
        <hr />
        <div className={styles.footer_second_container}>
          <div className={styles.first_content}>
            <ul>
              {translation.footer_second_ul.map((el) => {
                return (
                  <li key={el.img}>
                    <img src={el.img} alt="" />
                    <div className={styles.text}>
                      <p>{el.p}</p>
                      <span>{el.text}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className={styles.first_content_info}>
              <div>© 2023 ООО «Иви.ру»</div>
              <div>
                HBO ® and related service marks are the property of Home Box
                Office, Inc
              </div>
            </div>
          </div>
          <div className={styles.second_content}>
            <ul>
              {links.map((el) => {
                return (
                  <li key={el}>
                    <Button
                      classN="second_content"
                      type="button"
                      children={<img src={el} alt="" />}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.footer_container_mobile}>
        <span>
          HBO ® and related service marks are the property of Home Box Office,
          Inc
        </span>
      </div>
      <div className={styles.footer_mobile}>
        <nav>
          <ul>
            {translation.footer_mobile.map((el) => {
              return (
                <Link href={el.path} key={el.text}>
                  <li>
                    <img src={el.img} alt="" />
                    <span>{el.text}</span>
                  </li>
                </Link>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Footer;
