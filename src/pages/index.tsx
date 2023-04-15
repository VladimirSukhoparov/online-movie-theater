import Head from "next/head";
import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../styles/pages/MainPage.module.scss";
import LocaleSwitcher from "../components/LocaleSwitcher";
import { useLocale } from "../hooks/useLocale";
import Top10Card from "../components/Top10Card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const translation = useLocale();
    return (
        <>
            <div style={{ background: "black" }}>
                <div style={{ color: "white" }}>{translation.welcome}</div>
                <LocaleSwitcher></LocaleSwitcher>
            </div>
            <section className={styles.top10}>
                <div className={styles.top10__title}>
                    <img
                        src="https://solea-parent.dfs.ivi.ru/picture/bypass/top10.svg"
                        alt="top-10"
                    />
                    <span className={styles.top10__name}>за неделю</span>
                </div>
                <Top10Card
                    image={{
                        src: "https://thumbs.dfs.ivi.ru/storage28/contents/f/2/7e50d51661b729863f8584ee559242.jpg//304x620//?q=85",
                        alt: "Шпион",
                    }}
                    name={{
                        src: "https://thumbs.dfs.ivi.ru/storage9/contents/b/6/356258bbe7c5ba5b5b40251be3d48f.png/x200/?q=85",
                    }}
                    number={{
                        src: "https://solea-parent.dfs.ivi.ru/picture/bypass/number1.svg",
                    }}
                    link={""}
                />
            </section>
        </>
    );
}
