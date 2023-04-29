import React from "react";
import MovieDetails from "../../../components/movieComponents/MovieDetails";
import PersonCard from "../../../components/movieComponents/PersonCard";

import film from "../../../../public/data/example.json";
import { useLocale } from "../../../hooks/useLocale";
import styles from "../../../styles/pages/person.module.scss";

const Person = ({ id }) => {
    const { creatorsList: translation } = useLocale();
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
                <p className={styles.container_title}>{translation.title=="Actors and creators"?director.enProfession.replace( 'd', "D" ):director.profession.replace( 'р', "Р" ).slice(0,-1)}</p>
                <div className={styles.container_content}>
                    <PersonCard
                        name={translation.title=="Actors and creators"?director.enName:director.name}
                        photo={director.photo}
                        persons={"persons"}
                    />
                </div>
            </div>
            <div className={styles.container}>
                <p className={styles.container_title}>{translation.title=="Actors and creators"?actors[0].enProfession.replace( 'a', "A" )+'s':actors[0].profession.replace( 'а', "А" )}</p>
                <div className={styles.container_content}>
                    {actors.map((el) => (
                        <PersonCard
                            name={translation.title=="Actors and creators"?el.enName:!!el.name?el.name:el.enName}
                            photo={el.photo}
                            persons={"persons"}
                            key={el.id}
                        />
                    ))}
                </div>
            </div>
            <div className={styles.container}>
                <p className={styles.container_title}>{translation.title=="Actors and creators"?producers[0].enProfession.replace( 'p', "P" )+'s':producers[0].profession.replace( 'п', "П" )}</p>
                <div className={styles.container_content}>
                    {producers.map((el) => (
                        <PersonCard
                            name={translation.title=="Actors and creators"?el.enName:el.name}
                            photo={el.photo}
                            persons={"persons"}
                            key={el.id}
                        />
                    ))}
                </div>
            </div>
            <div className={styles.container}>
                <p className={styles.container_title}>{translation.title=="Actors and creators"?operator.enProfession.replace( 'o', "O" ):operator.profession.replace( 'о', "О" ).slice(0,-1)}</p>
                <div className={styles.container_content}>
                    <PersonCard
                        name={translation.title=="Actors and creators"?operator.enName:operator.name}
                        photo={operator.photo}
                        persons={"persons"}
                    />
                </div>
            </div>
            <div className={styles.container}>
                <p className={styles.container_title}>{translation.title=="Actors and creators"?designers[0].enProfession.replace( 'd', "D" )+'s':designers[0].profession.replace( 'х', "Х" )}</p>
                <div className={styles.container_content}>
                    {designers.map((el) => (
                        <PersonCard
                            name={translation.title=="Actors and creators"?el.enName:el.name}
                            photo={el.photo}
                            persons={"persons"}
                            key={el.id}
                        />
                    ))}
                </div>
            </div>
            <div className={styles.container}>
                <p className={styles.container_title}>{translation.title=="Actors and creators"?editors[0].enProfession.replace( 'e', "E" )+'s':editors[0].profession.replace( 'м', "М" ).slice(0,-3)}</p>
                <div className={styles.container_content}>
                    {editors.map((el) => (
                        <PersonCard
                            name={translation.title=="Actors and creators"?el.enName:el.name}
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
