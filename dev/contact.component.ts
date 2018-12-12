import {Component} from 'angular2/core'
import { ContactDetail } from './contactdetail.component'
import { ContactService } from "./Services/contact.service";
import { ContactInterface } from "./Interfaces/contact-interface";
import {OnInit} from 'angular2/core'

@Component({
selector:'contact',
template:`
<hr/>
<h1>This is  contact Info</h1>
<p>Below is the contact Information</p>
<br/>
FirstName: {{contactInfo.firstName}} <input type=text [(ngModel)]="contactInfo.firstName"/><br/>
LastName: {{contactInfo.lastName}} <input type=text [(ngModel)]="contactInfo.lastName"/><br/>
FullName:<span (click)="toggle()" [class.isSelected]="showDetail===true">{{contactInfo.firstName +" "+ contactInfo.lastName}}</span>
<div *ngIf="showDetail===true">
Phone: {{contactInfo.phoneNumber}}<br/>
Email: {{contactInfo.email}}<br/>
</div>

<div>
<hr>
<p>Below is the contacts list</p><br/>
<ul>
<li *ngFor="#contact of contacts" (click)="selectContact(contact)" [class.clicked]="selectedContact===contact">{{contact.firstName +" "+contact.lastName}}
</li>
</ul>

<br/>
<contactDetail [contact]="selectedContact"></contactDetail>


</div>


`,
directives:[ContactDetail],
providers:[ContactService],
styleUrls:['src/css/contactComponent.css']


})


export class ContactComponent implements OnInit{

public contactInfo={firstName:'John',lastName:'Doe',phoneNumber:'+1-123-456-7890',email:'john.doe@test.org'};
public contacts;
public showDetail=false;


constructor(private _contactService:ContactService){

}

public getContacts(){
this._contactService.getContacts().then((contactList:ContactInterface[])=>this.contacts=contactList );

}

toggle=function(){
    if(this.showDetail){return this.showDetail=false};
    
return this.showDetail=true;

};
public showContactDetails=false;
public selectedContact={};

selectContact=function(Contact){

this.selectedContact=Contact;
this.showContactDetails=true;

}

ngOnInit(){

    this.getContacts();
}

}