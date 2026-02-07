import { fetchNftList, useAppDispatch, useAppSelector } from "@/shared/redux";
import React from "react";

export const SLIDE_WIDTH = 100;
export const GAP = 12;

export const useSlider = () => {
  const [current, setCurrent] = React.useState(0);
  const [containerWidth, setContainerWidth] = React.useState(400);
  const [noTransition, setNoTransition] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchNftList());
  }, [dispatch]);

  const { list } = useAppSelector((state) => state.slider);

  React.useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const infiniteSlides = [...list.slice(0, 40)];
  const centerStart = list.length;

  const next = () => {
    setNoTransition(false);
    const nextVal = (current + 1) % list.length;
    if (current === list.length - 1) {
      setCurrent(list.length);
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
        setCurrent(list.length - 1);
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

  return {
    current,
    containerWidth,
    noTransition,
    containerRef,
    infiniteSlides,
    centerStart,
    offset,
    totalWidth,
    displayIndex,
    next,
    prev,
  };
};
