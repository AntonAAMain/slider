import cls from "./styles.module.scss";

export const FooterList = () => {
  return (
    <div className={cls.container}>
      <p>Privacy policy</p>

      <p>Term & Conditions</p>

      <p>About us</p>

      <p>Contact</p>
    </div>
  );
};
