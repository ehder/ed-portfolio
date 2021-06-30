import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  msg: string = "what skill do i got?";
  skillMessage: string = "The skill all I got. Some language is still learning. Expection position is junior java developer, programmer." 
  + " ";

  @Output()html: string = "html";

  constructor() { }

  ngOnInit(): void {
  }

}
