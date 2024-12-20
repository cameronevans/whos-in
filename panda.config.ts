import {
  defineConfig,
  defineSemanticTokens,
  defineTokens,
} from "@pandacss/dev";
import { createPreset } from "@park-ui/panda-preset";
import typographyPreset from "pandacss-preset-typography";
import amber from "@park-ui/panda-preset/colors/amber";
import sand from "@park-ui/panda-preset/colors/sand";

export default defineConfig({
  preflight: true,
  // presets: [
  //   createPreset({ accentColor: amber, grayColor: sand, radius: "sm" }),
  // ],
  include: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
  jsxFramework: "react", // or 'solid' or 'vue'
  outdir: "styled-system",
  theme: {
    extend: {
      slotRecipes: {
        field: {
          className: "field",
          slots: [
            "root",
            "label",
            "input",
            "textarea",
            "select",
            "helperText",
            "errorText",
          ],
          base: {
            root: {
              display: "flex",
              flexDirection: "column",
              gap: "1.5",
            },
            label: {
              color: "fg.default",
              fontWeight: "medium",
              textStyle: "sm",
            },
            helperText: {
              color: "fg.muted",
              textStyle: "sm",
            },
          },
        },
        layout: {
          className: "layout",
          slots: ["aside", "main"],
          base: {
            aside: {
              bg: {
                base: "gray.2",
                _dark: "#0e0e0e",
              },
              borderRightWidth: "1px",
              position: "fixed",
              top: "0",
              bottom: "0",
              display: { base: "none", md: "block" },
              ps: "max(32px, calc((100vw - (1440px - 64px)) / 2))",
              pe: "8",
              pb: "10",
              minWidth: "272px",
              overflow: "auto",
              overscrollBehavior: "contain",
              width: {
                base: "272px",
                lg: "calc((100vw - (1440px - 64px)) / 2 + 272px - 32px)",
              },
              zIndex: "2",
            },
            main: {
              minWidth: "0",
              flex: "1",
              ps: {
                base: "0",
                md: "max(calc((100vw - 1440px) / 2 + 272px), 272px)",
              },
              pe: "calc((100vw - 1440px) / 2)",
            },
          },
        },
      },
    },
  },
});

// export const coral = {
//   name: "coral",
//   tokens: defineTokens.colors({
//     light: {
//       "1": { value: "#fff8f7" },
//       "2": { value: "#ffefef" },
//       "3": { value: "#ffe5e4" },
//       "4": { value: "#ffdbda" },
//       "5": { value: "#ffd2d1" },
//       "6": { value: "#ffc9c8" },
//       "7": { value: "#ffbeb8" },
//       "8": { value: "#ffb2a8" },
//       "9": { value: "#EB5E41" },
//       "10": { value: "#de5045" },
//       "11": { value: "#c9453b" },
//       "12": { value: "#762d25" },
//     },
//     dark: {
//       "1": { value: "#1c1412" },
//       "2": { value: "#391a18" },
//       "3": { value: "#55221e" },
//       "4": { value: "#722b25" },
//       "5": { value: "#8e342b" },
//       "6": { value: "#aa3d32" },
//       "7": { value: "#c6493a" },
//       "8": { value: "#e2503f" },
//       "9": { value: "#EB5E41" },
//       "10": { value: "#ef6b4e" },
//       "11": { value: "#f47a5c" },
//       "12": { value: "#faa19b" },
//     },
//   }),

//   semanticTokens: defineSemanticTokens.colors({
//     "1": {
//       value: {
//         _light: "{colors.coral.light.1}",
//         _dark: "{colors.coral.dark.1}",
//       },
//     },
//     "2": {
//       value: {
//         _light: "{colors.coral.light.2}",
//         _dark: "{colors.coral.dark.2}",
//       },
//     },
//     "3": {
//       value: {
//         _light: "{colors.coral.light.3}",
//         _dark: "{colors.coral.dark.3}",
//       },
//     },
//     "4": {
//       value: {
//         _light: "{colors.coral.light.4}",
//         _dark: "{colors.coral.dark.4}",
//       },
//     },
//     "5": {
//       value: {
//         _light: "{colors.coral.light.5}",
//         _dark: "{colors.coral.dark.5}",
//       },
//     },
//     "6": {
//       value: {
//         _light: "{colors.coral.light.6}",
//         _dark: "{colors.coral.dark.6}",
//       },
//     },
//     "7": {
//       value: {
//         _light: "{colors.coral.light.7}",
//         _dark: "{colors.coral.dark.7}",
//       },
//     },
//     "8": {
//       value: {
//         _light: "{colors.coral.light.8}",
//         _dark: "{colors.coral.dark.8}",
//       },
//     },
//     "9": {
//       value: {
//         _light: "{colors.coral.light.9}",
//         _dark: "{colors.coral.dark.9}",
//       },
//     },
//     "10": {
//       value: {
//         _light: "{colors.coral.light.10}",
//         _dark: "{colors.coral.dark.10}",
//       },
//     },
//     "11": {
//       value: {
//         _light: "{colors.coral.light.11}",
//         _dark: "{colors.coral.dark.11}",
//       },
//     },
//     "12": {
//       value: {
//         _light: "{colors.coral.light.12}",
//         _dark: "{colors.coral.dark.12}",
//       },
//     },

