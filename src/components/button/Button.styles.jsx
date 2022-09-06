import styled from "styled-components";

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:disabled {
    opacity: 0.3;
  }

  &:hover:enabled {
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: all 0.3s ease-in-out;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:disabled {
    opacity: 0.3;
  }

  &:hover:enabled {
    background-color: #357ae8;
    border: none;
    transition: all 0.3s ease-in-out;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:disabled {
    opacity: 0.3;
  }

  &:hover:enabled {
    background-color: black;
    color: white;
    border: none;
    transition: all 0.3s ease-in-out;
  }
`;
