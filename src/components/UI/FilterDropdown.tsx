import { FC, useState } from "react";
import styles from "../../styles/components/UI/FilterDropdown.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import ImageCarousel from "../ImageCarousel";

interface FilterDropdownProps {
  name: string;
  bottomItems: JSX.Element[];
  topItems: JSX.Element[];
}

const FilterDropdown: FC<FilterDropdownProps> = ({
  name,
  bottomItems,
  topItems,
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const [checkboxes, setCheckboxes] = useState([]);

  return (
    <div className={styles.container}>
      <div
        className={[styles.name, isOpened ? styles.name_opened : null].join(
          " "
        )}
        onClick={() => setIsOpened(!isOpened)}
      >
        <div className={styles.text}>
          <div className={styles.title}>{name}</div>
          <div className={styles.subtitle}>тут будут выбранные жанры</div>
        </div>
        {isOpened ? (
          <FontAwesomeIcon icon={faChevronUp} />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} />
        )}
      </div>
      {isOpened && (
        <div className={styles.dropdown}>
          <ImageCarousel items={topItems} />
          <ul className={styles.list}>
            {bottomItems.map((el, index) => (
              <li className={styles.item} key={index}>
                {el}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
