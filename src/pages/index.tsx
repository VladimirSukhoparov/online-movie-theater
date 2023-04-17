import React from "react";
import { Inter } from "next/font/google";
import styles from "../styles/pages/MainPage.module.scss";
import { useLocale } from "../hooks/useLocale";
import Top10Card from "../components/Top10Card";
import ImageCarousel from "../components/ImageCarousel";
import top10json from "../../public/data/top10List.json";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const translation = useLocale();
    return (
        <>
            <section className={styles.top10}>
                <div className={styles.top10__title}>
                    <img
                        src="https://solea-parent.dfs.ivi.ru/picture/bypass/top10.svg"
                        alt="top-10"
                    />
                    <span className={styles.top10__name}>
                        {translation.of_the_week}
                    </span>
                </div>
                <ImageCarousel
                    items={top10json.map((item) => (
                        <Top10Card
                            image={item.image}
                            name={item.name}
                            numbers={item.numbers}
                            link={item.link}
                        />
                    ))}
                />
            </section>
        </>
    );
}
