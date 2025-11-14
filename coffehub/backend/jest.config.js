export default {
  testEnvironment: 'node',



  // No transform: tu backend ya está en ESM puro
  transform: {},

  // Donde guardar cobertura
  coverageDirectory: 'coverage',
  collectCoverage: true,
  collectCoverageFrom: [
    'server.js',
    '!node_modules/**',
    '!coverage/**',
    '!tests/**',
    '!jest.config.js'
  ],

  // Patrón de tests (unit, mocked, integration)
  testMatch: [
    '**/tests/unit/**/*.test.js',
    '**/tests/unit-mocked/**/*.test.js',
    '**/tests/integration/**/*.test.js'
  ],

  // Cargar setup antes de los tests
  setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],

  // Tiempos y estabilidad
  testTimeout: 30000,
  verbose: true,
  forceExit: true,
  detectOpenHandles: true,

  // Reportes
  reporters: [
    'default',
    ['jest-junit', { outputDirectory: './', outputName: 'junit.xml' }]
  ]
};
