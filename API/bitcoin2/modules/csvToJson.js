// Faz uma função que recebe o áreas das. Colunas e um q recebe o arquivo
// Ai dentro vc quebra o csv
// Montando um array de objetos com os nomes das propriedades como sendo os do array

const Papa = require('papaparse')

// Parse CSV string
var data = Papa.parse(csv);

// Convert back to CSV
var csv = Papa.unparse(data);

// Parse local CSV file
Papa.parse('./mtgoxCAD', {
	complete: function(results) {
		console.log("Finished:", results.data);
	}
});

// // Stream big file in worker thread
// Papa.parse(bigFile, {
// 	worker: true,
// 	step: function(results) {
// 		console.log("Row:", results.data);
// 	}
// });