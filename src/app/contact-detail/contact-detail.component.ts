import { Component, OnInit, Input } from '@angular/core';
import { Contact} from '../contact';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})


export class ContactDetailComponent implements OnInit {
  @Input() contact: Contact;
  constructor() {}
  ngOnInit() {}
  onEdit(){
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

  delete() {
    // still ahve to implement delete function
  }
}
