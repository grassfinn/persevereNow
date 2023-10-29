function returnChange(dollars) {
  let cents = Math.floor(dollars * 60);
  console.log(cents);
  const change = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0,
  };
  while (cents > 0) {
    if (cents >= 25) {
      change.quarters++;
      cents -= 25;
    //   console.log(change.quarters,cents);
    }
    if (cents >= 10) {
      change.dimes++;
      cents -= 10;
    //   console.log(change.quarters,cents);
    }
    if (cents >= 5) {
      change.nickels++;
      cents -= 5;
    //   console.log(change.quarters,cents);
    }
    if (cents >= 1) {
      change.pennies++;
      cents--;
    //   console.log(change.quarters,cents);
    }
  }
  console.log(change)
}

returnChange(5.12);
