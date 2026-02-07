import { SliderItem } from "./slider-item";
import { SliderPagination } from "./slider-pagination";
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
    loading,
    error,
  } = useSlider();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-zinc-100 gap-6">
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
  );
};
