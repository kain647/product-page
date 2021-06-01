import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;
  background-image: ${({ background }) => background};
`;
export const ProductPhoto = styled.div`
  display: flex;
`;
export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Title = styled.div`
  display: flex;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 13px;
  line-height: 1.2;
  color: #fff;
  margin-bottom: 10px;
`;
export const Subtitle = styled.h2`
  display: flex;
  font-weight: 800;
  font-size: 34px;
  line-height: 1.2;
  color: #fff;
  margin: 0;
  margin-bottom: 10px;
`;
export const Price = styled.h4`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 26px;
  line-height: 1.2;
  color: #fff;
  margin: 0;
  margin-bottom: 30px;
  span {
    text-decoration: line-through;
    font-size: 20px;
    opacity: 0.6;
    margin-left: 15px;
  }
`;
export const Description = styled.h4`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  color: #fff;
  span {
    font-weight: 600;
    font-size: 18px;
    line-height: 1.2;
    color: #fff;
    margin-left: 25px;
    opacity: 0.5;
  }
`;
export const Info = styled.p`
  display: flex;
  width: 360px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.7;
  color: #fff;
  margin: 0;
`;
export const ColorBox = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  cursor: pointer;
  margin-right: 10px;
  border-radius: 4px;
  border: ${({ active }) => (active ? "3px solid #434343" : "none")};
  transform: ${({ active }) => (active ? "scale(1.1)" : "none")};
  img {
    //border-radius: 4px;
    //border: 3px solid transparent;
  }
  :last-child {
    margin-right: 0;
  }
`;
export const Choose = styled.h5`
  display: flex;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  color: #fff;
  margin-bottom: 20px;
`;
export const Upholstery = styled.div`
  display: flex;
  box-sizing: border-box;
  margin-bottom: 50px;
  //box-shadow: 0 12px 35px 0 rgb(16 39 112 / 25%);
`;
export const Cart = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 2;
  height: 48px;
  border-radius: 4px;
  border: none;
  width: 210px;
  letter-spacing: 1px;
  color: #fff;
  background-color: #944852;
  box-shadow: 0 6px 15px 0 rgb(16 39 112 / 15%);
  cursor: pointer;
  svg {
    margin-right: 10px;
  }
  :hover {
    box-shadow: 0 12px 35px 0 rgb(16 39 112 / 25%);
    background-color: #000;
  }
`;
