import { DarkTheme, DefaultTheme } from "@react-navigation/native";

import type { ThemeConfiguration } from "@/types/theme/config";

const colorsLight = {
  grayTextTitle: "#1B1721",
  grayTextSubtitle: "#54536A",
  grayTextBody: "#211C28",
  grayTextCaption: "#72708F",
  white: "#FFFFFF",
  green500: "#15BC76",
  apricot500: "#DE7D54",
  orange500: "#F23832",
  whiteOpacity70: "#FFFFFFB3",
  graySuva: "#868686",
  red500: "#BD0233",
  purple500: "#807E9A",

  gray800: "#303030",
  gray400: "#4D4D4D",
  gray200: "#A1A1A1",
  gray100: "#DFDFDF",
  gray50: "#EFEFEF",
  purple100: "#E1E1EF",
  purple50: "#1B1A23",
  statusBar: "#FFFFFF",
} as const;

const colorsDark = {
  grayTextTitle: "#1B1721",
  grayTextSubtitle: "#54536A",
  grayTextBody: "#211C28",
  grayTextCaption: "#72708F",
  white: "#FFFFFF",
  green500: "#15BC76",
  apricot500: "#DE7D54",
  orange500: "#F23832",
  whiteOpacity70: "#FFFFFFB3",
  graySuva: "#868686",

  red500: "#C13333",
  purple500: "#A6A4F0",

  gray800: "#E0E0E0",
  gray400: "#969696",
  gray200: "#BABABA",
  gray100: "#000000",
  gray50: "#EFEFEF",
  purple100: "#252732",
  purple50: "#1B1A23",
  statusBar: "#FFFFFF",
} as const;

const sizes = [12, 14, 16, 24, 32, 40, 80] as const;

export const config = {
  colors: colorsLight,
  fonts: {
    sizes,
    colors: colorsLight,
  },
  gutters: sizes,
  backgrounds: colorsLight,
  borders: {
    widths: [1, 2],
    radius: [4, 16],
    colors: colorsLight,
  },
  navigationColors: {
    ...DefaultTheme.colors,
    background: colorsLight.statusBar,
    card: colorsLight.gray50,
  },
  variants: {
    dark: {
      colors: colorsDark,
      fonts: {
        colors: colorsDark,
      },
      backgrounds: colorsDark,
      navigationColors: {
        ...DarkTheme.colors,
        background: colorsDark.purple50,
        card: colorsDark.purple50,
      },
    },
  },
} as const satisfies ThemeConfiguration;
