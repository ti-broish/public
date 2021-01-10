const fs = require('fs');
const path = require('path');

const extractData = require('./parliament2017/extractData.js');

const units = extractData();

const requireDir = dir => {
    if(!fs.existsSync(dir)) fs.mkdirSync(dir);
};

requireDir(path.join(__dirname, '../public/results'));
requireDir(path.join(__dirname, '../public/results/parliament2017'));

for(const key of Object.keys(units)) {
    requireDir(path.join(__dirname, `../public/results/parliament2017/${key}`));
    if(key === 'index') {
        fs.writeFileSync(path.join(__dirname, `../public/results/parliament2017/routeData.json`), units[key]);
    } else {
        fs.writeFileSync(path.join(__dirname, `../public/results/parliament2017/${key}/routeData.json`), units[key]);
    }
}