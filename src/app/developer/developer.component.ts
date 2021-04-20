import { Component, OnInit } from '@angular/core';
import { Developer } from '../common/developer.model';
import { Skill } from '../common/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {
  public developer: Developer;
  constructor() { }

  ngOnInit(): void {
    this.developer = new Developer("Sinclar","Bob",25, "Homme", "blabla");
    this.developer.addSkill(new Skill("angular", "bla", "Wikipedia"));
    this.developer.addSkill(new Skill("developpeur", "bla", "unalgar.com"));
  }

}
