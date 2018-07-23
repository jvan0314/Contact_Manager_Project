import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';


@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})


export class ContactDetailComponent implements OnInit {

  @Input() contact: Contact;
  @Input() contacts: Contact[];
  @Output() updateContact = new EventEmitter<Contact[]>();

  constructor(private contactService: ContactService) {}
  ngOnInit() {
  }

  onEdit() {
    this.contact.edit = true;
  }

  onChange(newFirstName, newLastName, newEmail, newNumber) {
    this.contact.firstName = newFirstName.value;
    this.contact.lastName = newLastName.value;
    this.contact.email = newEmail.value;
    this.contact.number = newNumber.value;
    this.contactService.updateContact(this.contact).subscribe();
  }

  activeToggle() {
    if (this.contact.status === 'Active') {
      this.contact.status = 'Inactive';
    } else {
      this.contact.status = 'Active';
    }
    this.contactService.updateContact(this.contact).subscribe();
  }

  onDelete(contact: Contact): void {
    this.contact = null;
    this.contacts = this.contacts.filter(h => h !== contact);
    this.updateContact.emit(this.contacts);
    this.contactService.deleteContact(contact).subscribe();
  }
}
