import { faker } from "@faker-js/faker";

import { UserData } from "../support/interfaces/user-data";

export const userFactory = (tag: string = "user") => {
  const userData: UserData = {
    email: faker.internet.email(),
    name: faker.person.firstName(),
    password: faker.internet.password(),
  };

  cy.wrap(userData).as(tag);

  return userData;
};
