import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ButtonProps {
  color: string;
  bg: string;
  off?: boolean;
}

export const Container = styled.div<ButtonProps>`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  .button {
    padding: 15px 50px;
    border-radius: 40px;
    text-decoration: none;
    font-weight: 700;
    margin: 0 15px;
    transition: all 350ms ease-in-out;
    border: none;
    color: #fff;
    text-transform: initial;
    ${props =>
      props.color &&
      props.bg &&
      css`
        background-color: ${props.bg};
        color: ${props.color};
        &:hover {
          background: ${shade(0.2, props.bg)};
        }
      `}
    ${props =>
      props.off &&
      css`
        background-color: #afafaf;
        opacity: 0.5;
        pointer-events: none;
      `}
  }

  @media only screen and (max-width: 991px) {
  }
`;
