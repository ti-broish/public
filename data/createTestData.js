fs = require('fs');

const partiesTxt = fs.readFileSync('./parliament2017/cik_parties_26.03.2017.txt', 'utf-8');
const protocolsTxt = fs.readFileSync('./parliament2017/protocols_26.03.2017.txt', 'utf-8');
const sectionsTxt = fs.readFileSync('./parliament2017/sections_26.03.2017.txt', 'utf-8');
const votesTxt = fs.readFileSync('./parliament2017/votes_26.03.2017.txt', 'utf-8');

const parties = {};
const protocols = {};
const sectionList = {};
const votes = {};

partiesTxt.split('\n').forEach(partyTxt => {
    const party = partyTxt.split(';');
    parties[party[0]] = {
        number: parseInt(party[0]),
        name: party[1].trim(),
        color: party[2],
    };
});

protocolsTxt.split('\n').forEach(protocolTxt => {
    const protocol = protocolTxt.split(';');
    protocols[protocol[1]] = {
        number: protocol[1], // 2) Пълен код на секция(код на район(2), община(2), адм. район(2), секция(3));
                                        // 3) Идентификатор на административна единица, за която се отнася протокола(община, кметство, район)
                                        // 4) Серийни номера на страниците на протокола, разделени с |
        totalBallots: parseInt(protocol[4]), // 5)  А.Брой на бюлетините, получени по реда на чл. 215, ал. 1, т. 2 от ИК
        voters: parseInt(protocol[5]), // 6)  1.Брой на избирателите според избирателния списък при предаването му на СИК
        additionalVoters: parseInt(protocol[6]), // 7)  2.Брой на избирателите, вписани в допълнителната страница (под чертата) на избирателния списък в изборния ден
        voted: parseInt(protocol[7]), // 8)  3.Брой на гласувалите избиратели според положените подписи в избирателния списък, включително и подписите в допълнителната страница(под чертата)
        unusedBallots: parseInt(protocol[8]), // 9)4.а)брой на неизползваните бюлетини
        destroyedBallots: parseInt(protocol[9]), // 10)4.б)брой на унищожените от СИК бюлетини по други поводи
        invalidVotes265: parseInt(protocol[10]), // 11)4.в)брой на недействителните бюлетини по чл. 265, ал. 5 от ИК (когато номерът на бюлетината не съответства на номер в кочана)
        invalidVotes227: parseInt(protocol[11]), // 12)4.г)брой на недействителните бюлетини по чл. 227 от ИК
        invalidVotes228: parseInt(protocol[12]), // 13)4.д)брой на недействителните бюлетини по чл. 228 от ИК
        wrongVotes267: parseInt(protocol[13]), // 14)4.е)брой на сгрешените бюлетини по чл. 267, ал. 2 от ИК
        totalVotes: parseInt(protocol[14]), // 15)  5.Брой на намерените в избирателната кутия бюлетини
        invalidVotes: parseInt(protocol[15]), // 16)  6.Брой намерени в избирателната кутия недействителни гласове (бюлетини)
        validVotes: parseInt(protocol[16]), // 17)  7.Общ брой намерени в избирателната кутия действителни гласове (бюлетини)
        validCandidateVotes: parseInt(protocol[17]), // 18) 7.1брой на действителните гласове, подадени за кандидатските листи на партии, коалиции и инициативни комитети
        validNAVotes: parseInt(protocol[18]), // 19) 7.2брой действителни гласове (отбелязвания) само в квадратчето „Не подкрепям никого“
        emptyVotes: parseInt(protocol[19]), // 20)  9.Празни бюлетини; бюлетини, в които е гласувано в повече от едно квадратче; бюлетини, в които не може да се установи еднозначно вотът на избирателя и други видове недействителни гласове
    };
});

