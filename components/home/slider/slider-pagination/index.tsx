import Image from "next/image";
import cls from "./styles.module.scss";
import cn from "classnames";

interface Props {
  next: () => void;
  prev: () => void;
}

export const SliderPagination = ({ next, prev }: Props) => {
  return (
    <div className={cls.container}>
      <button onClick={prev} className={cls.btn}>
        <img className={cls.arrow} src="/arrow.svg" alt="" />
      </button>

      <div className={cls.border}></div>

      <button onClick={next} className={cn(cls.btn, cls.reversedBtn)}>
        <img className={cls.arrow} src="/arrow.svg" alt="" />
      </button>
    </div>
  );
};
