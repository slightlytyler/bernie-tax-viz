import incomeTaxRates from 'constants/incomeTaxRates';
import payrollTaxRates from 'constants/payrollTaxRates';
import estateTaxRates from 'constants/estateTaxRates';

const defaultFilingStatus = 'single';

export function adjustedGrossIncome(
  income = 0, capitalGains = 0,
  filingStatus = defaultFilingStatus,
  dependents = 0
) {
  const exemptions = (filingStatus === 'married' ? 2 : 1) + dependents;
  const agi = (income + capitalGains) - (4000 * exemptions);

  return agi > 0 ? agi : 0;
}

export function incomeTaxCalculator(type, agi, filingStatus = defaultFilingStatus) {
  const incomeTaxRatesForStatus = incomeTaxRates[filingStatus];
  const incomeTaxBrackets = Array.from(incomeTaxRatesForStatus.keys());
  let totalTax = {
    current: 0,
    sanders: 0,
  };

  for (const bracketCeiling of incomeTaxBrackets) {
    const bracketIndex = incomeTaxBrackets.indexOf(bracketCeiling);
    const bracketFloor =
      bracketIndex === 0
      ? 0
      : incomeTaxBrackets[bracketIndex - 1]
    ;
    let difference;

    if (agi > bracketCeiling) {
      difference = bracketCeiling - bracketFloor;
    } else {
      difference = agi - bracketFloor;
    }

    const currentTax =
      difference * (incomeTaxRatesForStatus.get(bracketCeiling).current[type] / 100)
    ;
    const sandersTax =
      difference * (incomeTaxRatesForStatus.get(bracketCeiling).sanders[type] / 100)
    ;

    totalTax = {
      current: totalTax.current + currentTax,
      sanders: totalTax.sanders + sandersTax,
    };

    if (agi <= bracketCeiling) {
      break;
    }
  }


  return totalTax;
}

export function incomeTax(agi, filingStatus = defaultFilingStatus) {
  return incomeTaxCalculator('ordinaryIncome', agi, filingStatus);
}

export function capitalGainsTax(agi, filingStatus = defaultFilingStatus) {
  return incomeTaxCalculator('capitalGains', agi, filingStatus);
}

export function payrollTax(agi, filingStatus = defaultFilingStatus) {
  const payrollTaxRatesForStatus = payrollTaxRates[filingStatus];
  const payrollTaxBrackets = Array.from(payrollTaxRatesForStatus.keys());

  let totalTax = {
    current: 0,
    sanders: 0,
  };

  for (const bracketCeiling of payrollTaxBrackets) {
    const bracketIndex = payrollTaxBrackets.indexOf(bracketCeiling);
    const bracketFloor =
      bracketIndex === 0
      ? 0
      : payrollTaxBrackets[bracketIndex - 1]
    ;
    let difference;

    if (agi > bracketCeiling) {
      difference = bracketCeiling - bracketFloor;
    } else {
      difference = agi - bracketFloor;
    }

    const currentTax =
      difference * (payrollTaxRatesForStatus.get(bracketCeiling).current / 100)
    ;
    const sandersTax =
      difference * (payrollTaxRatesForStatus.get(bracketCeiling).sanders / 100)
    ;

    totalTax = {
      current: totalTax.current + currentTax,
      sanders: totalTax.sanders + sandersTax,
    };

    if (agi <= bracketCeiling) {
      break;
    }
  }

  return totalTax;
}

const sandersACATaxRate = 2.2;

export function medicare(agi, healthSpending = 0) {
  return {
    current: healthSpending,
    sanders: (sandersACATaxRate / 100) * agi,
  };
}

export function estateTax(income = 0, filingStatus = defaultFilingStatus) {
  const { current: currentTaxRates, sanders: sandersTaxRates } = estateTaxRates;

  const currentTaxRatesForStatus = currentTaxRates[filingStatus];
  const currentTaxBrackets = Array.from(currentTaxRatesForStatus.keys());
  let currentTaxLiability = 0;

  for (const bracketCeiling of currentTaxBrackets) {
    const bracketIndex = currentTaxBrackets.indexOf(bracketCeiling);
    const bracketFloor =
      bracketIndex === 0
      ? 0
      : currentTaxBrackets[bracketIndex - 1]
    ;
    let difference;

    if (income > bracketCeiling) {
      difference = bracketCeiling - bracketFloor;
    } else {
      difference = income - bracketFloor;
    }

    currentTaxLiability = difference * (currentTaxRatesForStatus.get(bracketCeiling) / 100);

    if (income <= bracketCeiling) {
      break;
    }
  }

  const sandersTaxRatesForStatus = sandersTaxRates[filingStatus];
  const sandersTaxBrackets = Array.from(sandersTaxRatesForStatus.keys());
  let sandersTaxLiability = 0;

  for (const bracketCeiling of sandersTaxBrackets) {
    const bracketIndex = sandersTaxBrackets.indexOf(bracketCeiling);
    const bracketFloor =
      bracketIndex === 0
      ? 0
      : sandersTaxBrackets[bracketIndex - 1]
    ;
    let difference;

    if (income > bracketCeiling) {
      difference = bracketCeiling - bracketFloor;
    } else {
      difference = income - bracketFloor;
    }

    sandersTaxLiability = difference * (sandersTaxRatesForStatus.get(bracketCeiling) / 100);

    if (income <= bracketCeiling) {
      break;
    }
  }

  return {
    current: currentTaxLiability,
    sanders: sandersTaxLiability,
  };
}