sectionsTxt.split('\n').forEach(sectionTxt => {
    const section = sectionTxt.split(';');
    sectionList[section[0]] = {
        number: section[0],   // 1) Пълен код на секция(код на район(2), община(2), адм. район(2), секция(3))
        region: parseInt(section[1]),             // 2) Идентификатор на административна единица, за която се гласува в секцията
                                        
        name: section[2],// 3) Име на административна единица, за която се гласува в секцията
                                    // 4) ЕКАТТЕ на населеното място
        place: section[4], // 5) Име на Населено място, където е регистрирана секцията (за секциите извън страната - Държава, Населено място)
        mobile: section[5] == '1',// 6) Флаг мобилна секция
        ship: section[6] == '1',// 7) Флаг корабна секция
    };
});

votesTxt.split('\n').forEach(voteTxt => {
    const vote = voteTxt.split(';');
    const voteObj = {
        number: vote[0],
        parties: {},
    };

    for(var i = 2; i < vote.length; i += 3) {
        voteObj.parties[parseInt(vote[i])] = { valid: parseInt(vote[i + 1]), invalid: parseInt(vote[i + 2])};
    }

    votes[vote[0]] = voteObj;
});

var xlsx = require('node-xlsx');

const xlsSections = {};

var obj = xlsx.parse('./parliament2017/sekcii.xlsx');

for(const row of obj[0].data) {
    const regionNum = row[0];
    const regionName = row[1];
    const admunitNum = row[2];
    const admunitName = row[3];
    const districtNum = row[4]? row[4] : '00';
    const districtName = row[5]? row[5] : 'Без район';
    const sectionNum = row[6];
    const townNum = row[7];
    const townName = row[8];
    const sectionAddress = row[9];

    if(!xlsSections[regionNum]) {
        xlsSections[regionNum] = {
            name: regionName,
            admunits: {},
        };
    }

    const region = xlsSections[regionNum];

    if(!region.admunits[admunitNum]) {
        region.admunits[admunitNum] = {
            name: admunitName,
            districts: {},
        };
    }

    const admunit = region.admunits[admunitNum];

    if(!admunit.districts[districtNum]) {
        admunit.districts[districtNum] = {
            name: districtName,
            sections: {},
        }
    }

    /*const municipality = region.municipalities[municipalNum];

    if(!municipality.towns[townNum]) {
        municipality.towns[townNum] = {
            name: townName,
            districts: {},
        }
    }

    const town = municipality.towns[townNum];

    if(!municipality.districts[districtNum]) {
        municipality.districts[districtNum] = {
            name: districtName,
            //addresses: {},
            sections: [],
        };
    }*/

    

    //const district = municipality.districts[districtNum];

    //district.sections.push(sectionNum);

    //if(!district.addresses[sectionAddress]) {
    //    district.addresses[sectionAddress] = [];
    //}

    //district.addresses[sectionAddress].push(sectionNum);
}

const global = {
    results: {},
    parties: parties,
    regions: {},
    validVotes: 0,
    invalidVotes: 0,
};

