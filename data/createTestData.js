fs = require('fs');

const partiesTxt = fs.readFileSync('./parliament2017/cik_parties_26.03.2017.txt', 'utf-8');
const protocolsTxt = fs.readFileSync('./parliament2017/protocols_26.03.2017.txt', 'utf-8');
const sectionsTxt = fs.readFileSync('./parliament2017/sections_26.03.2017.txt', 'utf-8');
const votesTxt = fs.readFileSync('./parliament2017/votes_26.03.2017.txt', 'utf-8');

const parties = {};
const protocols = {};
const sections = {};
const votes = {};

partiesTxt.split('\n').forEach(partyTxt => {
    const party = partyTxt.split(';');
    parties[party[0]] = {
        number: parseInt(party[0]),
        name: party[1].trim(),
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
    sections[section[0]] = {
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
    //console.log(vote);
    //console.log(voteObj);

    votes[vote[0]] = voteObj;
});


const regions = {};

const sectionsToWrite = [];

const globalObject = {
    parties: Object.keys(parties).map(key => { return {
        number: parties[key].number,
        name: parties[key].name,
        validVotes: 0,
        invalidVotes: 0,
    }}),
    regions: [],
    validVotes: 0,
    invalidVotes: 0,
}

Object.keys(sections).forEach(key => {
    const section = sections[key];
    if(!regions[section.region])
        regions[section.region] = {
            number: parseInt(section.region),
            name: section.name,
            parties: Object.keys(parties).map(key => { return {
                    number: parties[key].number,
                    name: parties[key].name,
                    validVotes: 0,
                    invalidVotes: 0,
            }}),
            sections: [],
            validVotes: 0,
            invalidVotes: 0,
        };
    
    regions[section.region].sections.push({
        number: key,
        place: section.place,
    });

    const vote = votes[key];
    const protocol = protocols[key];

    const sectionToWrite = {...section, ...protocol, parties: []};

    Object.keys(vote.parties).forEach(key => {
        const partyVote = vote.parties[key];
        regions[section.region].validVotes += partyVote.valid;
        regions[section.region].invalidVotes += partyVote.invalid;

        if(parseInt(key) <= 21) {
            regions[section.region].parties[key-1].validVotes += partyVote.valid;
            regions[section.region].parties[key-1].invalidVotes += partyVote.invalid;
        
            sectionToWrite.parties.push({
                number: regions[section.region].parties[key-1].number,
                name: regions[section.region].parties[key-1].name,
                validVotes: partyVote.valid,
                invalidVotes: partyVote.invalid,
            });
        }
    });

    sectionsToWrite.push(sectionToWrite);
});

Object.keys(regions).forEach(key => {
    const region = regions[key];
    globalObject.regions.push({
        number: region.number,
        name: region.name,
    });

    region.parties.forEach((party, i) => {
        if(i <= 21) {
            globalObject.parties[i].validVotes += party.validVotes;
            globalObject.parties[i].invalidVotes += party.invalidVotes;
        }
    });

    globalObject.validVotes += region.validVotes;
    globalObject.invalidVotes += region.invalidVotes;
});

if (!fs.existsSync('../public/data')) {
    fs.mkdirSync('../public/data');
}

if (!fs.existsSync('../public/data/regions')) {
    fs.mkdirSync('../public/data/regions');
}

if (!fs.existsSync('../public/data/sections')) {
    fs.mkdirSync('../public/data/sections');
}

Object.keys(regions).forEach(key => {
    const region = regions[key];
    fs.writeFileSync(`../public/data/regions/region-${region.number}.json`, JSON.stringify(region));
});

sectionsToWrite.forEach(section => {
    fs.writeFileSync(`../public/data/sections/section-${section.number}.json`, JSON.stringify(section));
});

fs.writeFileSync('../public/data/global-results.json', JSON.stringify(globalObject));

console.log("Region JSON files created");
console.log(globalObject);

