import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1px;
`;

export const Panel = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  padding: 15px;
  background-color: rgb(22, 26, 30);
`;

export const Main = styled(Panel)`
  flex-direction: row;
  gap: 15px;
`;

export const Header = styled(Panel)`
  font-size: 24px;
  font-weight: 600;
`;
export const Footer = styled(Panel)`
  text-align: right;
`;
