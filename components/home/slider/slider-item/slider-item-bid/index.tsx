import Image from "next/image";
import { useMemo } from "react";
import cls from "./styles.module.scss";

export const SliderItemBid = () => {
  const bid = useMemo(
    () => (Math.floor(Math.random() * 51) / 10).toFixed(1),
    []
  );

  return (
    <div className={cls.container}>
      <div className={cls.price}>
        <div className={cls.name}>Current bid</div>

        <div className={cls.value}>
          <Image
            width={12}
            height={18}
            style={{ marginLeft: "5px" }}
            src={"/bid.svg"}
            alt=""
          />

          <p>{bid}</p>
        </div>
      </div>

      <button className={cls.btn}>Place bid</button>
    </div>
  );
};
