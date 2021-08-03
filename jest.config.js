module.exports = async () => {
  return {
    testEnvironment: "jsdom",
    collectCoverage: true,
    coverageReporters: ["text-summary"],
    coverageThreshold: {
      global: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: 80
      }
    },
    setupFilesAfterEnv: ["<rootDir>/test/jest-setup.ts"],
    moduleNameMapper: {
      "^.+\\.(css|less|scss)$": "babel-jest"
    }
  };
};