for(const key of Object.keys(sectionList)) {
    const region = key.slice(0, 2);
    const admunit = key.slice(2, 4);
    const district = key.slice(4, 6);
    const section = key.slice(6, 9);

    const regions = global.regions;

    if(!regions[region]) {
        let regionName = sectionList[key]
        regionName = regionName.name.slice(4, regionName.length).toLowerCase();
        regionName = regionName.split(' ').map(word => word[0].toUpperCase() + word.slice(1));

        regions[region] = {
            name: regionName.reduce((word, acc) => word + ' ' + acc, ''),
            results: {},
            admunits: {},
            validVotes: 0,
            invalidVotes: 0,
        };
    }

    const admunits = regions[region].admunits;

    if(!admunits[admunit]) {
        if(parseInt(region) === 32) {
            admunits[admunit] = {
                name: sectionList[key].place.split(',')[0].trim(),
                results: {},
                districts: {},
                validVotes: 0,
                invalidVotes: 0,
            };
        } else  {
            let xlsRegion = region;
            if(parseInt(xlsRegion) > 16) xlsRegion --;
            if(parseInt(xlsRegion) > 22) xlsRegion --;
            if(parseInt(xlsRegion) > 22) xlsRegion --;

            const xlsRegionObj = xlsSections[xlsRegion];
            const xlsAdmunit = !xlsRegionObj? null : xlsRegionObj.admunits[admunit];

            let admunitName = xlsAdmunit? xlsAdmunit.name : 'Непозната община';
            admunitName = admunitName.split(' ').map(word => word[0].toUpperCase() + word.slice(1).toLowerCase());

            admunits[admunit] = {
                name: admunitName.reduce((word, acc) => word + ' ' + acc, ''),
                results: {},
                districts: {},
                validVotes: 0,
                invalidVotes: 0,
            };
        }
    }

    const districts = admunits[admunit].districts;

    if(!districts[district]) {
        let xlsRegion = region;
        if(parseInt(xlsRegion) > 16) xlsRegion --;
        if(parseInt(xlsRegion) > 22) xlsRegion --;
        if(parseInt(xlsRegion) > 22) xlsRegion --;

        const xlsRegionObj = xlsSections[xlsRegion];
        const xlsAdmunit = !xlsRegionObj? null : xlsRegionObj.admunits[admunit];
        const xlsDistrict = !xlsAdmunit? null : xlsAdmunit.districts[district];

        let districtName = xlsDistrict? xlsDistrict.name : 'Непознат район';
        districtName = districtName.split(' ').map(word => word[0].toUpperCase() + word.slice(1).toLowerCase());
        
        districts[district] = {
            name: districtName.reduce((word, acc) => word + ' ' + acc, ''),
            results: {},
            sections: {},
            validVotes: 0,
            invalidVotes: 0,
        };
    }

    const sections = districts[district].sections;

    districts[district].sections[section] = { results: {},  ...sectionList[key], ...protocols[key]};
    
    const vote = votes[key];

    for(const partyKey of Object.keys(vote.parties)) {
        if(!             global.results[partyKey])              global.results[partyKey] = {valid: 0, invalid: 0};
        if(!    regions[region].results[partyKey])     regions[region].results[partyKey] = {valid: 0, invalid: 0};
        if(!  admunits[admunit].results[partyKey])   admunits[admunit].results[partyKey] = {valid: 0, invalid: 0};
        if(!districts[district].results[partyKey]) districts[district].results[partyKey] = {valid: 0, invalid: 0};
        if(!  sections[section].results[partyKey])   sections[section].results[partyKey] = {valid: 0, invalid: 0};

        global.validVotes += vote.parties[partyKey].valid;
        global.invalidVotes += vote.parties[partyKey].invalid;

        regions[region].validVotes += vote.parties[partyKey].valid;
        regions[region].invalidVotes += vote.parties[partyKey].invalid;
        
        admunits[admunit].validVotes += vote.parties[partyKey].valid;
        admunits[admunit].invalidVotes += vote.parties[partyKey].invalid;

        districts[district].validVotes += vote.parties[partyKey].valid;
        districts[district].invalidVotes += vote.parties[partyKey].invalid;

        global.results[partyKey].valid += vote.parties[partyKey].valid;
        global.results[partyKey].invalid += vote.parties[partyKey].invalid;

        regions[region].results[partyKey].valid += vote.parties[partyKey].valid;
        regions[region].results[partyKey].invalid += vote.parties[partyKey].invalid;

        admunits[admunit].results[partyKey].valid += vote.parties[partyKey].valid;
        admunits[admunit].results[partyKey].invalid += vote.parties[partyKey].invalid;

        districts[district].results[partyKey].valid += vote.parties[partyKey].valid;
        districts[district].results[partyKey].invalid += vote.parties[partyKey].invalid;

        sections[section].results[partyKey].valid += vote.parties[partyKey].valid;
        sections[section].results[partyKey].invalid += vote.parties[partyKey].invalid;
    }
}

const optimizeResults = results => {
    const output = [];
    for(const key of Object.keys(results)) {
        if(results[key].valid != 0 || results[key].invalid != 0) {
            output.push(parseInt(key));
            output.push(results[key].valid);
            output.push(results[key].invalid);
        }
    }
    return output;
};

