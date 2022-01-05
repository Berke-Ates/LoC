const core = require('@actions/core');
const github = require('@actions/github');
const file = require('file');
const fs = require('fs');

try {
    const folder = core.getInput('folder');
    const maxLines = core.getInput('max-lines');

    file.walkSync(folder, function (start, dirs, names) {
        names.forEach(name => {
            const path = `${start}/${name}`;
            const data = fs.readFileSync(path).toString();
            const LoC = data.split('\n').length;

            if (LoC > maxLines) {
                console.error(`${path}: Too many LoC: ${LoC}`);
            }
        });
    });

} catch (error) {
    core.setFailed(error.message);
}
