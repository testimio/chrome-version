const findChrome = require('chrome-finder');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const path = require('path');
const readdir = util.promisify(require("fs").readdir);


async function getChromeVersionMac() {
    // const chromePath = findChrome().replace(/ /g, '\\ ');


    const chromePath = findChrome();
    // console.log(path.dirname(chromePath));

    const versionPath = path.resolve(path.dirname(chromePath), '../Frameworks/Google Chrome Framework.framework/Versions');

    const versions = await readdir(versionPath);

    const latest = versions.filter(a => a !== 'Current');

    console.log(latest);
    // console.log(versionPath);

    return '';
}

async function getChromeVersionWin() {
    
    let chromePath;
    try {
        chromePath = findChrome();
    } catch (err) {
        console.log('no chrome found');
        process.exit(1);
    }
    console.log(path.dirname(chromePath));

    const versionPath = path.resolve(path.dirname(chromePath));

    const versions = await readdir(versionPath);

    const latest = versions.filter(a => /^[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+$/g.test(a));

    console.log(latest);

    return '';
   
}

async function getChromeVersion() {

    const os = process.platform;

    if (os === 'darwin') return getChromeVersionMac();

    if (os.includes('win')) return getChromeVersionWin();




    // const chromePath = findChrome().replace(/ /g, '\\ ');
    // const res = await exec(chromePath + ' --version');

    // const version = res.stdout.substr(14).trim();
    // return version;
}


getChromeVersion().then(v => console.log(v));