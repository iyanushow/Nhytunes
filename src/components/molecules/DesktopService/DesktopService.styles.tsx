import React from "react";
import styled from "styled-components";
import ImageAnchor from "../../atoms/Image";

interface TabProps extends React.HTMLAttributes<HTMLDivElement> {
  selected: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  width: 100%;
  align-items: center;
`;

export const TabBlock = styled.div`
  width: 46%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 14px;
`;

export const Tab = styled.div<TabProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 18px 30px;
  max-width: 390px;
  height: 64px;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  border-radius: 4px;
  cursor: pointer;

  font-size: 14px;
  font-weight: 300;
  text-align: justify;
  color: ${({ theme, selected }) => (selected ? theme.colors.white : theme.colors.black)};
  background: ${({ theme, selected }) => (selected ? theme.colors.primary : theme.colors.white)};

  transition: all 0.4s ease-in-out;
`;

export const ImageBlock = styled.div`
  width: 48%;
`;

export const StyledImage = styled(ImageAnchor)`
  transition: all 0.4s ease-in-out;
  img {
    transition: all 0.4s ease-in-out;
  }
`;

export const TabDiv = styled.div``;
