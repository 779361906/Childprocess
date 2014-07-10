var cp = require('child_process');
newChildProcess(3000);
newChildProcess(4000);

function newChildProcess(port){
    var child_evn = process.env;
        child_evn.PORT = port;
      var scp = cp.spawn('node', ['./Pm25WebApp-master/app'], {
        cwd: undefined,
        env: child_evn,
        setsid: false
        });
    scp.stdout.on('data', function (data) {
        console.log('stdout: ' + data);
    });
    scp.stderr.on('data', function (data) {
        console.log('stderr: ' + data);
    });
    scp.on('exit', function (code) {
        console.log('child process exited with code ' + code);
    });
    controlChildProcess(scp);
}
function controlChildProcess(cp){
    //console.log('callbrack function at controlChildProcess');
    setTimeout(function(){
        cp.kill('SIGINT');
    },3000);

}
