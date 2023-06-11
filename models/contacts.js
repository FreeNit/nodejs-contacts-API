const fs = require('fs/promises');
const path = require('path');

const contactsPath = path.join(`${__dirname}/`, 'contacts.json');

const listContacts = async () => {
  try {
    const contacts = await fs.readFile(contactsPath);

    return JSON.parse(contacts);
  } catch (error) {
    console.log(error.message);
  }
};

const getContactById = async (contactId) => {
  try {
    // console.log(contactId);
    const contacts = await listContacts();
    const result = contacts.find((contact) => contact.id === contactId);

    return result || null;
  } catch (error) {
    console.log(error.message);
  }
};

const removeContact = async (contactId) => {};

const addContact = async (body) => {};

const updateContact = async (contactId, body) => {};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
