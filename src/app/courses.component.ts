import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector : 'courses',
    templateUrl : "./courses.component.html",
    styleUrls: ['./courses.component.css']

})

export class CoursesComponent {
    title  = "List of Courses"
    courses;

    constructor() {
        let service = new CoursesService();
        this.courses = service.getShows();
        console.log(this.courses);
    }
}