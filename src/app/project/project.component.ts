import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  project: string = "I am proficient with Spring Boot java, Java EE. I have good team-work spirit and communication skills.  Most of my project build with spring boot, thymeleaf, bootstrap, postgresql, angular.";

  constructor() { }

  ngOnInit(): void {
  }

}
