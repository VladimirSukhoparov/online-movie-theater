import React, { useState } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import films from "../../../../public/data/example.json";

import styles from "../../../styles/pages/person.module.scss";

const Person = ({ id }) => {
  const film = films.id === id && films;
  const [isOpen, setIsOpen] = useState(true);

  function openModal() {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      ariaHideApp={false}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <div className={styles.popup}>
      <Link href={`/movies/${id}`} className={styles.popup_back} onClick={closeModal}>
        <FontAwesomeIcon icon={faChevronLeft} />
        <p>
        К фильму
        </p>
      </Link>
      <div className={styles.popup_box}>

      </div>
      </div>
    </Modal>
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
