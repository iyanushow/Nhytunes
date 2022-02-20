import React from "react";
import { IProject } from "../../../utils";
import { ProductBox, StyledImageAnchor, Title } from "./Product.styles";

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  product: IProject;
}

const Product = ({ product, className, children }: IProps) => {
  const { imageUrl, title } = product;
  return (
    <ProductBox className={className}>
      {children}
      <StyledImageAnchor imageUrl={imageUrl} />
      <Title level="h5" color="secondary">
        {title}
      </Title>
    </ProductBox>
  );
};

export default Product;
