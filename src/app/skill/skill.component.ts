import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  msg: string = "I don't know what skill do i got. May be...";
  skillMessage: string = "The skill all I got. Some language is still learning. Expection position is junior java developer, programmer." 
  + " ";

  constructor() { }

  ngOnInit(): void {
  }

}
