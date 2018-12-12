import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'
import {ContactComponent} from './contact.component'
import {ProductComponent} from './product.component'

@Component({
    selector: 'my-app',
    template: `
       <h1>Angular 2 Boilerplate</h1>
        <p>Hello World!</p>
        <hr/>
        <h3>Below are the courses</h3>
        <courses></courses>  
        <div><contact></contact></div>
        <div><product></product></div>
    `,
    directives:[CoursesComponent,ContactComponent,ProductComponent]
})
export class AppComponent {

}