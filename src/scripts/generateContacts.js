import { faker } from '@faker-js/faker';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'node:fs/promises';

const generateContacts = async (number) => {
  try {
    const entry = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    let data = JSON.parse(entry);

    const users = faker.helpers.multiple(createFakeContact, {
      count: number,
    });
    if (data.length > 0) {
      data = [...data, ...users];
    } else {
      data = users;
    }
    const newData = JSON.stringify(data);
    await fs.writeFile(PATH_DB, newData);
  } catch (error) {
    console.error(error);
  }
};

generateContacts(5);