// optimize filesize of results
global.results = optimizeResults(global.results);

for(const regionKey of Object.keys(global.regions)) {
    const region = global.regions[regionKey];
    region.results = optimizeResults(region.results);

    for(const admunitKey of Object.keys(region.admunits)) {
        const admunit = region.admunits[admunitKey];
        admunit.results = optimizeResults(admunit.results);

        for(const districtKey of Object.keys(admunit.districts)) {
            const district = admunit.districts[districtKey];
            district.results = optimizeResults(district.results);

            for(const sectionKey of Object.keys(district.sections)) {
                const section = district.sections[sectionKey];
                section.results = optimizeResults(section.results);
            }
        }
    }
}

if (!fs.existsSync('../public/data')) {
    fs.mkdirSync('../public/data');
}

if (!fs.existsSync('../public/data/regions')) {
    fs.mkdirSync('../public/data/regions');
}

if (!fs.existsSync('../public/data/admunits')) {
    fs.mkdirSync('../public/data/admunits');
}

if (!fs.existsSync('../public/data/districts')) {
    fs.mkdirSync('../public/data/districts');
}

if (!fs.existsSync('../public/data/sections')) {
    fs.mkdirSync('../public/data/sections');
}

for(const region of Object.keys(global.regions)) {
    for(const admunit of Object.keys(global.regions[region].admunits)) {
        for(const district of Object.keys(global.regions[region].admunits[admunit].districts)) {
            for(const sectionKey of Object.keys(global.regions[region].admunits[admunit].districts[district].sections)) {
                const section = global.regions[region].admunits[admunit].districts[district].sections[sectionKey];
                fs.writeFileSync(`../public/data/sections/section-${section.number}.json`, JSON.stringify(section));
            }
        }
    }
}

for(const region of Object.keys(global.regions)) {
    for(const admunit of Object.keys(global.regions[region].admunits)) {
        for(const districtKey of Object.keys(global.regions[region].admunits[admunit].districts)) {
            const district = global.regions[region].admunits[admunit].districts[districtKey];
            if(districtKey != '00') {
                for(const sectionKey of Object.keys(district.sections)) {
                    const section = district.sections[sectionKey];
                    district.sections[sectionKey] = {results: section.results, validVotes: section.validVotes, invalidVotes: section.invalidVotes};
                }
                fs.writeFileSync(`../public/data/districts/district-${region}-${admunit}-${districtKey}.json`, JSON.stringify(district));
            }
        }
    }
}

for(const region of Object.keys(global.regions)) {
    for(const admunitKey of Object.keys(global.regions[region].admunits)) {
        const admunit = global.regions[region].admunits[admunitKey];
        for(const districtKey of Object.keys(admunit.districts)) {
            const district = admunit.districts[districtKey];
            if(districtKey == '00') {
                for(const sectionKey of Object.keys(district.sections)) {
                    const section = district.sections[sectionKey];
                    district.sections[sectionKey] = {results: section.results, validVotes: section.validVotes, invalidVotes: section.invalidVotes};
                }
            } else {
                delete admunit.districts[districtKey].sections;
            }
        }
        fs.writeFileSync(`../public/data/admunits/admunit-${region}-${admunitKey}.json`, JSON.stringify(admunit));
    }
}

for(const regionKey of Object.keys(global.regions)) {
    const region = global.regions[regionKey];
    if(Object.keys(region.admunits).length === 1) {

    } else {
        for(const admunitKey of Object.keys(region.admunits)) {
            const admunit = region.admunits[admunitKey];
            delete admunit.districts;
        }
    }
    fs.writeFileSync(`../public/data/regions/region-${regionKey}.json`, JSON.stringify(region));
}

for(const regionKey of Object.keys(global.regions)) {
    const region = global.regions[regionKey];
    delete region.admunits;
}

fs.writeFileSync(`../public/data/global.json`, JSON.stringify(global));

console.log("Region JSON files created");