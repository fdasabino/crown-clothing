import styled from "styled-components";

import { Link } from "react-router-dom";

export const CategoryPreviewContainer = styled.div`
  display: grid;
  grid-template-columns: (4, 1fr);
  gap: 2em;
  margin-bottom: 2em;

  span {
    margin: 0 auto;
    &:hover {
      scale: 1.1;
      transition: all 0.3s ease-in-out;
    }
  }
`;

export const Title = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  padding: 5px;
  background-color: #399b9b84;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

export const Preview = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1em;
`;
