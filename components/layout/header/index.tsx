"use client";

import Image from "next/image";
import cls from "./styles.module.scss";
import React from "react";
import { useMediaQuery } from "@/shared/hooks/useMediaQuery";

export const Header = () => {
  const [isActive, setIsActive] = React.useState<boolean>(false);

  const isMobile = useMediaQuery("(max-width:1024px)");

  const toggle = () => setIsActive((prev) => !prev);

  const isNavShown = (isMobile && isActive) || !isMobile;

  return (
    <header className={cls.container}>
      <div className={cls.content}>
        <div className={cls.logo}>
          <Image alt="" width={53} height={53} src={"/header/logo.svg"} />

          {isMobile && <div className={cls.logoName}>DiveSea</div>}
        </div>

        {isNavShown && (
          <nav className={cls.nav}>
            <li>Discover</li>
            <li>Creators</li>
            <li>Sell</li>
            <li>Stats</li>
          </nav>
        )}

        {isMobile && (
          <Image
            style={{ cursor: "pointer" }}
            onClick={toggle}
            src={`/header/${isActive ? "cross" : "menu"}.svg`}
            alt=""
            width={40}
            height={40}
          />
        )}
      </div>
    </header>
  );
};
