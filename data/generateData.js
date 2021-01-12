const fs = require('fs');
const path = require('path');

const requireDir = dir => {
    if(!fs.existsSync(dir)) fs.mkdirSync(dir);
};

requireDir(path.join(__dirname, '../public/results'));

fs.readdirSync(path.join(__dirname, '.')).forEach(file => {
    if(fs.lstatSync(path.join(__dirname, `./${file}`)).isDirectory()) {
        if(fs.existsSync(path.join(__dirname, `./${file}/extractData.js`))) {
            requireDir(path.join(__dirname, `../public/results/${file}`));
            const extractData = require(path.join(__dirname, `./${file}/extractData.js`));
            const units = extractData();
            for(const key of Object.keys(units)) {
                requireDir(path.join(__dirname, `../public/results/${file}/${key}`));
                if(key === 'index') {
                    fs.writeFileSync(path.join(__dirname, `../public/results/${file}/routeData.json`), units[key]);
                } else {
                    fs.writeFileSync(path.join(__dirname, `../public/results/${file}/${key}/routeData.json`), units[key]);
                }
            }
        }
    }
});

/*








*/