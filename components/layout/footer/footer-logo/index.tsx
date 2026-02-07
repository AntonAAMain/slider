import Image from "next/image";
import cls from "./styles.module.scss";

export const FooterLogo = () => {
  return (
    <div className={cls.container}>
      <Image src={"/footer/logo.svg"} alt="" width={65} height={65} />

      <div className={cls.name}>DiveSea</div>
    </div>
  );
};
