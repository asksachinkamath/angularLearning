import {Component} from 'angular2/core'

@Component({
selector:'courses',
template:`<div>
<ul>
<li *ngFor="#course of coursesList" [class.selected-Course]="inputCourse.value===course">{{course}}</li>

</ul><br/>
<button  [disabled]="inputShowButton.value!=='Yes'">Submit Button</button>
</div>

<div>

Please Enter CourseName to highlight them in the list
<input type=text #inputCourse (keyup)="0"/>
<br/><br/>
Do you want to Enable the submit Button?Type Yes or NO
<input type=password #inputShowButton (keyup)="0"/>
</div>
<div>
<input type=text [(ngModel)]="Name"/>
this is the text being edited {{Name}}
</div>

`,
styleUrls:['src/css/coursesComponent.css']

})

export class CoursesComponent{
coursesList=["Course1","Course2","Course3"];
Name="Sachin";

NameFunction(){
return this.Name;

}

}