import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  selectedContact: Contact;
  contacts: Contact[];
  addContact = false;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.getContacts();
  }

  /* onSelect gets a handle a specific contact from the contact list. The edit and
   addContact properties are reset to false to allow the user to edit or add contacts
   multiple times*/
  onSelect(contact: Contact): void {
    this.selectedContact = contact;
    this.selectedContact.edit = false;
    this.addContact = false;
  }

  // Send a http GET request to acquire the contact list
  getContacts(): void {
    this.contactService.getContacts()
      .subscribe(contacts => this.contacts = contacts);
  }

  /* These callbacks are necessary to send an event to the parent requesting
  to update the contact list*/
  updateContactCallback(c) {
    this.contacts = c;
  }

  addContactCallback(c) {
    this.contacts.push(c);
  }

  /* onAdd injects the adding new contact form HTML into the template*/
  onAdd() {
     this.selectedContact = null;
     this.addContact = true;
  }
}

