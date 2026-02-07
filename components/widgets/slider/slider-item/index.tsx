import Image from "next/image";
import cls from "./styles.module.scss";

interface Props {
  name: string;
}

export const SliderItem = ({ name }: Props) => {
  const randomImage = Math.floor(Math.random() * 3) + 1;

  return (
    <div className={cls.container}>
      <Image
        src={`/slider-${randomImage}.webp`}
        alt={name}
        width={253}
        height={253}
        className={cls.img}
      />
    </div>
  );
};
