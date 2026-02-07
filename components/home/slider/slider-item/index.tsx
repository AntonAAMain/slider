import Image from "next/image";
import { useMemo } from "react";
import cls from "./styles.module.scss";
import { SliderItemTimer } from "./slider-item-timer";
import { SliderItemBid } from "./slider-item-bid";

interface Props {
  name: string;
}

export const SliderItem = ({ name }: Props) => {
  const randomImage = useMemo(() => Math.floor(Math.random() * 3) + 1, []);

  return (
    <div className={cls.container}>
      <SliderItemTimer />

      <div className={cls.img}>
        <Image src={`/slider-${randomImage}.webp`} alt={name} fill />
      </div>

      <div className={cls.name}>{name}</div>

      <SliderItemBid />
    </div>
  );
};
