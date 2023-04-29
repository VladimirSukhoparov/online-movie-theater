import { useRouter } from "next/router";
import commonRU from "../locales/ru/common.json";
import headerRU from "../locales/ru/header.json";
import footerRU from "../locales/ru/footer.json";
import commonEN from "../locales/en/common.json";
import headerEN from "../locales/en/header.json";
import footerEN from "../locales/en/footer.json";

export const useLocale = () => {
    const { locale } = useRouter();
    const ru = {
        header: headerRU,
        footer: footerRU,
        common: commonRU,
    };
    const en = {
        header: headerEN,
        footer: footerEN,
        common: commonEN,
    };
    const translation = locale === "en" ? en : ru;
    return translation;
};
