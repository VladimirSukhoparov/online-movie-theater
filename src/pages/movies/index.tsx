import React from "react";
import styles from "../../styles/pages/Movies.module.scss";
import Link from "next/link";
import testFilm from '../../../public/data/testFilm.json'

const Movies = () => {
  return (
    <div className={styles.movies}>
      <Link href={`/movies/${testFilm[0].id}`}>{testFilm[0].name}</Link>
    </div>
  );
};

export default Movies;
