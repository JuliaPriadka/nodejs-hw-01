import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    const parsedData = JSON.parse(data);
    if (parsedData.length > 0) {
      parsedData.splice(parsedData.length - 1, 1);
      const newData = JSON.stringify(parsedData);
      fs.writeFile(PATH_DB, newData);
    } else {
      return;
    }
  } catch (error) {
    console.error(error);
  }
};

removeLastContact();
