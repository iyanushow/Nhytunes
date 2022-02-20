import React, { useState } from "react";
import { IProject, projects } from "../../../utils";
import Product from "../../atoms/Product";
import { Container } from "./Products.styles";

const Products = () => {
  const [products] = useState<IProject[]>(projects);

  return (
    <Container>
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </Container>
  );
};

export default Products;
