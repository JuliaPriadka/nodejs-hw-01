import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const countContacts = async () => {
  const entry = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
  const parsedEntry = JSON.parse(entry);
  return parsedEntry.length;
};

console.log(await countContacts());
