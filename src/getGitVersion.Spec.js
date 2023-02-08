import getGitVersion from "./getGitVersion.js";

describe('test', () => {
  it('check if gitVersion makes sense', async () => {
    const gitVersion = await getGitVersion()
    expect(gitVersion).toContain('git version')
  })
})
