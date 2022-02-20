import React, { useState } from "react";
import AliceCarousel, { EventObject } from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { StyledImage, Thumbs, Thumb } from "./Carousel.styles";
import CarouselCard from "../../atoms/CarouselCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { DataProps } from "../../../utils";

const createElement: (data: { url: string; title: string }[]) => JSX.Element[] = data => {
  const slides = data.map(({ url, title }) => <CarouselCard url={url} btnText={title} />);

  return slides;
};

const thumbItems: (
  items: { url: string; title: string }[],
  methods: [
    React.Dispatch<React.SetStateAction<number>>,
    React.Dispatch<React.SetStateAction<boolean>>
  ]
) => JSX.Element[] = (items, [setThumbIndex, setThumbAnimation]) => {
  const handleClick: (idx: number) => void = i => {
    setThumbIndex(i);
    setThumbAnimation(true);
  };

  return items.map(({ url, title }, idx) => (
    <Thumb onClick={() => handleClick(idx)}>
      <StyledImage imageUrl={url} key={title} />
    </Thumb>
  ));
};

const Carousel = ({ carouselData }: DataProps) => {
  const [mainIndex, setMainIndex] = useState(0);
  const [slides] = useState(createElement(carouselData));
  console.log(slides);

  const [mainAnimation, setMainAnimation] = useState(false);
  const [thumbIndex, setThumbIndex] = useState(0);
  const [thumbAnimation, setThumbAnimation] = useState(false);

  const [thumbs] = useState(thumbItems(carouselData, [setThumbIndex, setThumbAnimation]));

  const responsive = {
    0: { items: 1 },
  };

  // const slidePrev = () => {
  //   setMainIndex(mainIndex => mainIndex - 1);
  // };
  // const slideNext = () => {
  //   setMainIndex(mainIndex => mainIndex + 1);
  // };

  // const onSlideChanged: (e: EventObject) => void = ({ item }) => {
  //   setMainIndex(item);
  // };

  const slideNext = () => {
    if (!thumbAnimation && thumbIndex < thumbs.length - 1) {
      setThumbAnimation(true);
      setThumbIndex(thumbIndex + 1);
    }
  };

  const slidePrev = () => {
    if (!thumbAnimation && thumbIndex > 0) {
      setThumbAnimation(true);
      setThumbIndex(thumbIndex - 1);
    }
  };

  const syncMainBeforeChange: (e: EventObject) => void = e => {
    setMainAnimation(true);
  };

  const syncMainAfterChange: (e: EventObject) => void = e => {
    setMainAnimation(false);

    if (e.type === "action") {
      setThumbIndex(e.item);
      setThumbAnimation(false);
    } else {
      setMainIndex(thumbIndex);
    }
  };

  const syncThumbs: (e: EventObject) => void = e => {
    setThumbIndex(e.item);
    setThumbAnimation(false);

    if (!mainAnimation) {
      setMainIndex(e.item);
    }
  };

  return (
    <>
      <AliceCarousel
        autoWidth
        disableDotsControls
        disableButtonsControls
        items={slides}
        activeIndex={mainIndex}
        animationType="fadeout"
        animationDuration={500}
        infinite
        responsive={responsive}
        mouseTracking={!thumbAnimation}
        onSlideChange={syncMainBeforeChange}
        onSlideChanged={syncMainAfterChange}
        touchTracking={!thumbAnimation}
      />

      <Thumbs>
        <FontAwesomeIcon color="#8E1413" icon={faArrowLeft} onClick={slidePrev} />

        <AliceCarousel
          activeIndex={thumbIndex}
          autoWidth
          disableDotsControls
          disableButtonsControls
          items={thumbs}
          mouseTracking={false}
          onSlideChanged={syncThumbs}
          touchTracking={!mainAnimation}
        />

        <FontAwesomeIcon color="#8E1413" icon={faArrowRight} onClick={slideNext} />
      </Thumbs>
    </>
  );
};
export default Carousel;
