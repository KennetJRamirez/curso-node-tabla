const yargs = require("yargs");

const argv = require("yargs")
	.option("b", {
		alias: "base",
		type: "number",
		demandOption: true,
		describe: "Es la base de la tabla de multiplicar",
	})
	.option("l", {
		alias: "listar",
		type: "boolean",
		default: false,
		describe: "Muestra la tabla en consola",
	})
	.option("h", {
		alias: "hasta",
		type: "number",
		default: 10,
		describe: "Muestra hasta que numero mostrara la tabla",
	})
	.check((argv, options) => {
		if (isNaN(argv.base)) {
			throw "La base debe ser un numero.";
		}
		return true;
	}).argv;

module.exports = {
	argv,
};
