import React from "react";
import MovieDetails from "../../../components/movieComponents/MovieDetails";
import film from "../../../../public/data/example.json";
import styles from "../../../styles/pages/trailers.module.scss";

import TrailersMovie from "../../../components/movieComponents/TrailersMovie";

const Trailers = ({ id }) => {
    const trailers = film.videos.trailers;
    return (
        <MovieDetails id={id}>
            <TrailersMovie />
        </MovieDetails>
    );
};

export default Trailers;
export const getServerSideProps = (context) => {
    return {
        props: {
            id: context.query.id,
        },
    };
};
