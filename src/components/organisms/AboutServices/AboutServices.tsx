import useMediaMatch from "@rooks/use-media-match";
import { useState } from "react";
import { carouselSlides } from "../../../utils";
import Carousel from "../../molecules/Carousel";
import DesktopService from "../../molecules/DesktopService";

const AboutServices = () => {
  const isMobile = useMediaMatch("(max-width: 767px)");

  const [data] = useState(carouselSlides);

  return (
    <>{isMobile ? <Carousel carouselData={data} /> : <DesktopService carouselData={data} />}</>
  );
};

export default AboutServices;
