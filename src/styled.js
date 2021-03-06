import styled from 'styled-components'

export const Outer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  max-width: 100vw;
  height: 100vh;
  max-height: 100vh;
  overflow-x: hidden;
  background: #f7f7f7;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35vw;
  @media (max-width: 1000px) {
    width: calc(100vw - 32px);
  }
`;

export const BPM = styled.p`
  font-size: 1.2em;
  opacity: 0.7;
  span {
    font-weight: 500;
    opacity: 1;
  }
`;

export const Label = styled.p`
  opacity: 0.7;
  margin-bottom: 8px;
`;
