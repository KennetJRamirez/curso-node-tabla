const { crearArchivo } = require("./helpers/mutiplicar.js");
const { argv } = require("./config/yargs.js");
const colors = require("colors");

console.clear();

//console.log(argv);

//const base = 100;

crearArchivo(argv.base, argv.listar, argv.hasta)
	.then((nombreArchivo) =>
		console.log(nombreArchivo.rainbow, "creado exitosamente!")
	)
	.catch((err) => console.log(err));
