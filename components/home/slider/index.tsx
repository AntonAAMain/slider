import { div } from "framer-motion/client";
import { SliderItem } from "./slider-item";
import { SliderPagination } from "./slider-pagination";
import cls from "./styles.module.scss";
import { SLIDE_WIDTH, useSlider } from "./useSlider";

export const Slider = () => {
  const {
    containerRef,
    infiniteSlides,
    offset,
    totalWidth,
    noTransition,
    next,
    prev,
  } = useSlider();

  return (
    <div className={cls.container}>
      <div className="flex flex-col items-center justify-center p-4 gap-6">
        <div className="w-full flex flex-col items-center gap-6 px-4">
          <div ref={containerRef} className="w-full overflow-hidden">
            <div
              className="flex"
              style={{
                gap: 40,
                transform: `translateX(-${offset}px)`,
                width: totalWidth,
                transition: noTransition ? "none" : "transform 300ms ease-out",
              }}
            >
              {infiniteSlides.map((item, i) => (
                <SliderItem key={`${item.id}-${i}`} name={item.name} />
              ))}
            </div>
          </div>

          <SliderPagination next={next} prev={prev} />
        </div>
      </div>
    </div>
  );
};
