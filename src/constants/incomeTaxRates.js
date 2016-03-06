const single = new Map([
  [9500, {
    current: {
      ordinaryIncome: 10,
      capitalGains: 0,
    },
    sanders: {
      ordinaryIncome: 10,
      capitalGains: 0,
    },
  }],
  [38600, {
    current: {
      ordinaryIncome: 15,
      capitalGains: 0,
    },
    sanders: {
      ordinaryIncome: 15,
      capitalGains: 0,
    },
  }],
  [93550, {
    current: {
      ordinaryIncome: 25,
      capitalGains: 15,
    },
    sanders: {
      ordinaryIncome: 25,
      capitalGains: 15,
    },
  }],
  [195100, {
    current: {
      ordinaryIncome: 28,
      capitalGains: 15,
    },
    sanders: {
      ordinaryIncome: 28,
      capitalGains: 15,
    },
  }],
  [424150, {
    current: {
      ordinaryIncome: 33,
      capitalGains: 15,
    },
    sanders: {
      ordinaryIncome: 28,
      capitalGains: 28,
    },
  }],
  [425850, {
    current: {
      ordinaryIncome: 35,
      capitalGains: 15,
    },
    sanders: {
      ordinaryIncome: 28,
      capitalGains: 28,
    },
  }],
  ['over', {
    current: {
      ordinaryIncome: 39.6,
      capitalGains: 20,
    },
    sanders: {
      ordinaryIncome: 28,
      capitalGains: 28,
    },
  }],
]);

const married = new Map([
  [21300, {
    current: {
      ordinaryIncome: 0,
      capitalGains: 0,
    },
    sanders: {
      ordinaryIncome: 0,
      capitalGains: 0,
    },
  }],
  [40300, {
    current: {
      ordinaryIncome: 10,
      capitalGains: 0,
    },
    sanders: {
      ordinaryIncome: 12.2,
      capitalGains: 2.2,
    },
  }],
  [98500, {
    current: {
      ordinaryIncome: 15,
      capitalGains: 0,
    },
    sanders: {
      ordinaryIncome: 17.2,
      capitalGains: 2.2,
    },
  }],
  [177150, {
    current: {
      ordinaryIncome: 28,
      capitalGains: 15,
    },
    sanders: {
      ordinaryIncome: 30.2,
      capitalGains: 17.2,
    },
  }],
  [250000, {
    current: {
      ordinaryIncome: 28,
      capitalGains: 15,
    },
    sanders: {
      ordinaryIncome: 39.2,
      capitalGains: 36.2,
    },
  }],
  [258000, {
    current: {
      ordinaryIncome: 33,
      capitalGains: 15,
    },
    sanders: {
      ordinaryIncome: 39.2,
      capitalGains: 39.2,
    },
  }],
  [445450, {
    current: {
      ordinaryIncome: 35,
      capitalGains: 15,
    },
    sanders: {
      ordinaryIncome: 39.2,
      capitalGains: 39.2,
    },
  }],
  [500000, {
    current: {
      ordinaryIncome: 35,
      capitalGains: 15,
    },
    sanders: {
      ordinaryIncome: 45.2,
      capitalGains: 45.2,
    },
  }],
  [504000, {
    current: {
      ordinaryIncome: 39.6,
      capitalGains: 20,
    },
    sanders: {
      ordinaryIncome: 45.2,
      capitalGains: 45.2,
    },
  }],
  [2000000, {
    current: {
      ordinaryIncome: 39.6,
      capitalGains: 20,
    },
    sanders: {
      ordinaryIncome: 50.2,
      capitalGains: 50.2,
    },
  }],
  [10000000, {
    current: {
      ordinaryIncome: 39.6,
      capitalGains: 20,
    },
    sanders: {
      ordinaryIncome: 54.2,
      capitalGains: 54.2,
    },
  }],
  ['over', {
    current: {
      ordinaryIncome: 39.6,
      capitalGains: 20,
    },
    sanders: {
      ordinaryIncome: 54.2,
      capitalGains: 54.2,
    },
  }],
]);

export default { single, married };
