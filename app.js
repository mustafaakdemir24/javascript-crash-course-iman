let users = [
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

console.log(users[0].email);

console.log(users[0].name[0]);

console.log(users[0].lessonCompleted.map((lesson) => lesson * 3));

const addUser = (user) => {
  users.push(user);
};

addUser({
  email: `mustafa.akdemir24@gmail.com`,
  password: `Tes1234`,
  name: `Mustafa Akdemir`,
  discord: `mustafaakdemir24`,
  subscription: `VPI+`,
  lessonCompleted: [1, 2, 3, 4],
});

console.log(users[2].lessonCompleted);
