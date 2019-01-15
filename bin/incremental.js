#!/usr/bin/env node
const meow = require("meow");

const cli = meow(`
    Usage
      $ incremental <path>

    Options
      --port, -p     The port to use (default: 8080)

    Examples
      $ incremental build/index.html
	  $ incremental https://bitovi.github.io/dog-things-react/ --port 8085
`, {
    flags: {
        port: {
            type: 'string',
            alias: 'p'
        }
    }
});

require("../lib/cli")(cli.input[0], cli.flags);
const PORT = cli.flags.port || 8080;
console.error(`Servering your app at http://localhost:${PORT}`);
