
var fs = require("fs");
var colors = require("colors");
var mkdirp = require("mkdirp");
var fsx = require("fs-extra");

exports.assignment = function (pathString) {
    var dir1 = pathString;
    var dir2 = dir1 + '\\processed';
    var dir3 = fs.readdirSync(dir1);
    var dir4 = dir2 + '\\2014';
    var dir5 = dir2 + '\\2015';
    var dir6 = dir2 + '\\2016';
    var count14 = 0;
    var count15 = 0;
    var count16 = 0;
    
    console.log('Starting ...');
    console.log('Creating [processed] directories if not exists ...');
    
    mkdirp(dir2, function(err) {});
    mkdirp(dir4, function(err) {});
    mkdirp(dir5, function(err) {});
    mkdirp(dir6, function(err) {});
    
    console.log(colors.green('Sorting files ...'));
    
    for (var i = 0; i < dir3.length; i++) {
        if (dir3[i].startsWith('2014')) {
            var oldPath1 = dir1 + '\\' + dir3[i];
            var newPath1 = dir4 + '\\' + dir3[i];
            fsx.move(oldPath1, newPath1, function (err) {});
            count14++;
        } else if (dir3[i].startsWith('2015')) {
            var oldPath2 = dir1 + '\\' + dir3[i];
            var newPath2 = dir5 + '\\' + dir3[i];
            fsx.move(oldPath2, newPath2, function (err) {});
            count15++;
        } else if (dir3[i].startsWith('2016')) {
            var oldPath3 = dir1 + '\\' + dir3[i];
            var newPath3 = dir6 + '\\' + dir3[i];
            fsx.move(oldPath3, newPath3, function (err) {});
            count16++;
        } else {
            // do nothing    
        }
        
    }
        
    console.log(colors.cyan('Moved ' + count14 + ' logs into processed\\2014'));
    console.log(colors.cyan('Moved ' + count15 + ' logs into processed\\2015'));
    console.log(colors.cyan('Moved ' + count16 + ' logs into processed\\2016'));
    
    console.log(colors.green('... finished!'));
}