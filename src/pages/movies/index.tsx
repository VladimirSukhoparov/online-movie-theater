import React from "react";
import styles from "../../styles/pages/Movies.module.scss";
import Link from "next/link";
import film from '../../../public/data/example.json'

const Movies = () => {
  return (
    <div className={styles.movies}>
      <Link href={`/movies/${film.id}`}>{film.name}</Link>
    </div>
  );
};

export default Movies;
