import { exec } from 'child_process'
import util from 'util'

async function getGitVersion() {
  const asyncExec = util.promisify(exec);
  const { stdout: gitVersion } = await asyncExec('git --version');

  return gitVersion.trim()
}

export default getGitVersion
