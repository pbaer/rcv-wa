let parse = require('csv-parse/lib/sync');
let fs = require('fs');

class Choice {
  public name: string;
  public party: string;
  public percentage: number;
};

class Race {
  public id: string; // '<date> - <race>
  public candidates: Choice[];
  public parties: Choice[];

  public constructor(id: string) {
    this.id = id;
    this.candidates = [];
    this.parties = [];
  }

  public finalize = () => {
    this.candidates.sort((a, b) => {
      return b.percentage - a.percentage;
    });
    this.parties.sort((a, b) => {
      return b.percentage - a.percentage;
    });
  }

  public topTwoShare = (): number => {
    let sum: number = 0;
    if (this.candidates.length <= 2) {
      return 100;
    }
    return this.candidates[0].percentage + this.candidates[1].percentage;
  };

  public topTwoSameParty = (): boolean => {
    if (this.candidates.length == 1) {
      return true;
    }
    return this.candidates[0].party == this.candidates[1].party;
  }
}

let _races = new Map<string, Race>();

const getRace = (id: string) => {
  let race = _races.get(id);

  if (!race) {
    race = new Race(id);
    _races.set(id, race);
  }

  return race;
}

fs.readdirSync('./data').forEach(file => {
  const data = fs.readFileSync(`./data/${file}`);

  const records = parse(data, {
    columns: true,
    skip_empty_lines: true
  });

  let date = file.split('_')[0];

  records.forEach(record => {
    let race = getRace(`${date} - ${record.Race}`);
    race.candidates.push({
      name: record.Candidate,
      party: record.Party,
      percentage: parseFloat(record.PercentageOfTotalVotes)
    });
    let party = race.parties.find(party => party.name == record.Party);
    if (!party) {
      race.parties.push({
        name: record.Party,
        party: record.Party,
        percentage: parseFloat(record.PercentageOfTotalVotes)
      })  
    } else {
      party.percentage += parseFloat(record.PercentageOfTotalVotes);
    }
  });
});

let numRaces = 0;
let numPluralityRaces = 0;
let numSinglePartyRaces = 0;
_races.forEach(race => {
  race.finalize();
  if (race.topTwoShare() < 50 || race.topTwoSameParty()) {
    if (race.topTwoShare() < 50) {
      console.log(`${race.id}`);
      console.log(`Top 2 had ${race.topTwoShare().toFixed(2)}% of the vote:`);
      race.candidates.forEach(candidate => {
        console.log(`  ${candidate.name} ${candidate.party}: ${candidate.percentage.toFixed(2)}`);
      });
      console.log('Party share:');
      race.parties.forEach(party => {
        console.log(`  ${party.name}: ${party.percentage.toFixed(2)}`);
      })
      numPluralityRaces++;
      if (race.topTwoSameParty()) {
        console.log('Top 2 shared same party');
      }
      console.log('');
    }
    if (race.topTwoSameParty()) {
      numSinglePartyRaces++;
    }
  }
  numRaces++;
});

console.log(`In ${numPluralityRaces} of ${numRaces} races (${(100*numPluralityRaces/numRaces).toFixed(2)}%), top 2 did not have majority share.`);
console.log(`In ${numSinglePartyRaces} of ${numRaces} races (${(100*numSinglePartyRaces/numRaces).toFixed(2)}%), top 2 were of the same party.`);

