import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  aboutLetter: string= "I love designing and createing website and looking for more opportunities to work in coding on a freelance basis.";

  constructor() { }

  ngOnInit(): void {
  }

}
