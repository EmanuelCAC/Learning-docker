import express from 'express'
import { exec } from 'child_process'
import { cwd } from 'process'
const app = express()

app.get('/', (req, res) => {
  res.send("Welcome to my app!")
})

app.get('/textFile', (req, res) => {
  exec('/app/src touch teste.txt', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${cwd()}`);
    console.error(`stderr: ${stderr}`);
  });

  res.send('text file created!')
})

app.get('/newName', (req, res) => {
  exec(`mv teste.txt newTeste.txt`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  });

  res.send('text renamed!')
})

app.get('/delete', (req, res) => {
  exec(`rm newTeste.txt | rm teste.txt`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  });

  res.send('text renamed!')
})

app.get('/move', (req, res) => {
  exec(`mv teste.txt src`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  });

  res.send('text renamed!')
})


app.listen(3000, function () {
  console.log("App listen on port 3000");
})