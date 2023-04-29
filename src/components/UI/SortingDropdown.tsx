import { FC, useRef, useState } from "react";
import styles from "../../styles/components/reusedСomponents/SortingDropdown.module.scss";
import { useLocale } from "../../hooks/useLocale";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const SortingDropdown: FC = () => {
  const { common: translation } = useLocale();
  const [title, ...values] = Object.values(translation.sorting);

  const [checkedIndex, setCheckedIndex] = useState(0);
  const [isOpened, setIsOpened] = useState(false);

  const optionsRef = useRef([]);

  const onOptionClick = (event) => {
    const index = event.target.getAttribute("data-index");
    optionsRef.current[checkedIndex].classList.remove(styles.option_checked);
    event.target.classList.add(styles.option_checked);
    setCheckedIndex(index);
    setIsOpened(false);
  };

  return (
    <div className={styles.dropdown}>
      <div className={styles.title} onClick={() => setIsOpened(!isOpened)}>
        <FontAwesomeIcon icon={faBars} />
        <span>{values[checkedIndex]}</span>
        {isOpened ? (
          <FontAwesomeIcon icon={faChevronUp} />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} />
        )}
      </div>
      <ul
        className={[
          styles.options,
          isOpened ? styles.options_opened : null,
        ].join(" ")}
      >
        <li className={[styles.option, styles.option_disabled].join(" ")}>
          {title}
        </li>
        {values.map((name, index) => (
          <li
            className={[
              styles.option,
              index === checkedIndex ? styles.option_checked : null,
            ].join(" ")}
            onClick={onOptionClick}
            data-index={index}
            ref={(el) => (optionsRef.current[index] = el)}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortingDropdown;
