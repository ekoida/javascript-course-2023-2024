//  conectam modulul pentru operare cu sistemul de fisiere
import fs from "fs";

// doua variabile "imutabile" / constante de tip Array pentru a stoca datele
const phones = [];
const emails = [];

function loadContactsList() {
  fs.readFile("original.emails.list.txt", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
 
    parseContactsList(data);
    printContactsPhoneList(phones);
    console.log("\n");
    printContactsEmailList(emails);
  });
}

function parseContactsList(data) {
  const contactsArray = data.toString().split("\r\n");
  contactsArray.forEach((contact) => {
    const [phone, email] = contact.split(" ");

    phones.push(phone);
    emails.push(email);
  });
}

function printContactsPhoneList(phones) {
  phones.forEach((phone, index) => {
    console.log(`${index + 1}) ${phone}`);
  });
}

function printContactsEmailList(emails) {
  emails.forEach((email, index) => {
    console.log(`${index + 1}) ${email}`);
  });
}
loadContactsList();
