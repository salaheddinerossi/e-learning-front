import {Component, Input} from '@angular/core';
import {Skill} from "../../models/Skill";

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css'
})
export class SkillComponent {

  @Input() skill!:Skill;

}
