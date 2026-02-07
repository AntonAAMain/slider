"use client";

import { Title } from "@/components/home/title";
import cls from "./styles.module.scss";
import { Slider } from "@/components/home/slider";
import { ReduxProvider } from "@/shared/redux";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const HomePage = () => {
  return (
    <ReduxProvider>
      <div className={cls.container}>
        <Header />
        <Title />
        <Slider />
        <Footer />
      </div>
    </ReduxProvider>
  );
};
