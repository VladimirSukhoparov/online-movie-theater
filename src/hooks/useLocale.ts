import { useRouter } from "next/router";
import commonRU from "../locales/ru/common.json";
import headerRU from "../locales/ru/header.json";
import footerRU from "../locales/ru/footer.json";
import commonEN from "../locales/en/common.json";
import headerEN from "../locales/en/header.json";
import footerEN from "../locales/en/footer.json";
import cardMovieRU from '../locales/ru/cardMovie.json'
import cardMovieEN from '../locales/en/cardMovie.json'
import relatedListRU from '../locales/ru/relatedList.json'
import relatedListEN from '../locales/en/relatedList.json'
import creatorsListRU from '../locales/ru/creatorsList.json'
import creatorsListEN from '../locales/en/creatorsList.json'
import trailersMovieRU from '../locales/ru/trailersMovie.json'
import trailersMovieEN from '../locales/en/trailersMovie.json'
import allDevicesRU from '../locales/ru/allDevices.json'
import allDevicesEN from '../locales/en/allDevices.json'
import movieDetailsRU from '../locales/ru/movieDetails.json'
import movieDetailsEN from '../locales/en/movieDetails.json'


export const useLocale = () => {
    const { locale } = useRouter();
    const ru = {
        header: headerRU,
        footer: footerRU,
        common: commonRU,
        cardMovie:cardMovieRU,
        relatedList:relatedListRU,
        creatorsList:creatorsListRU,
        trailersMovie:trailersMovieRU,
        allDevices:allDevicesRU,
        movieDetails:movieDetailsRU,
    };
    const en = {
        header: headerEN,
        footer: footerEN,
        common: commonEN,
        cardMovie:cardMovieEN,
        relatedList:relatedListEN,
        creatorsList:creatorsListEN,
        trailersMovie:trailersMovieEN,
        allDevices:allDevicesEN,
        movieDetails:movieDetailsEN,
    };
    const translation = locale === "en" ? en : ru;
    return translation;
};
