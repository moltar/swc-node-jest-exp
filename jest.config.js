module.exports = {
  // preset: 'ts-jest',
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc-node/jest',
      {
        dynamicImport: true,
      },
    ],
  },
}
