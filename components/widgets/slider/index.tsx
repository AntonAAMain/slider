import { SliderItem } from "./slider-item";
import { SLIDE_WIDTH, useSlider } from "./useSlider";

export const Slider = () => {
  const {
    containerRef,
    infiniteSlides,
    centerStart,
    offset,
    totalWidth,
    noTransition,
    displayIndex,
    next,
    prev,
  } = useSlider();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-zinc-100 gap-6">
      <div className="w-full flex flex-col items-center gap-6 px-4">
        <div ref={containerRef} className="w-full overflow-hidden">
          <div
            className="flex gap-3"
            style={{
              transform: `translateX(-${offset}px)`,
              width: totalWidth,
              transition: noTransition ? "none" : "transform 300ms ease-out",
            }}
          >
            {infiniteSlides.map((item, i) => (
              <SliderItem key={item.id} name={item.name} />
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full bg-white border border-zinc-300 shadow-sm flex items-center justify-center hover:bg-zinc-50"
          >
            ←
          </button>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full bg-white border border-zinc-300 shadow-sm flex items-center justify-center hover:bg-zinc-50"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};
