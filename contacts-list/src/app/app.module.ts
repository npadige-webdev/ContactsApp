import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Material } from './material-module';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { CreateContactComponent } from './create-contact/create-contact.component';

const myroutes: Routes = [
  { path: '', component: ContactListComponent },
  { path: 'Contact-Details/:id', component: ContactDetailsComponent },
  { path: 'Contact-List', component: ContactListComponent },
  { path: 'Create-Contact', component:CreateContactComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactDetailsComponent,
    CreateContactComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(myroutes), HttpClientModule, FormsModule, ReactiveFormsModule, Material, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
