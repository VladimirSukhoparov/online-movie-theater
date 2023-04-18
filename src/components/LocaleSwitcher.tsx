import { useRouter } from "next/router";
import React from "react";
import { FC } from "react";
import Link from "next/link";
import styles from "../styles/components/LocaleSwitcher.module.scss";
import { useLocale } from "../hooks/useLocale";

const LocaleSwitcher: FC = () => {
  const { pathname, query, locale } = useRouter();
  const translation = useLocale();

  return (
    <>
      <Link
        href={{ pathname, query }}
        locale={"ru"}
        className={[
          styles.link,
          locale === "ru" ? styles["link_active"] : "",
        ].join(" ")}
      >
        {translation["locale-name_ru"]}
      </Link>
      <Link
        href={{ pathname, query }}
        locale={"en"}
        className={[
          styles.link,
          locale === "en" ? styles["link_active"] : "",
        ].join(" ")}
      >
        {translation["locale-name_en"]}
      </Link>
    </>
  );
};

export default LocaleSwitcher;
