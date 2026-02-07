import { FooterList } from "./footer-list";
import { FooterLogo } from "./footer-logo";

import cls from "./styles.module.scss";

export const Footer = () => {
  return (
    <footer className={cls.container}>
      <div className={cls.content}>
        <div className={cls.header}>
          <FooterLogo />
          <FooterList />
        </div>

        <div className={cls.border}></div>

        <div className={cls.year}>© 2023</div>
      </div>
    </footer>
  );
};
