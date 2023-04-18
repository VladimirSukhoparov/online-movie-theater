import { useRouter } from "next/router";
import { ru } from "../locales/ru";
import { en } from "../locales/en";

export const useLocale = () => {
  const { locale } = useRouter();
  const translation = locale === "en" ? en : ru;
  return translation;
};