//     default: {
//       value: {
//         _light: "{colors.coral.light.9}",
//         _dark: "{colors.coral.dark.9}",
//       },
//     },
//     emphasized: {
//       value: {
//         _light: "{colors.coral.light.10}",
//         _dark: "{colors.coral.dark.10}",
//       },
//     },
//     fg: { value: { _light: "white", _dark: "white" } },
//     text: {
//       value: {
//         _light: "{colors.coral.light.11}",
//         _dark: "{colors.coral.dark.11}",
//       },
//     },
//   }),
// };

// export default defineConfig({
//   preflight: true,
//   validation: "warn",
//   presets: [
//     createPreset({ grayColor: sand, accentColor: coral, radius: "sm" }),
//     typographyPreset({
//       recipe: {
//         sizes: ["base"],
//         notProse: true,
//       },
//     }),
//   ],
//   include: ["./src/**/*.{js,jsx,ts,tsx}"],
//   jsxFramework: "react",
//   outdir: "styled-system",
//   patterns: {
//     extend: {
//       container: {
//         transform(props: Record<string, unknown>) {
//           return {
//             position: "relative",
//             width: "100%",
//             maxW: "8xl",
//             mx: "auto",
//             px: { base: "4", md: "8" },
//             ...props,
//           };
//         },
//       },
//     },
//   },
//   staticCss: {
//     recipes: {
//       code: [{ size: ["*"] }],
//       drawer: ["*"],
//     },
//   },
//   globalCss: {
//     extend: {
//       html: {
//         scrollPaddingTop: "6rem",
//         scrollBehavior: "smooth",
//         minHeight: "100%",
//       },
//       "html, body": {
//         display: "flex",
//         flexDirection: "column",
//       },
//       body: {
//         display: "flex",
//         flexDirection: "column",
//         flexGrow: "1",
//         fontFamily: "body",
//       },
//       pre: {
//         background: "transparent!",
//         overflowX: "auto",
//         fontSize: "13px !important",
//       },
//       blockquote: {
//         fontStyle: "normal!",
//         fontWeight: "normal!",
//       },
//       strong: {
//         color: "fg.default!",
//       },
//       code: {
//         fontFamily: "code",
//         "::selection": {
//           bg: "gray.dark.a4",
//         },
//       },
//       article: {
//         "--colors-prose-body": "colors.fg.muted",
//         "--colors-prose-heading": "colors.fg.default",
//         "--colors-prose-bold": "colors.fg.default",
//         "--colors-prose-link": "colors.fg.default",
//         "--colors-prose-code": "colors.fg.muted",
//         "--colors-prose-hr-border": "colors.border.subtle",
//         "--colors-prose-quote-border": "colors.accent.default",
//       },
//     },
//   },
//   theme: {
//     extend: {
//       tokens: {
//         fonts: {
//           body: { value: "var(--font-outfit), sans-serif" },
//           code: { value: "var(--font-roboto-mono), monospace" },
//         },
//       },
//       slotRecipes: {
//         field: {
//           className: "field",
//           slots: [
//             "root",
//             "label",
//             "input",
//             "textarea",
//             "select",
//             "helperText",
//             "errorText",
//           ],
//           base: {
//             root: {
//               display: "flex",
//               flexDirection: "column",
//               gap: "1.5",
//             },
//             label: {
//               color: "fg.default",
//               fontWeight: "medium",
//               textStyle: "sm",
//             },
//             helperText: {
//               color: "fg.muted",
//               textStyle: "sm",
//             },
//           },
//         },
//         layout: {
//           className: "layout",
//           slots: ["aside", "main"],
//           base: {
//             aside: {
//               bg: {
//                 base: "gray.2",
//                 _dark: "#0e0e0e",
//               },
//               borderRightWidth: "1px",
//               position: "fixed",
//               top: "0",
//               bottom: "0",
//               display: { base: "none", md: "block" },
//               ps: "max(32px, calc((100vw - (1440px - 64px)) / 2))",
//               pe: "8",
//               pb: "10",
//               minWidth: "272px",
//               overflow: "auto",
//               overscrollBehavior: "contain",
//               width: {
//                 base: "272px",
//                 lg: "calc((100vw - (1440px - 64px)) / 2 + 272px - 32px)",
//               },
//               zIndex: "2",
//             },
//             main: {
//               minWidth: "0",
//               flex: "1",
//               ps: {
//                 base: "0",
//                 md: "max(calc((100vw - 1440px) / 2 + 272px), 272px)",
//               },
//               pe: "calc((100vw - 1440px) / 2)",
//             },
//           },
//         },
//       },
//     },
//   },
// });
