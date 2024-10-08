/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src", "./lib", "./"],
        extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
        alias: {
          "@": "./src",
          "@api": "./src/services/api",
          "@services": "./src/services",
          "@theme": "./src/theme",
          "@types": "./src/types",
          "@utils": "./src/utils",
          "@schemas": "./src/types/schemas",
          "@mocks": "./src/mock",
          "@components": "./src/components",
          "@molecules": "./src/components/molecules",
          "@organisms": "./src/components/organisms",
          "@templates": "./src/components/template",
          "@atoms": "./src/components/atoms",
          "@hooks": "./src/hooks",
          "@lib": "./lib/"
        },
      },
    ],
    "inline-dotenv",
    "react-native-reanimated/plugin", // needs to be last
  ],
};
