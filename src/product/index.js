import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import {
  Container,
  ProductPhoto,
  ProductInfo,
  Title,
  Subtitle,
  Price,
  Description,
  Choose,
  Upholstery,
  ColorBox,
  Info,
  Cart,
} from "./styled";

const Product = () => {
  const colors = [
    {
      preview: `images/mat1.jpg`,
      previewBig: `images/ch1.png`,
      background: `linear-gradient(196deg, #f1a9a9, #e66767)`,
    },
    {
      preview: `images/mat2.jpg`,
      previewBig: `images/ch2.png`,
      background: `linear-gradient(196deg, #4c4c4c, #262626)`,
    },
    {
      preview: `images/mat3.jpg`,
      previewBig: `images/ch3.png`,
      background: `linear-gradient(196deg, #8a9fb2, #5f7991)`,
    },
    {
      preview: `images/mat4.jpg`,
      previewBig: `images/ch4.png`,
      background: `linear-gradient(196deg, #97afc3, #6789a7)`,
    },
    {
      preview: `images/mat5.jpg`,
      previewBig: `images/ch5.png`,
      background: `linear-gradient(196deg, #afa6a0, #8c7f76)`,
    },
    {
      preview: `images/mat6.jpg`,
      previewBig: `images/ch6.png`,
      background: `linear-gradient(196deg, #aaadac, #838786)`,
    },
  ];
  const [curent, setCurent] = useState(colors[0]);
  return (
    <Container background={curent.background}>
      <ProductPhoto>
        <img src={curent.previewBig} />
      </ProductPhoto>
      <ProductInfo>
        <Title>Modern chair</Title>
        <Subtitle>Sella Gastro</Subtitle>
        <Price>
          $174<span>$237</span>
        </Price>
        <Description>
          Description<span>Details</span>
        </Description>
        <Info>
          The chair construction is made of ash tree. Upholstery and wood color
          at customer's request.
        </Info>
        <Choose>Choose upholstery:</Choose>
        <Upholstery>
          {colors.map((color) => {
            return (
              <Color
                {...color}
                onClick={() => setCurent(color)}
                active={color.preview === curent.preview}
              />
            );
          })}
        </Upholstery>
        <Cart>
          <FiShoppingCart />
          Add To Cart
        </Cart>
      </ProductInfo>
    </Container>
  );
};

const Color = (props) => {
  const { preview, onClick, active } = props;
  return (
    <ColorBox onClick={onClick} active={active}>
      <img src={preview} />
    </ColorBox>
  );
};

export default Product;
