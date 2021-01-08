const fs = require('fs');
const path = require('path');

const extractData = require('./parliament2017/extractData.js');

const units = extractData();

if (!fs.existsSync('../public/results')) fs.mkdirSync('../public/results');
if (!fs.existsSync('../public/results/parliament2017')) fs.mkdirSync('../public/results/parliament2017');

for(const key of Object.keys(units)) {
    if (!fs.existsSync(`../public/results/parliament2017/${key}`)) fs.mkdirSync(`../public/results/parliament2017/${key}`);
    if(key === 'index') {
        fs.writeFileSync(path.join(__dirname, `../public/results/parliament2017/routeData.json`), units[key]);
    } else {
        fs.writeFileSync(path.join(__dirname, `../public/results/parliament2017/${key}/routeData.json`), units[key]);
    }
}