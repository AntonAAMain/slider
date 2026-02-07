"use client";

import { useState, useRef, useEffect } from "react";

const slides = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const SLIDE_WIDTH = 100;
const GAP = 12;

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [containerWidth, setContainerWidth] = useState(400);
  const [noTransition, setNoTransition] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const infiniteSlides = [...slides, ...slides, ...slides];
  const centerStart = slides.length;

  const next = () => {
    setNoTransition(false);
    const nextVal = (current + 1) % slides.length;
    if (current === slides.length - 1) {
      setCurrent(slides.length);
      setTimeout(() => {
        setNoTransition(true);
        setCurrent(0);
        requestAnimationFrame(() => setNoTransition(false));
      }, 300);
    } else {
      setCurrent(nextVal);
    }
  };

  const prev = () => {
    setNoTransition(false);
    if (current === 0) {
      setCurrent(-1);
      setTimeout(() => {
        setNoTransition(true);
        setCurrent(slides.length - 1);
        requestAnimationFrame(() => setNoTransition(false));
      }, 300);
    } else {
      setCurrent(current - 1);
    }
  };

  const displayIndex = centerStart + current;
  const offset =
    displayIndex * (SLIDE_WIDTH + GAP) + SLIDE_WIDTH / 2 - containerWidth / 2;
  const totalWidth =
    infiniteSlides.length * SLIDE_WIDTH + (infiniteSlides.length - 1) * GAP;

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
            {infiniteSlides.map((n, i) => (
              <div
                key={i}
                className={`flex-shrink-0 flex items-center justify-center rounded-lg border shadow-sm ${
                  i === displayIndex
                    ? "bg-zinc-800 text-white border-zinc-800"
                    : "bg-white border-zinc-200"
                }`}
                style={{ width: SLIDE_WIDTH, height: 80 }}
              >
                {n}
              </div>
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
}
