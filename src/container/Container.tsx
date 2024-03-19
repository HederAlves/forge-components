import React from 'react';
import { ContainerStyles } from './Styles';

export interface ContainerProps {
  gap?: number;
  justify?:
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';
  children: React.ReactNode;
}

export const Container = (props: ContainerProps) => {
  return (
    <ContainerStyles justify={props.justify} gap={props.gap}>
      {props.children}
    </ContainerStyles>
  );
};
