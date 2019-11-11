module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",

  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,vue,ts}", "!**/node_modules/**", "!**/dist/**", "!**/coverage/**"],

  reporters: ["default", "jest-junit"],
};
