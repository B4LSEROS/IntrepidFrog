module.exports = {
    all: true, // Indicates the recollection of all code during test execution.
    extends: "@istanbuljs/nyc-config-typescript", //Extends the nyc configuration to further support heavily-charged typeScript applications
    exclude: [
      'src/__tests__',
      'src/db/configurations',
      'src/db/migrations',
      'src/db/seeders',
      'src/app.ts',
      'src/server.ts'
    ],
    include: ['src/**/*.ts'] //Use to state that all files within src will be covered by the tests. 
  };