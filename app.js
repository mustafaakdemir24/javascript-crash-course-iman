let ageGroup1 = [18, 20, 16, 15, 21];
let ageGroup2 = [16, 17, 14, 15, 19];
let ageGroup3 = [20, 22, 26, 16, 28];

// const filteredAgeGroup = (ageGroup) => {
//   return ageGroup.filter((age) => age >= 18);
// };

// console.log(`Filtered Age Group 1: ${filteredAgeGroup(ageGroup1)}`);
// console.log(`Filtered Age Group 2: ${filteredAgeGroup(ageGroup2)}`);
// console.log(`Filtered Age Group 3: ${filteredAgeGroup(ageGroup3)}`);

// console.log(ageGroup1.filter((age) => age >= 18));
// console.log(ageGroup2.filter((age) => age >= 18));
// console.log(ageGroup3.filter((age) => age >= 18));

const addAdults = (ageGroup) => {
  const adults = Array();
  for (let i = 0; i < ageGroup.length; i++) {
    if (ageGroup[i] >= 18) {
      adults.push(ageGroup[i]);
    }
  }
  return adults;
};

const group1 = addAdults(ageGroup1);
const group2 = addAdults(ageGroup2);
const group3 = addAdults(ageGroup3);

console.log(group1);
console.log(group2);
console.log(group3);

console.log(`Adults from Age Group 1: ${group1}`);
