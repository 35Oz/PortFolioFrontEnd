import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { ImageService } from 'src/app/service/image.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})

export class EditAcercaDeComponent implements OnInit {
  persona: persona = null;
  
  constructor(private activatedRouter: ActivatedRoute,
    private personaService: PersonaService,
    private router: Router,
    public imageService: ImageService) { }

  ngOnInit(): void {
    const id= this.activatedRouter.snapshot.params['id'];
   this.personaService.detail(id).subscribe(
    data =>{
      this.persona = data;
    }, err =>{
      alert("Error al modificar");
      this.router.navigate(['/inicio']);
    }
   )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.update(id, this.persona).subscribe(
      data =>{
        this.router.navigate(['/inicio']);
      }, err =>{
        alert("error al modificar la educacion");
        this.router.navigate(['/editacercade/1']);
      }
    )
  }

  uploadImage($event:any){
 //   this.imageService.uploadImage($event)//
  }

  
}
