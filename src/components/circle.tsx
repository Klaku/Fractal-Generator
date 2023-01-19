import React, { PropsWithChildren, useContext } from "react";
import { IEntity } from "../types";
import styled from "styled-components";
import { Context } from "../provider/provider";
export const CircleComponent = (
  props: PropsWithChildren<{
    item: IEntity;
  }>
) => {
  const { entities, Update } = useContext(Context);
  return (
    <Wrapper>
      <Collumn>
        <div>Numer</div>
        <div>{props.item.id}</div>
      </Collumn>
      <Collumn>
        <div>Promień</div>
        <Editable
          contentEditable
          onBlur={(e) => {
            Update([
              ...entities.filter((x) => x.id != props.item.id),
              { ...props.item, radius: Number(e.target.innerText) },
            ]);
          }}
        >
          {props.item.radius}
        </Editable>
      </Collumn>
      <Collumn>
        <div>Klatek do pełnego obrotu</div>
        <Editable
          contentEditable
          onBlur={(e) => {
            Update([
              ...entities.filter((x) => x.id != props.item.id),
              { ...props.item, rotationFrames: Number(e.target.innerText) },
            ]);
          }}
        >
          {props.item.rotationFrames}
        </Editable>
      </Collumn>
      <Collumn>
        <div>Kolor</div>
        <Editable
          contentEditable
          onBlur={(e) => {
            Update([
              ...entities.filter((x) => x.id != props.item.id),
              { ...props.item, color: e.target.innerText },
            ]);
          }}
        >
          {props.item.color}
        </Editable>
      </Collumn>
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid #999;
  margin-bottom: 5px;
  padding: 5px 10px;
`;
export const Collumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Editable = styled.div`
  min-width: 120px;
  text-align: center;
`;
