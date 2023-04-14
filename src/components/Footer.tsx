import React from 'react';
import styles from "../styles/components/footer/Footer.module.scss";
import { useLocale } from '../hooks/useLocale';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    const translation = useLocale();
    return (
        <>
        <div className={styles.footer_container}>
            <hr />
            <div className={styles.footer_first_content}>
                    {translation.footer_ul.map((item: string[]) => {
                        const li = item.map((el) => {
                            return(
                                <li>
                                    {el}
                                </li>
                            )
                        })
                        return (
                            <ul>
                                {li}
                            </ul>
                        )
                    })}
            </div>
        </div>
        <div className={styles.footer_mobile}>
            <nav>
                <ul>
                    {translation.footer_mobile.map((el) => {
                        return (
                            <Link href={el.path}>
                                <li key={el.text}>
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