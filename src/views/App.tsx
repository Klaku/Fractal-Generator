import React, { PropsWithChildren } from "react";
import ReactDOM from "react-dom/client";
import { CanvasComponent } from "../components/canvas";
import { ConfigurationComponent } from "../components/configuration";
import { ContextProvider } from "../provider/provider";
import * as Styled from "./App.styles";

export const App = (props: PropsWithChildren<{}>) => {
  return (
    <ContextProvider>
      <Styled.Wrapper>
        <Styled.AppContainer>
          <Styled.Header>Fractal Generator</Styled.Header>
          <Styled.Main>
            <CanvasComponent />
            <ConfigurationComponent />
          </Styled.Main>
          <Styled.Footer>Created By Klaku</Styled.Footer>
        </Styled.AppContainer>
      </Styled.Wrapper>
    </ContextProvider>
  );
};
