import React from "react";
import styles from "../styles/pages/MainPage.module.scss";
import { useLocale } from "../hooks/useLocale";
import Top10Card from "../components/Top10Card";
import ImageCarousel from "../components/ImageCarousel";
import top10json from "../../public/data/top10List.json";
import promojson from "../../public/data/promoList.json";
import posterjson from "../../public/data/posterListTEMP.json";
import PromoCard from "../components/PromoCard";
import PosterCard from "../components/posterComponents/PosterCard";
import Title from "../components/Title";

const POSTER_CARD_SAMPLE = (
  <PosterCard
    link={posterjson.link}
    title={posterjson.title}
    price={posterjson.price}
    image={posterjson.image}
    age={posterjson.age}
    info={posterjson.info}
    name={posterjson.name}
    seasons={posterjson.seasons}
    rating={posterjson.rating}
    progress={posterjson.progress}
    charts={posterjson.charts}
  />
);

export default function Home() {
  const { common: translation } = useLocale();
  return (
    <div className={styles.container}>
      <ImageCarousel
        promoMod
        items={promojson.map((item) => (
          <PromoCard
            image={item.image}
            title={item.title}
            synopsis={item.synopsis}
          />
        ))}
      />
      <section className={styles.top10}>
        <div className={styles.top10__title}>
          <img
            src="https://solea-parent.dfs.ivi.ru/picture/bypass/top10.svg"
            alt="top-10"
          />
          <span className={styles.top10__name}>{translation.of_the_week}</span>
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
      <section className={styles.posters}>
        <Title
          link={""}
          name={"Лучшие комедии"}
          className={styles.posters__title}
        />
        <ImageCarousel
          items={[
            POSTER_CARD_SAMPLE,
            POSTER_CARD_SAMPLE,
            POSTER_CARD_SAMPLE,
            POSTER_CARD_SAMPLE,
            POSTER_CARD_SAMPLE,
            POSTER_CARD_SAMPLE,
            POSTER_CARD_SAMPLE,
            POSTER_CARD_SAMPLE,
            POSTER_CARD_SAMPLE,
            POSTER_CARD_SAMPLE,
            POSTER_CARD_SAMPLE,
          ]}
        />
      </section>
      <section className={styles.posters}>
        <Title
          link={""}
          name={"Добрые мультсериалы"}
          className={styles.posters__title}
        />
        <ImageCarousel
          items={[
            POSTER_CARD_SAMPLE,
            POSTER_CARD_SAMPLE,
            POSTER_CARD_SAMPLE,
            POSTER_CARD_SAMPLE,
            POSTER_CARD_SAMPLE,
            POSTER_CARD_SAMPLE,
            POSTER_CARD_SAMPLE,
            POSTER_CARD_SAMPLE,
            POSTER_CARD_SAMPLE,
            POSTER_CARD_SAMPLE,
            POSTER_CARD_SAMPLE,
          ]}
        />
      </section>
    </div>
  );
}
