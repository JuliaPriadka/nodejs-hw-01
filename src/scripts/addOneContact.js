import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const entry = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    const data = JSON.parse(entry);
    const user = createFakeContact();
    data.push(user);
    const newData = JSON.stringify(data);
    await fs.writeFile(PATH_DB, newData);
  } catch (error) {
    console.error(error);
  }
};

addOneContact();
