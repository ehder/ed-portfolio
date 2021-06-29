import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  skillMessage: string = "I don't know what skill i have.";

  constructor() { }

  ngOnInit(): void {
  }

}
