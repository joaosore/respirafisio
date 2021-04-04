import styled, { css } from 'styled-components';

import BG from '../../assets/background.svg';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

interface HeaderProps {
  scroll: boolean;
}

export const Header = styled.header<HeaderProps>`
  width: 100%;
  z-index: 100;
  .container {
    max-width: 1280px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  position: ${props => (props.scroll ? 'fixed' : 'absolute')};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  transition: all 350ms ease-in-out;
  .logo {
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      transition: all 350ms ease-in-out;
      max-width: 125px;
      width: 100%;
    }
  }
  ${props =>
    props.scroll &&
    css`
      background-color: #0b70ff;
      .logo {
        img {
          max-width: 75px;
          width: 100%;
        }
      }
    `}

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    li {
      display: flex;
      flex-direction: column;
      position: relative;
      align-items: center;
      &:after {
        content: '';
        width: 0;
        background-color: #fff;
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
      a {
        padding: 15px;
        font-weight: 700;
        color: #fff;
        text-decoration: none;
      }
    }
  }

  @media only screen and (max-width: 991px) {
    .container {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    ul {
      display: none;
    }
  }
`;

export const Presentation = styled.div`
  background-image: url(${BG});
  height: 900px;
  width: 100%;
  background-position: center bottom;
  background-size: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    &.container {
      max-width: 1280px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
      padding: 15px;
    }
    display: flex;
    flex-direction: column;
    align-items: baseline;
    &.text {
      max-width: 360px;
    }
    h1 {
      font-size: 44px;
      color: #fff;
      font-weight: 700;
    }
    p {
      color: #fff;
      font-weight: 500;
      margin-top: 15px;
    }
    a {
      background-color: #21a7ae;
      border-radius: 50px;
      padding: 15px 30px;
      text-decoration: none;
      color: #fff;
      font-weight: 600;
      margin-top: 30px;
    }
    img {
      max-width: 600px;
      width: 100%;
    }
  }
  @media only screen and (max-width: 991px) {
    height: auto;
    div {
      &.container {
        flex-direction: column-reverse;
        padding: 15px;
        margin-top: 137px;
        margin-bottom: 100px;
        .text {
          max-width: 360px;
          margin-top: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          h1 {
            text-align: center;
          }
        }
      }
    }
  }
`;

export const Parceiros = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 50px;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    max-width: 1280px;
    width: 100%;
    display: flex;
    img {
      max-width: 300px;
      width: 100%
    }
  }

  @media only screen and (max-width: 991px) {
    .container {
      flex-direction: column;
      img {
        padding: 50px;
      }
    }
  }
`

export const Atendimentos = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 50px;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    max-width: 1280px;
    width: 100%;
    display: flex;
    flex-direction: column;
    h2 {
      font-size: 45px;
      text-transform: uppercase;
      margin-bottom: 50px;
    }
    .box-itens {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      .item {
        display: flex;
        align-items: center;
        justify-content: center;

        margin-bottom: 50px;
        flex-direction: row-reverse;
        &:nth-child(2n+1){
          flex-direction: row;
        } 
        img {
          max-width: 50%;
          border-top-left-radius: 50px;
          border-bottom-right-radius: 50px;
          border: 5px solid #33BBFF;
        }
        .conteudo {
          padding: 15px 50px;
          h3 {
            font-size: 40px;
            margin-bottom: 20px;
          }
          p {
            font-size: 20px;
            line-height: 30px;
            color: #525252ee;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 991px) {
    padding: 0;
    .container {
      h2 {
        font-size: 30px;
        text-align: center;
        padding: 15px;
      }
      .box-itens {
        .item {
          padding: 15px;
          flex-direction: column;
          margin-bottom: 0;
          &:nth-child(2n+1){
            flex-direction: column;
          }
          .conteudo {
            padding: 0;
          }
          img {
            max-width: 100%;
            margin-bottom: 20px;
          }
        }
      }
    }

  }
`

export const Publicacoes = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 50px;
  background-image: url(${BG});
  background-position: center;
  background-size: 500%;
  background-repeat: no-repeat;
  overflow: hidden;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    max-width: 1280px;
    width: 100%;
    display: flex;
    flex-direction: column;
    h2 {
      font-size: 45px;
      text-transform: uppercase;
      margin-bottom: 50px;
      color: #FFF;
    }
    .box-itens {
      display: flex;
      align-items: center;
      justify-content: center;
      .item {
        box-shadow: 0px 0px 16px #0000008c;
        border-radius: 50px;
        margin: 20px;
        a {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 27px;
          color: #FFF;
          font-style: italic;
          text-decoration: none;
          position: relative;
          p {
            position: absolute;
            display: block;
            text-align: center;
          }
        }
        img {
          border-radius: 50px;
          max-width: 100%;
          width: 100%;
        }
      }
    }
  }

  @media only screen and (max-width: 991px) {
    background-size: cover;
    .container {
      h2 {
        font-size: 30px;
        text-align: center;
      }
      .box-itens {
        flex-direction: column;
        .item {
          a {
            p {
              padding: 15px;
              font-size: 20px;
            }
          }
        }
      }
    }
  }
`

export const Sobre = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 50px;
  overflow: hidden;
  height: 700px;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    max-width: 1280px;
    width: 100%;
    display: flex;
    flex-direction: column;
    h2 {
      font-size: 45px;
      text-transform: uppercase;
      margin-bottom: 50px;
    }
    p {
      font-size: 30px;
      font-style: italic;
      margin-bottom: 20px;
      font-weight: 200;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  @media only screen and (max-width: 991px) {
    .container {
      padding: 15px;
      h2 {
        font-size: 30px;
        text-align: center;
      }
      p {
        font-size: 16px;
      }
    }
  }
`

export const Contato = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 50px;
  background-image: url(${BG});
  background-position: center;
  background-size: 500%;
  background-repeat: no-repeat;
  overflow: hidden;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    max-width: 1280px;
    width: 100%;
    display: flex;
    flex-direction: column;
    h2 {
      font-size: 45px;
      text-transform: uppercase;
      margin-bottom: 50px;
      color: #FFF;
    }
    .box-itens {
      display: flex;
      align-items: center;
      justify-content: center;
      .item {
        border: 5px solid #FFFF;
        border-radius: 10px;
        padding: 25px;
        flex: 1;
        margin: 15px;
        min-height: 350px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        h3 {
          text-transform: uppercase;
          font-size: 45px;
          text-align: center;
          margin-bottom: 30px;
          color: #FFF;
        }
        h4 {
          font-size: 27px;
          text-align: center;
          color: #FFF;
          margin-top: 20px;
          margin-bottom: 20px;
        }
        p, a {
          color: #FFF;
          font-size: 17px;
          font-weight: 500;
          text-decoration: none;
        }
      }
    }
    .box-itens-redes {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin-top: 30px;
      .item {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        img {
          margin-bottom: 20px;
          max-width: 50px;
        }
        a {
          color: #FFF;
          font-size: 17px;
          font-weight: 700;
          text-decoration: none;
        }
      }
    }
  }

  @media only screen and (max-width: 991px) {
    background-size: cover;
    .container {
      h2 {
        font-size: 30px;
        text-align: center;
      }
      .box-itens {
        flex-direction: column;
        padding: 15px;
        .item {
          width: 100%;
          h3 {
            font-size: 30px;
          }
          h4 {
          }
          p {
          }
        }
      }
      .box-itens-redes {
        flex-direction: column;
        padding: 15px;
        .item {
          margin-bottom: 25px;
          &:last-child {
            margin: 0;
          }
        }
      }
    }
  }
`