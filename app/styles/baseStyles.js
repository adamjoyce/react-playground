import {injectGlobal} from 'styled-components';

const baseStyles = (theme) => injectGlobal`
  html {
    height: 100%;
    overflow-y: hidden;
  }

  body {
    font-family: ${theme.fonts.secondary}
    height: 100%;
    overflow-y: hidden;
  }

  #app {
    height: 100%;
    overflow-y: hidden;
  }

  .slide-enter {
    transform: translateX(-100%);
  }

  .slide-enter.slide-enter-active {
    animation: slide-in 250ms ease-out 500ms, scale-up 250ms ease-in 750ms;
    animation-fill-mode: forwards;
  }

  .slide-exit.slide-exit-active {
    animation: scale-down 250ms ease-out, slide-out 250ms ease-in 250ms;
    animation-fill-mode: forwards;
  }

  @keyframes slide-in {
    0% {transform: translateX(-100%) scale(0.8);}
    100% {transform: translateX(0) scale(0.8);}
  }

  @keyframes slide-out {
    0% {transform: translateX(0) scale(0.8);}
    100% {transform: translateX(100%) scale(0.8);}
  }

  @keyframes scale-up {
    0% {transform: scale(0.8)}
    100% {transform: scale(1)}
  }

  @keyframes scale-down {
    0% {transform: scale(1)}
    100% {transform: scale(0.8)}
  }
`;

export default baseStyles;
