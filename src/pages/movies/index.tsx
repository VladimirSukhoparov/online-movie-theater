import React from "react";
import styles from "../../styles/pages/Movies.module.scss";
import Link from "next/link";
import film from "../../../public/data/example.json";
import SortingDropdown from "../../components/UI/SortingDropdown";
import RangeSlider from "../../components/UI/RangeSlider";
import FilterDropdown from "../../components/UI/FilterDropdown";
import { useLocale } from "../../hooks/useLocale";
import {
  faMapLocationDot,
  faFaceDizzy,
  faFaceSmile,
  faGun,
  faGhost,
  faGlobe,
  faHeart,
  faFlask,
  faHatWizard,
  faPeopleRoof,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import Checkbox, { CheckboxTypeEnum } from "../../components/UI/Checkbox";

const Movies = () => {
  const { common } = useLocale();
  const countriesCarousel = [
    common.countries_list.Russia,
    common.countries_list.USA,
    common.countries_list["Great Britain"],
    common.countries_list.France,
    common.countries_list.USSR,
    common.countries_list.Italy,
    common.countries_list.Canada,
    common.countries_list.Spain,
    common.countries_list.Germany,
    common.countries_list.India,
  ];
  const genresCarousel = [
    {
      name: common.genres_list.drama,
      icon: faFaceDizzy,
    },
    {
      name: common.genres_list.comedies,
      icon: faFaceSmile,
    },
    {
      name: common.genres_list.action,
      icon: faGun,
    },
    {
      name: common.genres_list.thrillers,
      icon: faGhost,
    },
    {
      name: common.genres_list.adventures,
      icon: faMapLocationDot,
    },
    {
      name: common.genres_list.foreign,
      icon: faGlobe,
    },
    {
      name: common.genres_list.melodrama,
      icon: faHeart,
    },
    {
      name: common.genres_list["science fiction"],
      icon: faFlask,
    },
    {
      name: common.genres_list.fantasy,
      icon: faHatWizard,
    },
    {
      name: common.genres_list.family,
      icon: faPeopleRoof,
    },
  ];

  return (
    <div className={styles.movies}>
      <Link href={`/movies/${film.id}`}>{film.name}</Link>
      <SortingDropdown />
      <RangeSlider step={0.1} min={0} max={10} name={"Рейтинг кинопоиска"} />
      <RangeSlider
        step={10000}
        min={0}
        max={1000000}
        name={"Количество оценок кинопоиска"}
      />
      <div className={styles.filters}>
        <FilterDropdown
          name={common.countires}
          bottomItems={Object.values(common.countries_list)
            .sort((a, b) => a.localeCompare(b))
            .map((el) => (
              <Checkbox type={CheckboxTypeEnum.TICK} name={el} icon={faCheck} />
            ))}
          topItems={countriesCarousel.map((el) => (
            <Checkbox type={CheckboxTypeEnum.SIMPLE} name={el} />
          ))}
        />
        <FilterDropdown
          name={common.genres}
          bottomItems={Object.values(common.genres_list)
            .sort((a, b) => a.localeCompare(b))
            .map((el) => (
              <Checkbox type={CheckboxTypeEnum.TICK} name={el} icon={faCheck} />
            ))}
          topItems={genresCarousel.map((el) => (
            <Checkbox
              type={CheckboxTypeEnum.IMAGE}
              name={el.name}
              icon={el.icon}
            />
          ))}
        />
      </div>
    </div>
  );
};

export default Movies;
