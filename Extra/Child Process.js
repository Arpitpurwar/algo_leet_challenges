var express = require('express');
var Q = require('q');
var router = express.Router();

var pythonExecutable = "python";
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({'response':'respond with a resource'});
});


/* POSTAPI by Nishanth*/
router.post('/pathForPythonScript', function(req, res, next) {
  pythonData(req.body.path,req.body.arg,req.body.arg1,req.body.arg2).then((data=>{res.send({'response':data});})).catch();
});
var pythonData = function (updatedfile, arg, arg1, arg2) {
  var defer = Q.defer();
  console.log("updatefile, arg, arg1, arg2", updatedfile, arg, arg1, arg2);

  // Function to convert an Uint8Array to a string
  var uint8arrayToString = function (data) {
      return String.fromCharCode.apply(null, data);
  };
  // The path to your python script
  const spawn = require('child_process').spawn;
  const scriptExecution = spawn(pythonExecutable, [updatedfile, arg, arg1, arg2]);

  // Handle normal output
  scriptExecution.stdout.on('data', (data) => {

      console.log("execution", uint8arrayToString(data));
  });

  // Handle error output
  scriptExecution.stderr.on('data', (data) => {
      // As said before, convert the Uint8Array to a readable string.
      console.log(uint8arrayToString(data));

  });

  scriptExecution.on('exit', (code) => {
      console.log("Process quit with code : " + code);
      if (code === 0 || code === 1 || code === 2) {
          defer.resolve({ 'response': code });
      } else {
          defer.reject({ 'response': code })
      }
  });
  return defer.promise;
}

module.exports = router;