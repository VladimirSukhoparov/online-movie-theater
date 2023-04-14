import React from 'react';
import styles from "../styles/components/footer/Footer.module.scss";
import { useLocale } from '../hooks/useLocale';
import Link from 'next/link';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    const translation = useLocale();
    return (
        <div className={styles.footer}>
            <nav>
                <ul>
                    {translation.header.map((el) => {
                        return (
                            <Link href={el.path} key={el.text}>
                                <li >
                                    <img src={el.img} alt="" />
                                    <span>{el.text}</span>
                                </li>
                            </Link>
                        )
                    })}
                </ul>
            </nav> 
        </div>
    );
};

export default Footer;