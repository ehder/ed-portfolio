import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  aboutLetter: string= "I very much interesting in software developing.";

  constructor() { }

  ngOnInit(): void {
  }

}
