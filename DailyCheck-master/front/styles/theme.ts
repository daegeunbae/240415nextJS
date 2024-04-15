import baseStyled, {
  css,
  CSSProp,
  ThemedStyledInterface,
} from "styled-components";

const sizes: { [key: string]: number } = {
  mobile: 480,
  tablet: 768,
  desktop: 1240,
};

type BackQuoteArgs = string[];

interface Media {
  mobile: (...args: BackQuoteArgs) => CSSProp | undefined;
  tablet: (...args: BackQuoteArgs) => CSSProp | undefined;
  desktop: (...args: BackQuoteArgs) => CSSProp | undefined;
}

const media: Media = {
  mobile: (...args: BackQuoteArgs) => undefined,
  tablet: (...args: BackQuoteArgs) => undefined,
  desktop: (...args: BackQuoteArgs) => undefined,
};

Object.keys(sizes).reduce((acc: Media, label: string) => {
  switch (label) {
    case "mobile":
      acc.mobile = (...args: BackQuoteArgs) =>
        css`
          @media only screen and (max-width: ${sizes.mobile}px) {
            ${args}
          }
        `;
      break;
    case "tablet":
      acc.tablet = (...args: BackQuoteArgs) =>
        css`
          @media only screen and (min-width: ${sizes.mobile}px) and (max-width: ${sizes.tablet}px) {
            ${args}
          }
        `;
      break;
    case "desktop":
      acc.desktop = (...args: BackQuoteArgs) =>
        css`
          @media only screen and (min-width: ${sizes.tablet}px) {
            ${args}
          }
        `;
      break;

    default:
      break;
  }
  return acc;
}, media);

const colors = {
  white: "#ffffff",
  black: "#505050",
  purple: "#652A97",
  lightPurple: "#9988f8",
  lightBlue: "#00A0E8",
  blue: "#075EA6",
  danger: "#ff7875",
  primary: "#1890ff",
  gray: "#808080",
  green: "#49A9C4",
  honeydew: "#F0FFF0",
};

const secondaryColors = {};
const fontSizes: string[] = [];

const theme = {
  colors,
  fontSizes,
  secondaryColors,
  media,
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
export default theme;
