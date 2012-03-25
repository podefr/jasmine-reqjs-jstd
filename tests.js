var requirejs = require("requirejs"),
	fs = require("fs"),
	jasmine = require("jasmine-node"),
	TerminalReporter = require("jasmine-node/lib/jasmine-node/reporter").jasmineNode.TerminalReporter;

requirejs.config({
	nodeRequire: require
});

["src", 
 "specs"].forEach(function (path) {
	 fs.readdirSync(path).forEach(function (file) {
		 requirejs(path+"/"+file);
	 });
 });

jasmine.getEnv().addReporter(new TerminalReporter({}));
jasmine.getEnv().execute();