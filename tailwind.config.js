import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,ts,scss}",
  ],
  theme: {
    extend: {
      colors: {
        "background": {
          "DEFAULT": "#f4f7ff"
        },
        "content1": {
          "DEFAULT": "#FFFFFF",
          "foreground": "#0d2c5d"
        },
        "content2": {
          "DEFAULT": "#f4f7ff",
          "foreground": "#0d2c5d"
        },
        "content3": {
          "DEFAULT": "#e4e9f7",
          "foreground": "#0d2c5d"
        },
        "content4": {
          "DEFAULT": "#d4ddf0",
          "foreground": "#0d2c5d"
        },
        "divider": {
          "DEFAULT": "rgba(13, 44, 93, 0.15)"
        },
        "focus": {
          "DEFAULT": "#0d2c5d"
        },
        "foreground": {
          "50": "#f4f7ff",
          "100": "#e4e9f7",
          "200": "#d4ddf0",
          "300": "#b0c0e0",
          "400": "#8a9fcf",
          "500": "#6480be",
          "600": "#4a63a3",
          "700": "#354a7d",
          "800": "#213058",
          "900": "#0d2c5d",
          "DEFAULT": "#0d2c5d"
        },
        "overlay": {
          "DEFAULT": "#0d2c5d"
        },
        "primary": {
          "50": "#e6f4fe",
          "100": "#cce9fd",
          "200": "#b0e0fd",
          "300": "#7ac9fc",
          "400": "#44b2fa",
          "500": "#1e9bf8",
          "600": "#0a7ed0",
          "700": "#0d62a9",
          "800": "#0d4782",
          "900": "#0d2c5d",
          "DEFAULT": "#0d2c5d",
          "foreground": "#ffffff"
        },
        "secondary": {
          "50": "#e6f4fe",
          "100": "#cce9fd",
          "200": "#b0e0fd",
          "300": "#7ac9fc",
          "400": "#44b2fa",
          "500": "#1e9bf8",
          "600": "#0a7ed0",
          "700": "#0d62a9",
          "800": "#0d4782",
          "900": "#0d2c5d",
          "DEFAULT": "#b0e0fd",
          "foreground": "#0d2c5d"
        },
        "success": {
          "50": "#e8faf0",
          "100": "#d1f4e0",
          "200": "#a2e9c1",
          "300": "#74dfa2",
          "400": "#45d483",
          "500": "#17c964",
          "600": "#12a150",
          "700": "#0e793c",
          "800": "#095028",
          "900": "#052814",
          "DEFAULT": "#17c964",
          "foreground": "#000"
        },
        "warning": {
          "50": "#fefce8",
          "100": "#fdedd3",
          "200": "#fbdba7",
          "300": "#f9c97c",
          "400": "#f7b750",
          "500": "#f5a524",
          "600": "#c4841d",
          "700": "#936316",
          "800": "#62420e",
          "900": "#312107",
          "DEFAULT": "#f5a524",
          "foreground": "#000"
        },
        "danger": {
          "50": "#fee7ef",
          "100": "#fdd0df",
          "200": "#faa0bf",
          "300": "#f871a0",
          "400": "#f54180",
          "500": "#f31260",
          "600": "#c20e4d",
          "700": "#920b3a",
          "800": "#610726",
          "900": "#310413",
          "DEFAULT": "#f31260",
          "foreground": "#ffffff"
        },
        "default": {
          "50": "#f4f7ff",
          "100": "#e4e9f7",
          "200": "#d4ddf0",
          "300": "#b0c0e0",
          "400": "#8a9fcf",
          "500": "#6480be",
          "600": "#4a63a3",
          "700": "#354a7d",
          "800": "#213058",
          "900": "#0d2c5d",
          "DEFAULT": "#d4ddf0",
          "foreground": "#0d2c5d"
        }
      }
    },
  },
  darkMode: "class",
  plugins: [
    // Aquí puedes agregar plugins si es necesario
  ]
}
