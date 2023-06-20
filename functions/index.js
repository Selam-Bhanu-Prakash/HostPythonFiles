const functions = require('firebase-functions');
const { exec } = require('child_process');

exports.runPythonScript = functions.https.onRequest((request, response) => {
  const pythonScript = "script.py"; // Replace with the actual path to your Python script

  exec(`python ${pythonScript}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing Python script: ${error}`);
      response.status(500).send('Internal Server Error');
    } else {
      console.log('Python script executed successfully');
      response.send('Python script executed successfully');
    }
  });
});
