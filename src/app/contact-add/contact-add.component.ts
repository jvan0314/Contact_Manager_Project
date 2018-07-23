import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css']
})
export class ContactAddComponent implements OnInit {
  /* input and outputs are necessary to communicate new information between the parent
  and the child*/
  @Input() addContact: boolean;
  @Output() updateContact = new EventEmitter<Contact>();
  status = '';
  constructor(private contactService: ContactService) {}
  ngOnInit() {}
  /* add will created a new contact object, send it back to the parent as
  an event, telling the parent to update the list contact list and then logging it
  to the messaging system*/
  add(firstName, lastName, email, number, status) {
    const newContact: Contact = new Contact(firstName, lastName, email, number, status);
    this.updateContact.emit(newContact);
    this.contactService.addContact(newContact).subscribe();

  }

}
