import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

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
    });
  }

  selectContact(contact) {
    this.router.navigate(['/Contact-Details/' + contact._id]);
  }
}