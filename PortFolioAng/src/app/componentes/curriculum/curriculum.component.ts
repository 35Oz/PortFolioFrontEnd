import { Component } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { Experiencia } from 'src/app/model/experiencia';
import { EducacionService } from 'src/app/service/educacion.service';
import { PorfolioService } from 'src/app/service/porfolio.service';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent {
  educacion: Educacion[] = [];
  expe: Experiencia[] = [];

  constructor( private datosPorfolio:PorfolioService, private sExperiencia: SExperienciaService,
    private tokenService: TokenService, private educacionS: EducacionService){ }

    isLogged = false;
  ngOnInit(): void {

    //EXPERIENCIA LABORAL
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
    //HISTORIAL ACADEMICO
    this.cargarEducacion();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
 
  }

  //EXPERIENCIA LABORAL
  cargarExperiencia():void{
    this.sExperiencia.lista().subscribe(data =>{this.expe= data;})
  }
  delete(id?: number){
    if(id != undefined){
      this.sExperiencia.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }

  //HISTORIAL ACADEMICO
  cargarEducacion(): void{
    this.educacionS.lista().subscribe(
      data =>{
        this.educacion = data;
      }
    )
  }

  borrar(id?: number){
    if(id!= undefined){
      this.educacionS.delete(id).subscribe(
        data =>{
          this.cargarEducacion();
        }, err =>{
          alert("No se pudo eliminar");
        }
      )
    }
  }
}

