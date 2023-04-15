import React from "react";
import styles from "../styles/components/footer/Footer.module.scss";
import { useLocale } from '../hooks/useLocale';
import Link from 'next/link';

const Footer = () => {
    const translation = useLocale();
    return (
        <>
        <div className={styles.footer_container}>
            <hr />
            <div className={styles.footer_first_container}>
                    {translation.footer_ul.map((item: string[], index: number) => {
                        const li = item.map((el) => {
                            return(
                                <li key={el}>
                                    {el}
                                </li>
                            )
                        })
                        return (
                            <ul key={index}>
                                {li}
                            </ul>
                        )
                    })}
                    <div className={styles.footer_third_content}>
                        <div className={styles.third_content_title}>
                        {translation.footer_third_title}
                        </div>
                        <span>
                        {translation.footer_third_span}
                        </span>
                        <button>
                            {translation.footer_third_button}
                        </button>
                        <div className={styles.third_content_buttons}>
                            <button>
                            <img src="https://img.icons8.com/ios-filled/50/FFFFFF/new-post.png"/>
                            </button>
                            <button>
                            <img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/FFFFFF/external-call-food-delivery-tanah-basah-glyph-tanah-basah.png"/>  
                            </button>
                        </div>
                        <Link href={""}>
                        ask.ivi.ru
                        </Link>
                        <p>
                        {translation.footer_third_p}
                        </p>
                    </div>
                    <div className={styles.footer_fourth_content}>
                        <Link href={""}>
                            <button>
                            <img src="https://img.icons8.com/ios/100/FFFFFF/adware-free.png"/>
                            </button>
                            <span>
                            {translation.footer_fourth}
                            </span>
                        </Link>
                    </div>
            </div>
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
                        )
                    })}
                </ul>
            </nav> 
        </div>
        </>
    );
};

export default Footer;
