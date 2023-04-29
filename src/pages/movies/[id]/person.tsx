import React from "react";
import MovieDetails from "../../../components/movieComponents/MovieDetails";
import PersonCard from "../../../components/movieComponents/PersonCard";

import film from "../../../../public/data/example.json";

import styles from "../../../styles/pages/person.module.scss";

const Person = ({ id }) => {
    let [director] = film.persons.filter(
        (value) => value.enProfession == "director"
    );
    let actors = film.persons.filter((value) => value.enProfession == "actor");
    let producers = film.persons.filter(
        (value) => value.enProfession == "producer"
    );
    let [operator] = film.persons.filter(
        (value) => value.enProfession == "operator"
    );
    let designers = film.persons.filter(
        (value) => value.enProfession == "designer"
    );
    let editors = film.persons.filter(
        (value) => value.enProfession == "editor"
    );

    return (
        <MovieDetails id={id}>
            <div className={styles.container}>
                <p className={styles.container_title}>Режиссёр</p>
                <div className={styles.container_content}>
                    <PersonCard
                        name={director.name}
                        photo={director.photo}
                        persons={"persons"}
                    />
                </div>
            </div>
            <div className={styles.container}>
                <p className={styles.container_title}>Актёры</p>
                <div className={styles.container_content}>
                    {actors.map((el) => (
                        <PersonCard
                            name={el.name}
                            photo={el.photo}
                            persons={"persons"}
                            key={el.id}
                        />
                    ))}
                </div>
            </div>
            <div className={styles.container}>
                <p className={styles.container_title}>Продюсеры</p>
                <div className={styles.container_content}>
                    {producers.map((el) => (
                        <PersonCard
                            name={el.name}
                            photo={el.photo}
                            persons={"persons"}
                            key={el.id}
                        />
                    ))}
                </div>
            </div>
            <div className={styles.container}>
                <p className={styles.container_title}>Оператор</p>
                <div className={styles.container_content}>
                    <PersonCard
                        name={operator.name}
                        photo={operator.photo}
                        persons={"persons"}
                    />
                </div>
            </div>
            <div className={styles.container}>
                <p className={styles.container_title}>Художники</p>
                <div className={styles.container_content}>
                    {designers.map((el) => (
                        <PersonCard
                            name={el.name}
                            photo={el.photo}
                            persons={"persons"}
                            key={el.id}
                        />
                    ))}
                </div>
            </div>
            <div className={styles.container}>
                <p className={styles.container_title}>Монтаж</p>
                <div className={styles.container_content}>
                    {editors.map((el) => (
                        <PersonCard
                            name={el.name}
                            photo={el.photo}
                            persons={"persons"}
                            key={el.id}
                        />
                    ))}
                </div>
            </div>
        </MovieDetails>
    );
};

export default Person;

export const getServerSideProps = (context) => {
    return {
        props: {
            id: context.query.id,
        },
    };
};
