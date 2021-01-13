const fs = require('fs');
const path = require('path');
const { renderHTML, writeHTML } = require('../server/static_render/renderStatic.js');

const requireDir = dir => {
    if(!fs.existsSync(dir)) fs.mkdirSync(dir);
};

requireDir(path.join(__dirname, '../public/results'));

fs.readdirSync(path.join(__dirname, '.')).forEach(file => {
    if(fs.lstatSync(path.join(__dirname, `./${file}`)).isDirectory()) {
        if(fs.existsSync(path.join(__dirname, `./${file}/extractData.js`))) {
            requireDir(path.join(__dirname, `../public/results/${file}`));
            console.log('Extracting data from CIK files');
            const extractData = require(path.join(__dirname, `./${file}/extractData.js`));
            const units = extractData();
            let c = 0;
            console.log(`Writing data for ${file}`);
            for(const key of Object.keys(units)) {
                requireDir(path.join(__dirname, `../public/results/${file}/${key}`));
                
                let fileUrl;
                //let webUrl;

                if(key === 'index') {
                    fileUrl = path.join(__dirname, `../public/results/${file}/routeData.json`);
                    //webUrl = `/results/${file}`;
                } else {
                    fileUrl = path.join(__dirname, `../public/results/${file}/${key}/routeData.json`);
                    //webUrl = `/results/${file}/${key}`;
                }

                fs.writeFileSync(fileUrl, units[key]);

                //const staticProps = { path: webUrl, data: units[key] };
                //const rendered = renderHTML(units[key]);
                //writeHTML(rendered, staticProps);
                
                //const round = num => Math.round((num + Number.EPSILON) * 100) / 100;
                //if(c % 100 === 0)
                //    console.log(`${round(100 * c / Object.keys(units).length)}%`);
                //c ++;
                
            }
            console.log('Done');
        }
    }
});