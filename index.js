const findChrome = require('chrome-finder');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const path = require('path');
const readdir = util.promisify(require("fs").readdir);


async function getChromeVersionMac() {

    let chromePath;
    try {
        chromePath = findChrome();
    } catch (err) {
        return null;
    }
    
    const versionPath = path.resolve(path.dirname(chromePath), '../Frameworks/Google Chrome Framework.framework/Versions');

    const contents = await readdir(versionPath);

    const versions = contents.filter(a => /^[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+$/g.test(a));

    const latest = versions.sort((a,b) => a<b)[0];

    return latest;
}

async function getChromeVersionWin() {
    
    let chromePath;
    try {
        chromePath = findChrome();
    } catch (err) {
        return null;
    }

    const versionPath = path.resolve(path.dirname(chromePath));

    const contents = await readdir(versionPath);

    const versions = contents.filter(a => /^[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+$/g.test(a));

    const latest = versions.sort((a,b) => a<b)[0];

    return latest;
   
}

async function getChromeVersion() {

    const os = process.platform;

    if (os === 'darwin') return getChromeVersionMac();

    if (os.includes('win')) return getChromeVersionWin();

}


getChromeVersion().then(v => console.log(v));