let user = [
  {
    email: `example@gmail.com`,
    password: `test1234`,
    name: `John Doe`,
    discord: `examplediscord`,
    subscription: `VPI+`,
    lessonCompleted: [1, 2, 3],
  },
  {
    email: `inamuser@gmail.com`,
    password: `test1234`,
    name: `Iman Musa`,
    discord: `imancodes`,
    subscription: `VPI+`,
    lessonCompleted: [1, 2, 3, 4, 5],
  },
];

console.log(user[0].email);

console.log(user[0].name[0]);

console.log(user[0].lessonCompleted.map((lesson) => lesson * 3));

const addUser = (
  email,
  password,
  name,
  discord,
  subscription,
  lessonCompleted
) => {
  user.push({
    email: email,
    password: password,
    name: name,
    discord: discord,
    subscription: subscription,
    lessonCompleted: lessonCompleted,
  });
};

addUser(
  `mustafa.akdemir24@gmail.com`,
  `Tes1234`,
  `Mustafa Akdemir`,
  `mustafaakdemir24`,
  `VPI+`,
  [1, 2, 3, 4]
);

console.log(user[2].name);
