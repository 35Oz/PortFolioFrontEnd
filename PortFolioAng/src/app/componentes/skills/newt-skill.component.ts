import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-newt-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewtSkillComponent implements OnInit{
  nombre: string;
  porcentaje: number;

  constructor(private skillS: SkillService, private router: Router) { }

  ngOnInit(): void {
    
  }

  onCreate(): void{
   const skill = new Skill(this.nombre, this.porcentaje);
   this.skillS.save(skill).subscribe(
    data => {
      this.router.navigate(['/skills'])
    }, err =>{
      alert("Fallo al añadir la skill");
      this.router.navigate(['/newskill']);
    }
   ) 
  }

}
