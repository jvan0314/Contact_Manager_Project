import { Component, OnInit, Input } from '@angular/core';
import { Contact} from '../contact';
import { ContactService } from '../contact.service';


@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})


export class ContactDetailComponent implements OnInit {
  contacts: Contact[];

  @Input() contact: Contact;

  constructor(private contactService: ContactService) {}
  ngOnInit() {
    this.getContacts();
  }

  getContacts(): void {
    this.contactService.getContacts()
      .subscribe(contacts => this.contacts = contacts);
  }

  onEdit() {
    this.contact.edit = true;
  }

  onChange(newFirstName, newLastName, newEmail, newNumber) {
    this.contact.firstName = newFirstName.value;
    this.contact.lastName = newLastName.value;
    this.contact.email = newEmail.value;
    this.contact.number = newNumber.value;
  }

  activeToggle() {
    if (this.contact.status === 'Active') {
      this.contact.status = 'Inactive';
    } else {
      this.contact.status = 'Active';
    }
  }

  onDelete(contact: Contact): void {
    this.contacts = this.contacts.filter(h => h !== contact);
    this.contactService.deleteContact(contact).subscribe();
  }
}
