var promise = require('promise-polyfill');
var glob = require('glob-promise');
var fs = require('fs');
var spawn = require('spawn-command');
var colors = require('colors');

function align(path, str) {
    var spaces = new Array(path.length + 1).join(' ');
    console.log(spaces.length)
    return str.replace(/\n/g, '\n' + spaces + '|');
}

module.exports = function run(program, pattern, command) {
    var log = program.log;
    var info = log.info;
    var warn = log.warn;
    glob(pattern).then(function(list) {
        list = list.filter(function(item) {
            if (fs.lstatSync(item).isDirectory()) {
                return true;
            }
            warn(item + ' is not a directory, ignore');
        });
        list.forEach(function(path){
            info("Run command in " + path + ': ' + command);
            var child = spawn(command, {
                cwd: process.cwd() + '/' + path
            });
            child.stdout.setEncoding('utf8');
            child.stderr.setEncoding('utf8');
            child.stdout.on('data', function(data) {
                process.stdout.write(path.green + '|' + align(path, data));
            });
            child.stderr.on('data', function(data) {
                process.stderr.write(path.red + '|' + align(path, data));
            });
            child.on('close', function(code) {
                console.log(path.green + ' exit with ' + code);
            });
        });
    })
}