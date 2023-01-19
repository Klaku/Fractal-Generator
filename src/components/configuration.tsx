import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import { Context } from "../provider/provider";
import { CircleComponent } from "./circle";
export const ConfigurationComponent = (props: PropsWithChildren<{}>) => {
  const context = React.useContext(Context);

  return (
    <Wrapper>
      <Row>
        <Button onClick={() => context.Add()}>Dodaj</Button>
        <Button onClick={() => context.Remove()}>Usuń</Button>
      </Row>
      {context.entities
        .sort((a, b) => {
          return a.id > b.id ? 1 : -1;
        })
        .map((x) => {
          return <CircleComponent key={x.id} item={x} />;
        })}
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  background-color: rgb(18, 22, 26);
  box-shadow: 0px 0px 10px 5px rgba(234, 236, 239, 0.05);
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 15px;
  margin-bottom: 25px;
`;

export const Button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 150px;
  padding: 5px 10px;
  background-color: #55868c;
  color: #000;
  cursor: pointer;
`;
