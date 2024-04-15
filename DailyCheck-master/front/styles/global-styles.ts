import { createGlobalStyle } from 'styled-components';

import reset from 'styled-reset';

import NotoSansKRLightwoff2 from 'styles/fonts/NotoSansKR-Light.woff2';
import NotoSansKRLightwoff from 'styles/fonts/NotoSansKR-Light.woff';
import NotoSansKRLightotf from 'styles/fonts/NotoSansKR-Light.otf';

import NotoSansKRegularwoff2 from 'styles/fonts/NotoSansKR-Regular.woff2';
import NotoSansKRegularwoff from 'styles/fonts/NotoSansKR-Regular.woff';
import NotoSansKRegularotf from 'styles/fonts/NotoSansKR-Regular.otf';

import NotoSansKRMediumwoff2 from 'styles/fonts/NotoSansKR-Medium.woff2';
import NotoSansKRMediumwoff from 'styles/fonts/NotoSansKR-Medium.woff';
import NotoSansKRMediumotf from 'styles/fonts/NotoSansKR-Medium.otf';

import NotoSansKBoldwoff2 from 'styles/fonts/NotoSansKR-Bold.woff2';
import NotoSansKBoldwoff from 'styles/fonts/NotoSansKR-Bold.woff';
import NotoSansKBoldotf from 'styles/fonts/NotoSansKR-Bold.otf';

import PretendardRegularwoff from 'styles/fonts/Pretendard-Regular.woff';
import PretendardRegularwoff2 from 'styles/fonts/Pretendard-Regular.woff2';

const globalStyles = createGlobalStyle`
${reset}

@font-face {
    font-family: 'Pretendard-Regular';
    src: url(${PretendardRegularwoff2}) format('woff2'), url(${PretendardRegularwoff}) format('woff');
    font-weight: 400;
    font-style: normal;
}

  @font-face {
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: 100;
    src: url(${NotoSansKRLightwoff2}) format('woff2'), url(${NotoSansKRLightwoff}) format('woff'),
      url(${NotoSansKRLightotf}) format('truetype');
  }
  
  @font-face {
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: normal;
    src: url(${NotoSansKRegularwoff2}) format('woff2'), url(${NotoSansKRegularwoff}) format('woff'),
      url(${NotoSansKRegularotf}) format('truetype');
  }
  
  @font-face {
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: 500;
    src: url(${NotoSansKRMediumwoff2}) format('woff2'), url(${NotoSansKRMediumwoff}) format('woff'),
      url(${NotoSansKRMediumotf}) format('truetype');
  }
  
  @font-face {
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: bold;
    src: url(${NotoSansKBoldwoff2}) format('woff2'), url(${NotoSansKBoldwoff}) format('woff'),
      url(${NotoSansKBoldotf}) format('truetype');
  }

* {
  box-sizing: border-box;
}

html {
  font-size: 16px;
  font-family: 'Pretendard-Regular', 'Noto Sans CJK KR';
}
body{
  font-family: 'Pretendard-Regular', 'Noto Sans CJK KR';
  overflow-x: hidden;
  overflow-y: auto;
  overflow: overlay;
}
body {
  color: #383838;
}
strong {
  font-weight: bold;
}
a {
    color: inherit;
    text-decoration: none;
}
input, button {
  font-family: 'Pretendard-Regular', 'Noto Sans CJK KR';
    background-color: transparent;
    border: none;
    outline: none;
}
input[type='checkbox'] {
    margin : 0px;
}
h1, h2, h3, h4, h5, h6{
  font-family: 'Pretendard-Regular', 'Noto Sans CJK KR';
}
ol, ul, li {
    list-style: none;
}
img {
    width: 100%;
    height: 100%;
}
button {
    cursor: pointer;
}
textarea {
  font-family: 'Pretendard-Regular', 'Noto Sans CJK KR';
}
canvas {
    display : inline;
}
/* input, textarea, button { appearance: none; -moz-appearance: none; -webkit-appearance: none; border-radius: 0; -webkit-border-radius: 0; -moz-border-radius: 0; } */

`;
export default globalStyles;
