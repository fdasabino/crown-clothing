import styled from "styled-components";

import { Link } from "react-router-dom";

export const CategoryPreviewContainer = styled.div`
  display: grid;
  grid-template-columns: (4, 1fr);
  gap: 2em;
  margin-bottom: 2em;
`;

export const Title = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
`;

export const Preview = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1em;
`;
