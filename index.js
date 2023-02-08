import chalk from 'chalk';
import {exec} from 'child_process'
import fs from 'fs/promises'
import util from 'util'
import { compareAsc, format } from 'date-fns'
import { formatDistanceToNow } from 'date-fns'

const first = 'Fredrik'
const last = 'Carlsson'
const name = `${chalk.bgMagenta(first)} ${chalk.bgYellow(last)}`
// const namn2 = 'Fredrik ' + 'Carlsson'
// const namn2 = first + ' ' + last
// const namn2 = `${first} ${last}`
console.log('name', name)

// process.env.npm_config_user_agent only works when using `npm run start` not `node index.js`
console.log(`npm & node: ${process.env.npm_config_user_agent}`)

const asyncExec = util.promisify(exec);
const {stdout: gitVersion} = await asyncExec('git --version');
console.log(`git version: ${gitVersion}`);

const fileContent = `
name: ${first} ${last}
npm & node: ${process.env.npm_config_user_agent}
git version: ${gitVersion}
`;

await fs.writeFile('index.md', fileContent);

const startOfCourse = new Date(2023, 0, 31)
console.log(formatDistanceToNow(startOfCourse))
