import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';


@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})


export class ContactDetailComponent implements OnInit {
  /* input and outputs are necessary to communicate new information between the parent
    and the child*/
  @Input() contact: Contact;
  @Input() contacts: Contact[];
  @Output() updateContact = new EventEmitter<Contact[]>();

  /*putting contactService into my constructor will allow me to communicate to the messaging service*/
  constructor(private contactService: ContactService) {}
  ngOnInit() {
  }

  // onEdit enables the HTML for editing to be injected
  onEdit() {
    this.contact.edit = true;
  }

  /* onChange will commit the changes to the contact information and log it through
  the messaging service*/
  onChange(newFirstName, newLastName, newEmail, newNumber) {
    this.contact.firstName = newFirstName.value;
    this.contact.lastName = newLastName.value;
    this.contact.email = newEmail.value;
    this.contact.number = newNumber.value;
    this.contactService.updateContact(this.contact).subscribe();
  }

  /* activeToggle simplifies activation and deactivating a contact's status*/
  activeToggle() {
    if (this.contact.status === 'Active') {
      this.contact.status = 'Inactive';
    } else {
      this.contact.status = 'Active';
    }
    this.contactService.updateContact(this.contact).subscribe();
  }
  /* deletes the current contact from server and sends event to parent to update while
  changing the selectedContact to null again so the injected HTML of that contact is removed.*/
  onDelete(contact: Contact): void {
    this.contact = null;
    this.contacts = this.contacts.filter(h => h !== contact);
    this.updateContact.emit(this.contacts);
    this.contactService.deleteContact(contact).subscribe();
  }
}
