const core = require('@actions/core');
const file = require('file');
const fs = require('fs');

try {
  const folder = core.getInput('folder');
  const exclude = core.getInput('exclude').split(' ');
  const maxLines = core.getInput('max-lines');
  let hasErr = false;

  file.walkSync(folder, function (start, dirs, names) {
    names.forEach(name => {
      let skipFile = false;
      exclude.forEach(ext => skipFile = skipFile || name.endsWith(ext));
      if (!skipFile) {
        const path = `${start}/${name}`;
        const data = fs.readFileSync(path).toString();
        const LoC = data.split('\n').length;

        if (LoC > maxLines) {
          console.error(`Too many LoC(${LoC}): ${path}`);
          hasErr = true;
        }
      }
    });
  });

  if (hasErr) {
    throw 'Some files have too many lines of code';
  }

} catch (error) {
  core.setFailed(error.message);
}
