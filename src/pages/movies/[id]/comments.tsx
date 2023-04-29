import React from "react";
import MovieDetails from "../../../components/movieComponents/MovieDetails";

const Comments = ({ id }) => {
    return <MovieDetails id={id}>comments</MovieDetails>;
};

export default Comments;
export const getServerSideProps = (context) => {
    return {
        props: {
            id: context.query.id,
        },
    };
};
