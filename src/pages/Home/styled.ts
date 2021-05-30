import styled, { css } from 'styled-components';

import Ornament_1 from '../../assets/ornament_1.svg';
import Ornament_2 from '../../assets/ornament_2.svg';
import Ornament_3 from '../../assets/ornament_3.svg';
import Ornament_4 from '../../assets/ornament_4.svg';

import BGPublicacao from '../../assets/bg-publicacao.svg';
import BGContato from '../../assets/bg_contato.svg';

import whatsapp from '../../assets/whatsapp.svg';
import email from '../../assets/email.svg';
import instagram from '../../assets/instagram.svg';

import menu from '../../assets/menu.svg';
import close from '../../assets/close.svg';

interface HeaderProps {
  scroll: boolean;
  logo: string;
  menu?: boolean;
}

interface ColumnProps {
  color: string;
  height?: boolean;
  reverse?: boolean;
}

interface AtendimentosProps {
  scroll: number;
  vh: number;
  lock: number;
}

// @media (orientation: portrait) {
//   flex-direction: column;
// }

export const Container = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: auto;
`;

export const Header = styled.header<HeaderProps>`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  transition: all 350ms ease-in-out;
  width: 100%;
  z-index: 100;
  padding-left: 50px;
  padding-right: 50px;
  a {
    width: 100%;
    max-width: 125px;
  }
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    transition: all 350ms ease-in-out;
    max-width: 125px;
    width: 100%;
    background-color: #fff;
    -webkit-mask-image: url(${props => props.logo && props.logo});
    mask-image: url(${props => props.logo && props.logo});
    height: ${props => (props.scroll ? '42px' : '80px')};
    -webkit-mask-size: contain;
    -webkit-mask-position: left;
    -webkit-mask-repeat: no-repeat;
  }
  ${props =>
    props.scroll &&
    css`
      background-color: #fff;
      .logo {
        max-width: 75px;
        width: 100%;
        background-color: #4881f1;
      }
    `}
  ul {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 1;
    li {
      display: flex;
      flex-direction: column;
      position: relative;
      align-items: center;
      &:after {
        content: '';
        width: 0;
        background-color: #4881f1;
        height: 5px;
        position: absolute;
        bottom: 0;
        transition: all 350ms ease-in-out;
      }
      &:hover {
        &:after {
          width: 100%;
        }
      }
      button {
        background-color: transparent;
        border: none;
      }
      a,
      button {
        padding: 15px;
        font-weight: 700;
        color: #4881f1;
        text-decoration: none;
      }
    }
  }
  .menu {
    display: none;
    width: 30px;
    height: 30px;
    background-color: #4881f1;
    -webkit-mask-image: url(${menu});
    mask-image: url(${menu});
    -webkit-mask-size: contain;
    -webkit-mask-position: left;
    -webkit-mask-repeat: no-repeat;
    color: transparent;
  }

  @media (orientation: portrait) {
    background-color: #fff;
    height: 75px;
    padding: 15px;
    justify-content: space-between;
    a {
      width: 50px;
    }
    .logo {
      max-width: 50px;
      width: 100%;
      background-color: #4881f1;
    }
    ul {
      flex-direction: column;
      display: flex;
      position: absolute;
      width: 100%;
      height: 100vh;
      top: 0;
      left: 0;
      background-color: white;
      align-items: center;
      justify-content: center;
      opacity: 0;
      pointer-events: none;
      transition: all 350ms ease-in-out;
      ${props =>
        props.menu &&
        css`
          opacity: 1;
          pointer-events: all;
        `}
    }
    .menu {
      display: flex;
      ${props =>
        props.menu &&
        css`
          -webkit-mask-image: url(${close});
          mask-image: url(${close});
        `}
    }
  }

  @media only screen and (max-width: 991px) {
    .container {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const Open = styled.section`
  height: 100vh;
  display: flex;
  position: fixed;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  .box-text {
    padding-right: 50px;
    padding-left: 50px;
    @media (orientation: portrait) {
      padding-top: 125px;
      padding-bottom: 50px;
    }
    h1 {
      font-weight: bold;
      font-size: 4.625em;
      color: #fff;
      line-height: 1;
    }
    h3 {
      font-size: 1.875em;
      color: #89ebc9;
      font-weight: 500;
      padding-top: 15px;
      padding-bottom: 30px;
    }
    .btn {
      max-width: 240px;
      width: 100%;
      background-color: #fff;
      border-radius: 26px;
      color: #4881f1;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50px;
      font-weight: 500;
      text-decoration: none;
      font-size: 1.25em;
      transition: all 350ms ease-in-out;
      &:hover {
        border: 3px solid #fff;
        background-color: transparent;
        color: #fff;
      }
    }
    @media only screen and (max-width: 1360px) {
      h1 {
        font-size: 2.625em;
      }
      h3 {
        font-size: 1em;
      }
      .btn {
        font-size: 1em;
      }
    }
  }
  .scroll {
    display: flex;
    align-items: center;
    padding-left: 50px;
    padding-right: 50px;
    position: absolute;
    bottom: 50px;
    p {
      font-size: 0.875em;
      color: #fff;
      padding-left: 15px;
    }
    img {
      transition: all 350ms ease-in-out;
      animation: animateScroll 1s infinite;
    }

    @keyframes animateScroll {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(1px);
      }
      100% {
        transform: translateY(-1px);
      }
    }
  }
  .box-img {
    display: flex;
    align-items: flex-end;
    flex: 1;
    padding-bottom: 30px;
    object {
      width: 100%;
      transform: translateX(-15%);
      position: relative;
      max-height: calc(100vh - 100px);
      transition: all 350ms ease-in-out;
      animation: animate 350ms;
    }

    @keyframes animate {
      0% {
        transform: translateX(-15%) rotate(0);
      }
      50% {
        transform: translateX(-15%) rotate(-2deg);
      }
      100% {
        transform: translateX(-15%) rotate(2deg);
      }
    }
  }
  @media (orientation: portrait) {
    height: auto;
    flex-direction: column;
    position: relative;
    .box-img {
      padding: 15px;
      object {
        transform: translate(0);
      }
    }
  }
`;

export const Column = styled.div<ColumnProps>`
  width: 100%;
  flex: 1;
  background-color: ${props => props.color && props.color};
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${props =>
    props.height &&
    css`
      height: 100vh;
    `}
  &:first-child {
    max-width: 40%;
  }
  ${props =>
    props.reverse &&
    css`
      &:first-child {
        max-width: none;
      }
      &:last-child {
        max-width: 630px;
      }
    `}
  @media (orientation: portrait) {
    max-width: 100%;
    width: 100%;
    &:first-child {
      max-width: 100%;
      padding-top: 150px;
      padding-bottom: 150px;
      @media (orientation: portrait) {
        padding: 0;
      }
    }
  }
`;

export const Atendimentos = styled.section<AtendimentosProps>`
  display: flex;
  padding-top: 100vh;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  pointer-events: none;
  ${props =>
    props.scroll &&
    css`
      pointer-events: all;
    `}
  .box-fixed {
    position: absolute;
    ${props =>
      props.scroll >= props.vh &&
      props.scroll < props.lock &&
      css`
        position: fixed;
        width: 100%;
        top: 0;
      `}
    ${props =>
      props.scroll >= props.lock &&
      css`
        position: absolute;
        bottom: 0;
      `}
  }
  .box-itens {
    padding-left: 40%;
  }
  .box-text {
    padding-right: 50px;
    padding-left: 50px;
    @media (orientation: portrait) {
      padding-top: 50px;
      padding-bottom: 50px;
    }
    h2 {
      font-weight: bold;
      font-size: 4em;
      color: #4881f1;
      line-height: 1;
    }
    h3 {
      font-size: 1.625em;
      color: #fff;
      font-weight: 500;
      padding-top: 30px;
      @media (orientation: portrait) {
        display: none;
      }
    }
    @media only screen and (max-width: 1360px) {
      h2 {
        font-size: 2em;
      }
      h3 {
        font-size: 1em;
      }
    }
  }
  .box-cards {
    background-color: #fff;
    padding-top: 150px;
    padding-bottom: 150px;
  }
  @media (orientation: portrait) {
    flex-direction: column;
    padding-top: 0;
    .box-itens {
      padding-left: 0;
    }
    .box-fixed {
      position: relative;
      ${props =>
        props.scroll >= props.vh &&
        props.scroll < props.lock &&
        css`
          position: relative;
          width: 100%;
        `}
      ${props =>
        props.scroll >= props.lock &&
        css`
          position: relative;
        `}
    }
    .box-cards {
      padding-top: 50px;
      padding-bottom: 50px;
    }
  }
`;

export const CardAtendimentos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 75px;
  padding-bottom: 75px;
  &:nth-child(odd) {
    .box-img {
      &:before {
        content: '';
        background-color: #7e8ceb;
        width: 100%;
        height: 100%;
        display: block;
        position: absolute;
        left: -10px;
        top: -10px;
        border-radius: 26px;
        z-index: 0;
      }
      &:after {
        content: '';
        background-color: #89ebc9;
        width: 100%;
        height: 100%;
        display: block;
        position: absolute;
        right: -10px;
        bottom: -10px;
        border-radius: 26px;
        z-index: 0;
      }
      .ornamentTopRight {
        right: -55px;
        top: -55px;
        width: 78px;
        height: 92px;
        background-image: url(${Ornament_1});
      }
      .ornamentBottomLeft {
        left: -40px;
        bottom: -40px;
        width: 47px;
        height: 47px;
        background-image: url(${Ornament_2});
      }
    }
  }
  &:nth-child(even) {
    .box-img {
      &:before {
        content: '';
        background-color: #89ebc9;
        width: 100%;
        height: 100%;
        display: block;
        position: absolute;
        left: -10px;
        top: -10px;
        border-radius: 26px;
        z-index: 0;
      }
      &:after {
        content: '';
        background-color: #7e8ceb;
        width: 100%;
        height: 100%;
        display: block;
        position: absolute;
        right: -10px;
        bottom: -10px;
        border-radius: 26px;
        z-index: 0;
      }
      .ornamentTopRight {
        right: -70px;
        top: -44px;
        width: 101px;
        height: 88px;
        background-image: url(${Ornament_3});
      }
      .ornamentBottomLeft {
        left: -50px;
        bottom: -21px;
        width: 65px;
        height: 65px;
        background-image: url(${Ornament_4});
      }
    }
  }
  @media (orientation: portrait) {
    padding: 30px;
  }
  .box-img {
    position: relative;
    .ornamentTopRight {
      position: absolute;
      z-index: 5;
      background-size: contain;
      background-repeat: no-repeat;
    }
    .ornamentBottomLeft {
      position: absolute;
      z-index: 5;
      background-size: contain;
      background-repeat: no-repeat;
    }
    img {
      max-width: 481px;
      width: 100%;
      border-radius: 26px;
      z-index: 1;
      position: relative;
    }
  }
  .box-text {
    max-width: 481px;
    width: 100%;
    padding: 0;
    h5 {
      padding-top: 45px;
      padding-bottom: 38px;
      color: #4881f1;
      font-size: 1.875em;
      font-weight: 500;
    }
    p {
      color: #000000;
      line-height: 1.875em;
    }
  }
`;

export const Publicacoes = styled.section`
  background-color: #4881f1;
  height: 100vh;
  background-image: url(${BGPublicacao});
  display: flex;
  align-items: center;
  max-width: 100%;
  overflow: hidden;
  position: relative;
  @media (orientation: portrait) {
    padding-top: 50px;
    padding-bottom: 50px;
    height: auto;
  }
  .box-text {
    padding-right: 50px;
    padding-left: 50px;
    max-width: 550px;
    h2 {
      font-weight: bold;
      font-size: 4em;
      color: #fff;
      line-height: 1;
    }
    .btn-carousel {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding-top: 45px;
      @media (orientation: portrait) {
        justify-content: left;
      }
      .itens {
        display: flex;
        padding: 15px;
        color: #fff;
        div {
          padding: 5px;
        }
      }
      button {
        background-color: transparent;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        &.prev {
          transform: rotateZ(90deg);
        }
        &.next {
          transform: rotateZ(-90deg);
        }
      }
    }
    @media only screen and (max-width: 1360px) {
      h2 {
        font-size: 2em;
      }
    }
  }
  .box-carousel {
    flex: 1;
    @media (orientation: portrait) {
      max-width: 100%;
    }
    .carousel {
      max-width: 900px;
      margin-left: auto;
      width: 100%;
      @media (orientation: portrait) {
        padding: 15px;
      }
    }
    .owl-theme {
      .owl-dots {
        display: none;
      }
      .item {
        .card {
          max-width: 405px;
          width: 100%;
          border-radius: 30px;
          background-color: #fff;
          img {
            border-top-left-radius: 30px;
            border-top-right-radius: 30px;
          }
          .box-text {
            max-width: 100%;
            padding: 30px;
            h5 {
              color: #4881f1;
              font-size: 1.875em;
              padding-bottom: 28px;
              @media (orientation: portrait) {
                font-size: 1.375em;
              }
            }
            a {
              color: #89ebc9;
              font-size: 1.625em;
            }
          }
        }
      }
    }
  }
  @media (orientation: portrait) {
    flex-direction: column;
  }
`;

export const Sobre = styled.section`
  position: relative;
  background-color: #fff;
  display: flex;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  height: 100vh;
  @media (orientation: portrait) {
    height: auto;
  }
  .box-img {
    display: flex;
    align-items: center;
    justify-content: center;
    @media (orientation: portrait) {
      padding: 15px;
      padding-bottom: 50px;
    }
    object {
      max-width: 700px;
      width: 100%;
    }
  }
  .box-text {
    max-width: 410px;
    @media (orientation: portrait) {
      padding: 50px;
      padding-bottom: 15px;
      height: auto;
    }
    h2 {
      color: #4881f1;
      font-size: 4em;
      font-weight: bold;
      margin-bottom: 35px;
    }
    p {
      color: #000;
      line-height: 1.875em;
      margin-bottom: 30px;
    }
    @media only screen and (max-width: 1360px) {
      h2 {
        font-size: 2em;
      }
    }
  }
  @media (orientation: portrait) {
    flex-direction: column-reverse;
  }
`;

export const Contato = styled.section`
  position: relative;
  background-color: #89ebc9;
  background-image: url(${BGContato});
  padding-top: 100px;
  @media (orientation: portrait) {
    padding: 15px;
    padding-bottom: 50px;
    padding-top: 50px;
    height: auto;
  }
  h2 {
    color: #4881f1;
    font-size: 4em;
    text-align: center;
    margin-bottom: -50px;
    @media (orientation: portrait) {
      margin-bottom: -85px;
    }
  }
  .box-cards-contato {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    transform: translateY(110px);
    position: relative;
    z-index: 5;
    @media (orientation: portrait) {
      flex-direction: column-reverse;
    }
  }
  @media only screen and (max-width: 1360px) {
    h2 {
      font-size: 2em;
    }
  }
`;

export const CardCompania = styled.div`
  max-width: 425px;
  width: 100%;
  background-color: #fff;
  border-radius: 26px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 85px;
  position: relative;
  @media (orientation: portrait) {
    margin-top: 100px;
  }
  &:before {
    content: '';
    background-color: #4881f1;
    width: 100%;
    height: 30px;
    position: absolute;
    top: 0;
    border-top-left-radius: 26px;
    border-top-right-radius: 26px;
  }
  .logo {
    max-width: 200px;
    width: 100%;
    height: 200px;
    border-radius: 100px;
    border: 3px solid #4881f1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    margin-top: -100px;
    box-shadow: 0 0 30px #00000029;
    z-index: 1;
    img {
      width: 150px;
    }
  }
  .lista {
    li {
      color: #4881f1;
      font-size: 1.625em;
      font-weight: 500;
      line-height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      @media (orientation: portrait) {
        font-size: 1.125em;
      }
    }
  }
  .endereco {
    text-align: center;
    padding-top: 31px;
    position: relative;
    &:before {
      content: '';
      width: calc(100% + 30px);
      height: 1px;
      background-color: #dedede;
      position: absolute;
      display: block;
      left: -15px;
      top: 15px;
    }
    p {
      color: #646464;
      line-height: 26px;
    }
  }
`;

export const Footer = styled.footer`
  position: relative;
  background-color: #4881f1;
  padding-top: 200px;
  background-image: url(${BGContato});
  @media (orientation: portrait) {
    padding-top: 100px;
  }
  .itens {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 75px;
    padding-bottom: 75px;
    position: relative;
    @media (orientation: portrait) {
      flex-direction: column;
      padding-top: 30px;
      padding-bottom: 30px;
    }
    &:before {
      content: '';
      width: 100%;
      height: 1px;
      background-color: #fff;
      position: absolute;
      top: 0;
    }
    .logo {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      img {
        width: 75px;
        padding-right: 15px;
      }
    }
    .links {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      flex-direction: column;
      @media (orientation: portrait) {
        padding-top: 30px;
      }
      .box-links {
        display: flex;
        flex-direction: column;
        .email {
          position: relative;
          display: flex;
          align-items: center;
          color: #89ebc9;
          text-decoration: none;
          font-size: 1.625em;
          font-weight: 500;
          margin-bottom: 15px;
          @media (orientation: portrait) {
            font-size: 1em;
          }
          &:before {
            content: '';
            background-image: url(${email});
            width: 30px;
            height: 30px;
            display: block;
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            margin-right: 15px;
          }
        }
        .whatsapp {
          position: relative;
          display: flex;
          align-items: center;
          color: #89ebc9;
          text-decoration: none;
          font-size: 1.625em;
          font-weight: 500;
          margin-bottom: 15px;
          @media (orientation: portrait) {
            font-size: 1em;
          }
          &:before {
            content: '';
            background-image: url(${whatsapp});
            width: 30px;
            height: 30px;
            display: block;
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            margin-right: 15px;
          }
        }
        .instagram {
          position: relative;
          display: flex;
          align-items: center;
          color: #89ebc9;
          text-decoration: none;
          font-size: 1.625em;
          font-weight: 500;
          @media (orientation: portrait) {
            font-size: 1em;
          }
          &:before {
            content: '';
            background-image: url(${instagram});
            width: 30px;
            height: 30px;
            display: block;
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            margin-right: 15px;
          }
        }
      }
    }
  }
`;
