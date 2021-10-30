const yargs = require('yargs');
const configure = require('./configure');

yargs.command({
  command: 'configure',
  describe: 'Configure WireMock Server',
  builder: {
    username: {
      describe: 'The username required to login to WireMock Server',
      demandOption: true,
      type: 'string',
    },
    password: {
      describe: 'The password required to login to WireMock Server',
      demandOption: true,
      type: 'string',
    },
    url: {
      describe: 'The URL for WireMock Server (without https://)',
      demandOption: true,
      type: 'string',
    },
    logLevel: {
      describe: 'Set the log level for WireMock Server (trace/debug/info/warn/error/silent)',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    // configure.configureWireMock(argv.username, argv.password, argv.url);
    configure.configureWireMock(argv);
  },
});

yargs.parse();
