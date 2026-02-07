import { fetchNftList, useAppDispatch, useAppSelector } from "@/shared/redux";
import React from "react";

export const SLIDE_WIDTH = 281;
export const GAP = 40;

export const useSlider = () => {
  const [current, setCurrent] = React.useState(0);
  const [containerWidth, setContainerWidth] = React.useState(400);
  const [noTransition, setNoTransition] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchNftList());
  }, [dispatch]);

  const { list, loading, error } = useAppSelector((state) => state.slider);

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

  const slidesLength = list.length;
  const infiniteSlides =
    slidesLength > 0 ? [...list, ...list, ...list] : [];
  const centerStart = slidesLength;

  const next = () => {
    if (!slidesLength) return;
    setNoTransition(false);
    const nextVal = (current + 1) % slidesLength;
    if (current === slidesLength - 1) {
      setCurrent(slidesLength);
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
    if (!slidesLength) return;
    setNoTransition(false);
    if (current === 0) {
      setCurrent(-1);
      setTimeout(() => {
        setNoTransition(true);
        setCurrent(slidesLength - 1);
        requestAnimationFrame(() => setNoTransition(false));
      }, 300);
    } else {
      setCurrent(current - 1);
    }
  };

  const displayIndex = centerStart + current;
  const offset =
    slidesLength > 0
      ? displayIndex * (SLIDE_WIDTH + GAP) + SLIDE_WIDTH / 2 - containerWidth / 2
      : 0;
  const totalWidth =
    infiniteSlides.length > 0
      ? infiniteSlides.length * SLIDE_WIDTH + (infiniteSlides.length - 1) * GAP
      : 0;

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
    loading,
    error,
  };
};
