import chalk from 'chalk';
import {exec} from "child_process"
import fs from "fs"
import util from 'util'
import { compareAsc, format } from 'date-fns'
import { formatDistanceToNow } from 'date-fns'

const asyncExec = util.promisify(exec);
const first = chalk.bgMagenta('Fredrik')
const last = chalk.bgYellow('Carlsson')
const name = `${first} ${last}`

// const namn2 = 'Fredrik ' + 'Carlsson'
// const namn2 = first + ' ' + last
// const namn2 = `${first} ${last}`

console.log('name', name)
// process.env.npm_config_user_agent only works when using `npm run start` not `node index.js`
console.log(`npm & node: ${process.env.npm_config_user_agent}`)

const { stdout, stderr } = await asyncExec('git --version');
console.log(`git version: ${stdout}`);

const data = `
name: Fredrik Carlsson
npm & node: ${process.env.npm_config_user_agent}
git version: ${stdout}
`;
await fs.promises.writeFile("index.md", data);

const startOfCourse = new Date(2023, 0, 31)
console.log(formatDistanceToNow(startOfCourse))
