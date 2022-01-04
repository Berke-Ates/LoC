const core = require('@actions/core');
const github = require('@actions/github');

try {
    const folder = core.getInput('folder');
    const maxLines = core.getInput('max-lines');
    console.log(`folder: ${folder}`);
    console.log(`maxLines: ${maxLines}`);
} catch (error) {
    core.setFailed(error.message);
}
