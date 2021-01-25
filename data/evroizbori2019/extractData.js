const fs = require('fs');
const path = require('path');

const readCikFiles = () => {
    const partiesTxt = fs.readFileSync(path.join(__dirname, './cik/cik_parties.txt'), 'utf-8');
    const protocolsTxt = fs.readFileSync(path.join(__dirname, './cik/protocols.txt'), 'utf-8');
    const sectionsTxt = fs.readFileSync(path.join(__dirname, './cik/sections.txt'), 'utf-8');
    const votesTxt = fs.readFileSync(path.join(__dirname, './cik/votes.txt'), 'utf-8');

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
            invalidVotes: 0,//parseInt(protocol[15]), // 16)  6.Брой намерени в избирателната кутия недействителни гласове (бюлетини)
            validVotes: 0,//parseInt(protocol[16]), // 17)  7.Общ брой намерени в избирателната кутия действителни гласове (бюлетини)
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
            placeId: section[3], // 4) ЕКАТТЕ на населеното място
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

    return { parties, protocols, sectionList, votes };
};


const readXlsSections = () => {
    var xlsx = require('node-xlsx');

    const xlsSections = {};

    var obj = xlsx.parse(path.join(__dirname, './cik/sekcii.xlsx'));

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

        const district = admunit.districts[districtNum];

        district.sections[sectionNum] = sectionAddress;
    }

    return xlsSections;
};

const generateJsonData = (parties, protocols, sectionList, votes, xlsSections) => {
    const global = {
        results: {},
        parties: parties,
        regions: {},
        validVotes: 0,
        invalidVotes: 0,
        voters: 0,
        name: 'Европейски избори 2019',
        electionType: 'european-parliament',
    };
    
    for(const key of Object.keys(sectionList)) {
        const region = key.slice(0, 2);
        const admunit = key.slice(2, 4);
        const district = key.slice(4, 6);
        const section = key.slice(6, 9);
    
        const regions = global.regions;
    
        if(!regions[region]) {
            let regionName = sectionList[key];
            regionName = regionName.name.slice(4, regionName.length).toLowerCase();
            regionName = regionName.split(' ').map(word => word[0].toUpperCase() + word.slice(1));
    
            regions[region] = {
                name: regionName.reduce((word, acc) => word + ' ' + acc, ''),
                number: sectionList[key].region,
                abroad: sectionList[key].region === '32',
                results: {},
                admunits: {},
                validVotes: 0,
                invalidVotes: 0,
                voters: 0,
            };
        }
    
        const admunits = regions[region].admunits;
    
        if(!admunits[admunit]) {
            if(parseInt(region) === 32) {
                admunits[admunit] = {
                    name: sectionList[key].place.split(',')[0].trim(),
                    results: {},
                    districts: {},
                    towns: {},
                    validVotes: 0,
                    invalidVotes: 0,
                    voters: 0,
                    abroad: true,
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
                    towns: {},
                    validVotes: 0,
                    invalidVotes: 0,
                    voters: 0,
                    abroad: false,
                };
            }
        }
    
        const districts = admunits[admunit].districts;
    
        const townId = sectionList[key].placeId;
        if(!admunits[admunit].towns[townId]) {
            if(parseInt(region) === 32) {
                admunits[admunit].towns[townId] = {
                    name: sectionList[key].place.split(',')[1].trim(),
                    districts: {},
                }
            } else {
                admunits[admunit].towns[townId] = {
                    name: sectionList[key].place,
                    districts: {},
                }
            }
        }
    
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
            districtName = districtName.reduce((word, acc) => word + ' ' + acc, '');
    
            districts[district] = {
                name: districtName,
                results: {},
                sections: {},
                addresses: {},
                validVotes: 0,
                invalidVotes: 0,
                voters: 0,
                abroad: regions[region].abroad,
            };
        }
    
        if(district !== '00') {
            let xlsRegion = region;
            if(parseInt(xlsRegion) > 16) xlsRegion --;
            if(parseInt(xlsRegion) > 22) xlsRegion --;
            if(parseInt(xlsRegion) > 22) xlsRegion --;
    
            const xlsRegionObj = xlsSections[xlsRegion];
            const xlsAdmunit = !xlsRegionObj? null : xlsRegionObj.admunits[admunit];
            const xlsDistrict = !xlsAdmunit? null : xlsAdmunit.districts[district];
            const xlsAddress = !xlsDistrict? null : xlsDistrict.sections[section];
    
            if(xlsAddress) {
                if(!districts[district].addresses[xlsAddress]) {
                    districts[district].addresses[xlsAddress] = {
                        sections: []
                    };
                }
                
                districts[district].addresses[xlsAddress].sections.push(section);
            }
        }
    
        if(!admunits[admunit].towns[townId].districts[district]) {
            let xlsRegion = region;
            if(parseInt(xlsRegion) > 16) xlsRegion --;
            if(parseInt(xlsRegion) > 22) xlsRegion --;
            if(parseInt(xlsRegion) > 22) xlsRegion --;
    
            const xlsRegionObj = xlsSections[xlsRegion];
            const xlsAdmunit = !xlsRegionObj? null : xlsRegionObj.admunits[admunit];
            const xlsDistrict = !xlsAdmunit? null : xlsAdmunit.districts[district];
    
            let districtName = xlsDistrict? xlsDistrict.name : 'Непознат район';
            districtName = districtName.split(' ').map(word => word[0].toUpperCase() + word.slice(1).toLowerCase());
            districtName = districtName.reduce((word, acc) => word + ' ' + acc, '');
    
            admunits[admunit].towns[townId].districts[district] = {
                name: districtName,
                sections: [],
            }
        }
    
        const sections = districts[district].sections;
    
        districts[district].sections[section] = { 
            results: {},  
            ...sectionList[key], 
            ...protocols[key],
            name: `Секция ${section}`,
            abroad: regions[region].abroad,
        };
        if(district === '00')
            admunits[admunit].towns[townId].districts[district].sections.push(section);
        
        const vote = votes[key];
    
        global.voters += protocols[key].voters + protocols[key].additionalVoters;
        regions[region].voters += protocols[key].voters + protocols[key].additionalVoters;
        admunits[admunit].voters += protocols[key].voters + protocols[key].additionalVoters;
        districts[district].voters += protocols[key].voters + protocols[key].additionalVoters;
        sections[section].voters = protocols[key].voters + protocols[key].additionalVoters;
    
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

            sections[section].validVotes += vote.parties[partyKey].valid;
            sections[section].invalidVotes += vote.parties[partyKey].invalid;
    
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
    
    return global;
};

