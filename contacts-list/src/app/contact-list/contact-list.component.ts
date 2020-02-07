import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
  providers: [DataService]
})
export class ContactListComponent implements OnInit {
  title = 'Contacts List';
  contacts;
  selectedContact;
  constructor(public dataService: DataService, private router: Router) { }
  ngOnInit() {
    this.dataService.getContacts().subscribe((data: any[]) => {
      this.contacts = data;
      this.dataService.apiContacts = data;

      this.dataService.contacts.forEach(el => {
        this.contacts.push(el)
      })
    })
  }

  selectContact(contact) {
    this.router.navigate(['/Contact-Details/'+contact._id]);
    // localStorage.setItem('selectedData', contact)
  }
}
