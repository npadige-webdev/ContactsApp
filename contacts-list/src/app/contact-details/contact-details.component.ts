import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  constructor(public dataService: DataService, private acr: ActivatedRoute) { }
  selectContact: any;
  ngOnInit(): void {
    const id = this.acr.snapshot.params.id;
    this.dataService.getContacts().subscribe((data: any[]) => {
      this.selectContact = data.filter(x => x._id === id);
    })
  }

}
