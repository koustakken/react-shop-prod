export default {
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,
  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: [
    "\\\\node_modules\\\\"
  ],
  // An array of directory names to be searched recursively up from the requiring module's location
  moduleDirectories: [
    "node_modules",
    "<rootDir>src"
  ],
  // An array of file extensions your modules use
  moduleFileExtensions: [
    "js",
    "mjs",
    "cjs",
    "jsx",
    "ts",
    "tsx",
    "json",
    "node"
  ],
  rootDir: '../../',
  testEnvironment: "jsdom",
  // The glob patterns Jest uses to detect test files
  testMatch: [
    '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'
  ],
  modulePaths: [
    '<rootDir>src'
  ],
  setupFilesAfterEnv: [
    '<rootDir>config/jest/setupTests.ts'
  ],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src',
    '\\.s?css$': 'identity-obj-proxy'
  }
};

