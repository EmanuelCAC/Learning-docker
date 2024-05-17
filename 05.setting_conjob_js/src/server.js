import express from 'express'
import { exec } from 'child_process'
import { cwd } from 'process'
const app = express()

app.get('/', (req, res) => {
  res.send("Welcome to my app!")
})

app.get('/crontabList', (req, res) => {
  exec(`crontab -l`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  });

  res.send('crontab -l')
})

app.get('/crontabAdd', (req, res) => {
  exec(`(crontab -l ; echo "* * * * * echo 'Hello world3' >> /var/log/cron.log 2>&1") | crontab
  `, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  });

  res.send('crontab -e')
})

app.listen(3000, function () {
  console.log("App listen on port 3000");
})