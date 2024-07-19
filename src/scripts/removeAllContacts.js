import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    let parsedData = JSON.parse(data);
    if (parsedData.length > 0) {
      parsedData = [];
      const newData = JSON.stringify(parsedData);
      fs.writeFile(PATH_DB, newData);
    } else {
      return;
    }
  } catch (error) {
    console.error(error);
  }
};

removeAllContacts();
