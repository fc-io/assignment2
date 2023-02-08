import chalk from 'chalk';
import fs from 'fs/promises'
import {formatDistanceToNow, isAfter, isBefore, parse, format, isToday, set} from 'date-fns'
import {Command} from 'commander';
import getGitVersion from './src/getGitVersion.js';

const gitVersion = await getGitVersion()
console.log(`git version: ${gitVersion}`);

const first = 'Fredrik'
const last = 'Carlsson'
const name = `${chalk.bgMagenta(first)} ${chalk.bgYellow(last)}`
// const namn2 = 'Fredrik ' + 'Carlsson'
// const namn2 = first + ' ' + last
// const namn2 = `${first} ${last}`
console.log('name', name)

// process.env.npm_config_user_agent only works when using `npm run start` not `node index.js`
console.log(`npm & node: ${process.env.npm_config_user_agent}`)


const fileContent = `
name: ${first} ${last}
npm & node: ${process.env.npm_config_user_agent}
git version: ${gitVersion}
`;

await fs.writeFile('index.md', fileContent);

const startOfCourse = new Date(2023, 0, 31)
console.log(formatDistanceToNow(startOfCourse))

const argumentParser = new Command();
argumentParser.option('--date')
argumentParser.parse();

const dateStringSentAsArgument = argumentParser.args[0]
const dateSentAsArgument = parse(dateStringSentAsArgument, 'yyyy-MM-dd', new Date())
const currentDate = set(new Date(), {hours: 0, minutes: 0, seconds: 0, milliseconds: 0})

console.log('isToday', isToday(dateSentAsArgument))
console.log('isAfter', isAfter(dateSentAsArgument, currentDate))
console.log('isBefore', isBefore(dateSentAsArgument, currentDate))
