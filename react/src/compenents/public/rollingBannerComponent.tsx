import React, { useEffect, useRef, useState } from "react";
import { item } from "./item";
import styled from "styled-components";

interface Props {
  title: string;
}

interface IUseInterval {
  (callback: () => void, interval: number): void;
}

const useInterval: IUseInterval = (callback, interval) => {
  const saveCallback = useRef<(() => void) | null>(null);

  useEffect(() => {
    saveCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      if (saveCallback.current) {
        saveCallback.current();
      }
    }
    if (interval !== 10000) {
      let id = setInterval(tick, interval);
      return () => clearInterval(id);
    }
  }, [interval]);
};

function RollingBannerComponent(props: Props) {
  const [slideIndex, setSlideIndex] = useState(1);

  const outRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);

  const SLIDE_NUM = item.length;

  const beforeSlide = item[SLIDE_NUM - 1];
  const afterSlide = item[0];

  let copiedArr = [beforeSlide, ...item, afterSlide];

  const COPIED_NUM = copiedArr.length;

  const [custominterval, setCustominterval] = useState(3000);

  useInterval(
    () => setSlideIndex((slideIndex) => slideIndex + 1),
    custominterval
  );

  if (slideIndex === 10) {
    if (slideRef.current) {
      slideRef.current.style.transition = "";
    }

    setSlideIndex(1);

    setTimeout(() => {
      if (slideRef.current) {
        slideRef.current.style.transition = "all 500ms ease-in-out";
      }
    }, 0);
  }

  if (slideIndex === 0) {
    setTimeout(() => {
      if (slideRef.current) {
        slideRef.current.style.transition = "";
      }

      setSlideIndex(4);

      setTimeout(() => {
        if (slideRef.current) {
          slideRef.current.style.transition = "all 500ms ease-in-out";
        }
      }, 0);
    }, 500);
  }

  const slideHandler = (direction: number) => {
    setSlideIndex((slideIndex) => slideIndex + direction);
  };

  const stopSlide = () => {
    setCustominterval(10000);
  };

  const restartSlide = () => {
    if (slideIndex === 5) {
      setCustominterval(1500);
    } else {
      setCustominterval(3000);
    }
  };

  useEffect(() => {
    outRef.current?.addEventListener("mouseover", stopSlide);
    outRef.current?.addEventListener("mouseleave", restartSlide);

    return () => {
      outRef.current?.removeEventListener("mouseover", stopSlide);
      outRef.current?.removeEventListener("mouseleave", restartSlide);
    };
  }, [custominterval]);

  useEffect(() => {
    if (slideIndex === 5) {
      setCustominterval(1500);
    } else {
      setCustominterval(3000);
    }
  }, [slideIndex]);

  const { title } = props;
  return (
    <div className="bg-white mt-2 flex items-center px-[1rem] pb-2 pt-2">
      <div className="font-bold">{title}</div>
      <div
        className="relative overflow-hidden z-10 group"
        ref={outRef}
      >
        <div
          className="flex"
          ref={slideRef}
          style={{
            width: `${100 * COPIED_NUM}vw`,
            transition: "all 500ms ease-in-out",
            transform: `translateX(${
              -1 * ((100 / copiedArr.length) * slideIndex)
            }%)`,
          }}
        >
          {copiedArr.map((item, index) => (
            <div
              key={index}
              className="relative h-30 sm:h-30 lg:w-screen lg:h-30"
            >
              <div className="px-[5%] font-bold top-1/2 flex gap-1">
                <div className="font-bold">{item.createDate}</div>
                <div className="font-bold">{item.content}</div>
                <div className="font-bold">{item.creator}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RollingBannerComponent;
