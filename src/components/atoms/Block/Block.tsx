import React from "react";
import { StyledBlock } from "./Block.styles";

interface BlockProps extends React.HTMLAttributes<HTMLDivElement> {}

const Block = ({ children, className }: BlockProps) => {
  return <StyledBlock className={className}>{children}</StyledBlock>;
};

export default Block;
