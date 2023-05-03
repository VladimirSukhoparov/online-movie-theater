import React from "react";
import CardMovie from "../../components/movieComponents/CardMovie";
import film from "../../../public/data/example.json";
import RelatedList from "../../components/movieComponents/RelatedList";
import CreatorsList from "../../components/movieComponents/CreatorsList";
import AllDevices from "../../components/movieComponents/AllDevices";

import styles from "../../styles/pages/[id].module.scss";
import TrailersMovie from "../../components/movieComponents/TrailersMovie";

const Movie = ({ id }) => {
  
  
  return (
    <div className={styles.movie}>
      <CardMovie film={ film} />
      <RelatedList film={ film} />
      <CreatorsList film={film} id={id}/>
      <TrailersMovie title={'title'} id={id}/>
      <AllDevices film={film} />
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
