export default {
    transform: {
      "^.+\\.js$": "babel-jest"
    },
    moduleFileExtensions: ["js"],
    testEnvironment: "node",
    extensionsToTreatAsEsm: [".js"],
  };  