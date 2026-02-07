import Image from "next/image";
import cls from "./styles.module.scss";

export const Header = () => {
  return (
    <header className={cls.container}>
      <div className={cls.content}>
        <Image alt="" width={53} height={53} src={"/header/logo.svg"} />

        <nav className={cls.nav}>
          <li>Discover</li>
          <li>Creators</li>
          <li>Sell</li>
          <li>Stats</li>
        </nav>
      </div>
    </header>
  );
};
