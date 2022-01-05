const core = require('@actions/core');
const github = require('@actions/github');
const file = require('file');

try {
    const folder = core.getInput('folder');
    const maxLines = core.getInput('max-lines');

    file.walkSync(folder, function (start, dirs, names) {
        console.log(start);
        console.log(names);
    });

} catch (error) {
    core.setFailed(error.message);
}
