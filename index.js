/**
* Python-run Hook
**/
module.exports = function(sails) {

	var pythonRun = require('./lib/pythonrun');
	
	return {
		pythonRun: pythonRun
	};
};