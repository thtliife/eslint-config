/* eslint-disable no-console */
const { exec } = require('child_process');

/* install peer dependencies */

exec(
  'npx install-peerdeps --dev @thtliife/eslint-config',
  { cwd: process.env.INIT_CWD },
  (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  }
);
