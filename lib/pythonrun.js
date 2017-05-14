module.exports = function pythonRun() {
	
	var PythonShell = require('./python-shell');

	PythonShell.run('my_script.py', function (err) {
	  if (err) throw err;
	  console.log('finished');
	});
	
	return {
		PythonShell: PythonShell
	};
};