import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './componentes/inicio/inicio.component'
import { CurriculumComponent } from './componentes/curriculum/curriculum.component'
import { SkillsComponent } from './componentes/skills/skills.component'
import { ProyectosComponent } from './componentes/proyectos/proyectos.component'
import { Pag404Component } from './componentes/pag404/pag404.component';
import { LoginComponent } from './componentes/login/login.component';
import { NewExperienciaComponent } from './componentes/curriculum/new-experiencia.component';
import { EditExperienciaComponent } from './componentes/curriculum/edit-experiencia.component';
import { NeweducacionComponent } from './componentes/curriculum/neweducacion.component';
import { EditeducacionComponent } from './componentes/curriculum/editeducacion.component';
import { NewtSkillComponent } from './componentes/skills/newt-skill.component';
import { EditSkillComponent } from './componentes/skills/edit-skill.component';
import { EditAcercaDeComponent } from './componentes/inicio/edit-acerca-de.component';
import { NewproyectoComponent } from './componentes/proyectos/newproyecto.component';




const routes: Routes = [
  {path:'login', component: LoginComponent },
  {path:'inicio', component: InicioComponent },
  {path:'curriculum', component: CurriculumComponent },
  {path:'skills', component: SkillsComponent },
  {path:'proyectos', component: ProyectosComponent },
  {path:'nuevaexp', component: NewExperienciaComponent},
  {path:'editexp/:id', component:EditExperienciaComponent},
  {path:'nuevaedu', component:NeweducacionComponent},
  {path:'editedu/:id', component:EditeducacionComponent},
  {path: 'newskill', component:NewtSkillComponent},
  {path: 'editskill/:id', component:EditSkillComponent},
  {path: 'editacercade/:id', component:EditAcercaDeComponent},
  {path: 'nuevoPro', component:NewproyectoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
