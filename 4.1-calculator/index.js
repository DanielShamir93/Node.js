const yargs = require("yargs");

yargs.command({
  command: "add",
  describe: "add operator",
  builder: {
    x: {
      describe: "first number",
      demandOption: true,
      type: "number"
    },
    y: {
      describe: "second number",
      demandOption: true,
      type: "number"
    },
  },
  handler: function (argv) {
    console.log(argv.x + argv.y)
  }
});

yargs.command({
  command: "sub",
  describe: "subtract operator",
  builder: {
    x: {
      describe: "first number",
      demandOption: true,
      type: "number"
    },
    y: {
      describe: "second number",
      demandOption: true,
      type: "number"
    },
  },
  handler: function (argv) {
    console.log(argv.x - argv.y)
  }
});

yargs.command({
  command: "mult",
  describe: "subtract operator",
  builder: {
    x: {
      describe: "first number",
      demandOption: true,
      type: "number"
    },
    y: {
      describe: "second number",
      demandOption: true,
      type: "number"
    },
  },
  handler: function (argv) {
    console.log(argv.x * argv.y)
  }
});

yargs.command({
  command: "pow",
  describe: "subtract operator",
  builder: {
    x: {
      describe: "first number",
      demandOption: true,
      type: "number"
    },
    y: {
      describe: "second number",
      demandOption: true,
      type: "number"
    },
  },
  handler: function (argv) {
    console.log(argv.x ** argv.y)
  }
});


yargs.parse();