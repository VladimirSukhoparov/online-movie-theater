import { useRouter } from "next/router";
import ru from "../locales/ru.json";
import en from "../locales/en.json";

export const useLocale = () => {
    const { locale } = useRouter();
    const translation = locale === "en" ? en : ru;
    return translation;
};
