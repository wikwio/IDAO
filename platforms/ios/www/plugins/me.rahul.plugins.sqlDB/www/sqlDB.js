cordova.define("me.rahul.plugins.sqlDB.sqlDB", function(require, exports, module) { var exec = require('cordova/exec');

exports.copy = function(dbname, success, error) {
    exec(success, error, "sqlDB", "copy", [dbname]);
};

exports.remove = function(dbname,success,error) {
	exec(success, error, "sqlDB", "remove", [dbname]);
};

});
