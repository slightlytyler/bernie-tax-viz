const currentSingleBase = 5450000;
const currentMarriedBase = currentSingleBase * 2;

const current = {
  single: new Map([
    [currentSingleBase, 0],
    [currentSingleBase + 10000, 18],
    [currentSingleBase + 20000, 20],
    [currentSingleBase + 40000, 22],
    [currentSingleBase + 60000, 24],
    [currentSingleBase + 80000, 26],
    [currentSingleBase + 100000, 28],
    [currentSingleBase + 150000, 30],
    [currentSingleBase + 250000, 32],
    [currentSingleBase + 500000, 34],
    [currentSingleBase + 750000, 36],
    [currentSingleBase + 1000000, 39],
    ['over', 40],
  ]),
  married: new Map([
    [currentMarriedBase, 0],
    [currentMarriedBase + 10000, 18],
    [currentMarriedBase + 20000, 20],
    [currentMarriedBase + 40000, 22],
    [currentMarriedBase + 60000, 24],
    [currentMarriedBase + 80000, 26],
    [currentMarriedBase + 100000, 28],
    [currentMarriedBase + 150000, 30],
    [currentMarriedBase + 250000, 32],
    [currentMarriedBase + 500000, 34],
    [currentMarriedBase + 750000, 36],
    [currentMarriedBase + 1000000, 39],
    ['over', 40],
  ]),
};

const sandersSingleBase = 3500000;
const sandersMarriedBase = sandersSingleBase * 2;

const sanders = {
  single: new Map([
    [sandersSingleBase, 0],
    [sandersSingleBase + 10000, 45],
    [sandersSingleBase + 50000, 50],
    [sandersSingleBase + 500000, 55],
    ['over', 65],
  ]),
  married: new Map([
    [sandersMarriedBase, 0],
    [sandersMarriedBase + 10000, 45],
    [sandersMarriedBase + 50000, 50],
    [sandersMarriedBase + 500000, 55],
    ['over', 65],
  ]),
};

export default { current, sanders };
