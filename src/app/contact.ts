export class Contact {
  static numberOfContacts = 0;
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  number: string;
  status: string;
  edit: boolean = false;

  constructor(firstName, lastName, email, number, status) {
    this.id = this.generateId();
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.number = number;
    this.status = status;
  }
//this will create a new ID for new contacts added
  generateId(): number {
     Contact.numberOfContacts += 1;
     return Contact.numberOfContacts;
  }

}
