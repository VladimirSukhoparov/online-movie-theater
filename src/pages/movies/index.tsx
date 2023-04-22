import React from "react";
import Movie from "./id";
import styles from "../../styles/pages/Movies.module.scss";
import Link from "next/link";

const Movies = () => {
  return (
    <div className={styles.movies}>
      <Link href={'/movies/id'}>Фильм</Link>
    </div>
  );
};

export default Movies;
