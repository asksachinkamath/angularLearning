import {Component} from 'angular2/core'

@Component({
selector:'contactDetail',
template:`<div>Selected Contact
<br/>
<div>
<label>FirstName:</label>
<input type="text" [(ngModel)]="contact.firstName" id="firstName">
</div>

<div>
<label>lastName:</label>
<input type="text" [(ngModel)]="contact.lastName" id="lastName">
</div>

<div>
<label>phoneNumber:</label>
<input type="text" [(ngModel)]="contact.phone" id="phoneNumber">
</div>

<div>
<label>email:</label>
<input type="text" [(ngModel)]="contact.email" id="email">
</div>



</div>`,
inputs:["contact"],
styleUrls:["src/css/contactComponent.css"]


})
export class ContactDetail{
public contact=[];

}