const fs = require("node:fs");
const colors = require("colors");

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
	try {
		let salida = "",
			consola = "";
		for (let i = 1; i <= hasta; i++) {
			salida += `${base} x ${i} = ${base * i}\n`;
			consola += `${base} ${"x".green} ${i} ${"=".green} ${base * i}\n`;
		}

		if (listar) {
			console.log(`======================`.green);
			console.log("     Tabla del", `${base}`.blue);
			console.log(`======================`.green);
			console.log(consola);
		}

		fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
		return `tabla-${base}.txt`;
	} catch (error) {
		throw error;
	}
};

module.exports = {
	crearArchivo,
};
