import React from "react";
import styles from "../../styles/pages/Movies.module.scss";
import Link from "next/link";
import film from "../../../public/data/example.json";
import SortingDropdown from "../../components/UI/SortingDropdown";
import RangeSlider from "../../components/UI/RangeSlider";

const Movies = () => {
  return (
    <div className={styles.movies}>
      <Link href={`/movies/${film.id}`}>{film.name}</Link>
      <SortingDropdown />
      <RangeSlider step={0.1} min={0} max={10} name={"Рейтинг кинопоиска"} />
      <RangeSlider
        step={10000}
        min={0}
        max={1000000}
        name={"Количество оценок кинопоиска"}
      />
    </div>
  );
};

export default Movies;
