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

  onSelect(contact: Contact): void {
    this.selectedContact = contact;
    this.selectedContact.edit = false;
    this.addContact = false;
  }

  getContacts(): void {
    this.contactService.getContacts()
      .subscribe(contacts => this.contacts = contacts);
  }

  updateContactCallback(c) {
    this.contacts = c;
  }

  addContactCallback(c) {
    this.contacts.push(c);
  }

  onAdd() {
     this.selectedContact = null;
     this.addContact = true;
  }
}

