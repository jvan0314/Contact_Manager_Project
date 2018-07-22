import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';
import { MessageService} from '../message.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  selectedContact: Contact;

  contacts: Contact[];


  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.getContacts();
  }

  onSelect(contact: Contact): void {
    this.selectedContact = contact;
    this.selectedContact.edit = false;
  }
  getContacts(): void {
    this.contactService.getContacts().subscribe(contacts => this.contacts = contacts);
  }

}
