import styled from 'styled-components';
import { ContainerProps } from './Container';

export const ContainerStyles = styled.div<ContainerProps>`
  display: flex;
  justify-content: ${props => props.justify || 'flex-start'};
  gap: ${props => (props.gap ? `${props.gap}px` : '0')};
`;
