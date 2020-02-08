import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private dataService: DataService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', [Validators.required, Validators.minLength(13)]],
      company: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      alert('SUCCESSFULLY ADDED CONTACT!! \n' +
        'Name :' + JSON.stringify(this.registerForm.value.firstName) + JSON.stringify(this.registerForm.value.lastName)
        + '\n Company :' + JSON.stringify(this.registerForm.value.company)
        + '\n Phone :' + JSON.stringify(this.registerForm.value.phone)
        + '\n Email :' + JSON.stringify(this.registerForm.value.email)
        + '\n Address :' + JSON.stringify(this.registerForm.value.address)
      );
      this.router.navigate(['/Contact-List']);
    }
  }
}