const optimizeData = global => {
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

    return global;
};

const separateUnits = global => {
    const units = {};

    for(const regionKey of Object.keys(global.regions)) {
        const region = global.regions[regionKey];
        for(const admunitKey of Object.keys(region.admunits)) {
            const admunit = region.admunits[admunitKey];
            for(const districtKey of Object.keys(admunit.districts)) {
                const district = admunit.districts[districtKey];
                for(const sectionKey of Object.keys(district.sections)) {
                    const section = district.sections[sectionKey];

                    section.crumbs = [
                        { name: region.name, unit: regionKey },
                        { name: admunit.name, unit: `${regionKey}${admunitKey}`},
                    ];

                    if(districtKey !== '00')
                        section.crumbs.push({ name: district.name, unit: `${regionKey}${admunitKey}${districtKey}`});

                    units[section.number] = JSON.stringify(section);
                }
            }
        }
    }

    for(const regionKey of Object.keys(global.regions)) {
        const region = global.regions[regionKey];
        for(const admunitKey of Object.keys(region.admunits)) {
            const admunit = region.admunits[admunitKey];
            for(const districtKey of Object.keys(admunit.districts)) {
                const district = admunit.districts[districtKey];
                if(districtKey != '00') {
                    for(const sectionKey of Object.keys(district.sections)) {
                        const section = district.sections[sectionKey];
                        district.sections[sectionKey] = {
                            results: section.results, 
                            validVotes: section.validVotes, 
                            invalidVotes: section.invalidVotes
                        };
                    }

                    district.crumbs = [
                        { name: region.name, unit: regionKey },
                        { name: admunit.name, unit: `${regionKey}${admunitKey}`},
                    ];

                    units[`${regionKey}${admunitKey}${districtKey}`] = JSON.stringify(district);
                }
            }
        }
    }

    for(const regionKey of Object.keys(global.regions)) {
        const region = global.regions[regionKey];
        for(const admunitKey of Object.keys(region.admunits)) {
            const admunit = region.admunits[admunitKey];
            for(const districtKey of Object.keys(admunit.districts)) {
                const district = admunit.districts[districtKey];
                if(districtKey == '00') {
                    for(const sectionKey of Object.keys(district.sections)) {
                        const section = district.sections[sectionKey];
                        district.sections[sectionKey] = {
                            results: section.results, 
                            validVotes: section.validVotes, 
                            invalidVotes: section.invalidVotes,
                            voters: section.voters,
                        };
                    }
                } else {
                    delete admunit.districts[districtKey].sections;
                }
            }

            admunit.crumbs = [
                { name: region.name, unit: regionKey },
            ];

            units[`${regionKey}${admunitKey}`] = JSON.stringify(admunit);
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
        units[`${regionKey}`] = JSON.stringify(region);
    }

    for(const regionKey of Object.keys(global.regions)) {
        const region = global.regions[regionKey];
        delete region.admunits;
    }

    units['index'] = JSON.stringify(global);

    return units;
};

module.exports = () => {
    const { parties, protocols, sectionList, votes } = readCikFiles();
    const xlsSections = readXlsSections();

    let global = generateJsonData(parties, protocols, sectionList, votes, xlsSections);
    global = optimizeData(global);

    const units = separateUnits(global);

    return units;
};











/*if (!fs.existsSync('../public/data')) {
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
}*/


//console.log("Region JSON files created");