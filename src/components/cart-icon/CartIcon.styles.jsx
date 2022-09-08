import styled from "styled-components";

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    width: 32px;
    height: 32px;
    filter: invert(0.8);
  }
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 16px;
  font-weight: normal;
  bottom: 6px;
  color: #ccc;
`;
