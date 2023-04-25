import React from "react";
import CardMovie from "../../components/movieComponents/CardMovie";
import film from "../../../public/data/example.json";
import RelatedList from "../../components/movieComponents/RelatedList";
import CreatorsList from "../../components/movieComponents/CreatorsList";
import AllDevices from "../../components/movieComponents/AllDevices";

import styles from "../../styles/pages/[id].module.scss";

const Movie = ({ id }) => {
  return (
    <div className={styles.movie}>
      <CardMovie film={film.id == id && film} />
      <RelatedList film={film.id == id && film} />
      <CreatorsList film={film.id == id && film} />
      <AllDevices film={film.id == id && film} />
    </div>
  );
};

export default Movie;

export const getServerSideProps = (context) => {
  return {
    props: {
      id: context.query.id,
    },
  };
};
