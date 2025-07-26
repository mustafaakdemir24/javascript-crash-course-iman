usDollars1 = [10, 20, 30, 40];
usDollars2 = [100, 150, 35];

const auDollars1 = usDollars1.map((usDollar) => usDollar * 1.5);
const auDollars2 = usDollars2.map((usDollar) => usDollar * 1.5);

console.log(auDollars1);
console.log(auDollars2);

const convertToAuDollars = (usDollar) => {
  const auDollar = Array();
  for (let i = 0; i < usDollar.length; i++) {
    auDollar[i] = usDollar[i] * 1.5;
  }

  return auDollar;
};

const auDollar3 = convertToAuDollars(usDollars1);
const auDollar4 = convertToAuDollars(usDollars2);

console.log(auDollar3);
console.log(auDollar4);
