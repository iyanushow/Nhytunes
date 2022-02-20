import React, { useState } from "react";
import { DataProps } from "../../../utils";

import {
  Container,
  TabBlock,
  Tab,
  // TabDiv,
  // StyledSet,
  ImageBlock,
  StyledImage,
} from "./DesktopService.styles";

const DesktopService = ({ carouselData }: DataProps) => {
  const [selected, setSelected] = useState(0);

  return (
    <Container>
      <TabBlock>
        {carouselData.map((item, idx) => (
          // <TabDiv>
          //   <StyledSet></StyledSet>
          <Tab key={item.title} onClick={() => setSelected(idx)} selected={selected === idx}>
            {item.title}
          </Tab>
          // </TabDiv>
        ))}
      </TabBlock>

      <ImageBlock>
        <StyledImage imageUrl={carouselData[selected]?.url} />
      </ImageBlock>
    </Container>
  );
};

export default DesktopService;
