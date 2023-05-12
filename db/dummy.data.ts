import { faker } from '@faker-js/faker';

export const userList = [
  {
    username: faker.internet.userName(),
    password: faker.internet.password(),
    name: faker.person.firstName(),
    location: faker.location.state(),
  },
  {
    username: faker.internet.userName(),
    password: faker.internet.password(),
    name: faker.person.firstName(),
    location: faker.location.state(),
  },
  {
    username: faker.internet.userName(),
    password: faker.internet.password(),
    name: faker.person.firstName(),
    location: faker.location.state(),
  },
  {
    username: faker.internet.userName(),
    password: faker.internet.password(),
    name: faker.person.firstName(),
    location: faker.location.state(),
  },
  {
    username: faker.internet.userName(),
    password: faker.internet.password(),
    name: faker.person.firstName(),
    location: faker.location.state(),
  },
  {
    username: faker.internet.userName(),
    password: faker.internet.password(),
    name: faker.person.firstName(),
    location: faker.location.state(),
  },
  {
    username: faker.internet.userName(),
    password: faker.internet.password(),
    name: faker.person.firstName(),
    location: faker.location.state(),
  },
  {
    username: faker.internet.userName(),
    password: faker.internet.password(),
    name: faker.person.firstName(),
    location: faker.location.state(),
  },
  {
    username: faker.internet.userName(),
    password: faker.internet.password(),
    name: faker.person.firstName(),
    location: ` ${faker.location.state()}`,
  },
  {
    username: faker.internet.userName(),
    password: faker.internet.password(),
    name: faker.person.firstName(),
    location: ` ${faker.location.state()}`,
  },
];

export type Post = {
  title: string;
  content: string;
  tags: string[];
};

export const postList = [
  {
    title: faker.lorem.word(10),
    content: faker.lorem.sentence(10),
    tags: ['#happy', '#laugh'],
  },
  {
    title: faker.lorem.word(10),
    content: faker.lorem.sentence(10),
    tags: ['#sad', '#worried'],
  },
  {
    title: faker.lorem.word(10),
    content: faker.lorem.sentence(10),
    tags: ['#happy', '#care'],
  },
  {
    title: faker.lorem.word(10),
    content: faker.lorem.sentence(10),
    tags: ['#sad', '#faked'],
  },
  {
    title: faker.lorem.word(10),
    content: faker.lorem.sentence(10),
    tags: ['#worried', '#faked', '#sad'],
  },
  {
    title: faker.lorem.word(10),
    content: faker.lorem.sentence(10),
    tags: ['#happy', '#love'],
  },
  {
    title: faker.lorem.word(10),
    content: faker.lorem.sentence(10),
    tags: ['#laugh', '#love'],
  },
  {
    title: faker.lorem.word(10),
    content: faker.lorem.sentence(10),
    tags: ['#love', '#faked'],
  },
  {
    title: faker.lorem.word(10),
    content: faker.lorem.sentence(10),
    tags: ['#care', '#worried'],
  },
  {
    title: faker.lorem.word(10),
    content: faker.lorem.sentence(10),
    tags: ['#happy', '#sad'],
  },
];
