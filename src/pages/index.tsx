import Head from "next/head";
import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import LocaleSwitcher from "../components/localeSwitcher/LocaleSwitcher";
import { useLocale } from "../hooks/useLocale";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const translation = useLocale();
    return (
        <>
            <div style={{ background: "black" }}>
                <div style={{ color: "white" }}>{translation.welcome}</div>
                <LocaleSwitcher></LocaleSwitcher>
            </div>
        </>
    );
}
