import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  div {
    display: flex;
    width: 100%;
    height: 100%;
    position: relative;
    top: 0;
    left: 0;
    &.A {
      background-color: #4881f1;
      position: absolute;
      flex: 1;
      animation: animateLoading 1.5s;
      transform: translateX(100%);
    }
    &.B {
      background-color: #89ebc9;
      position: absolute;
      flex: 1;
      animation: animateLoading 600ms 900ms;
      transform: translateX(100%);
    }
    &.C {
      background-color: #7e8ceb;
      position: absolute;
      flex: 1;
      animation: animateLoading 1200ms 300ms;
      transform: translateX(100%);
    }

    @keyframes animateLoading {
      0% {
        transform: translateX(-100%);
      }
      50% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(100%);
      }
    }
  }
`;
