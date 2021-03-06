import styled from 'styled-components';

export const GlobalContainer = styled.div`
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 992px) {
    height: 100%;
  }
`;
