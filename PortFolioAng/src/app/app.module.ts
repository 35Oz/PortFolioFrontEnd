import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import {FormsModule} from '@angular/forms';

import { InicioComponent } from './componentes/inicio/inicio.component';
import { CurriculumComponent } from './componentes/curriculum/curriculum.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { Pag404Component } from './componentes/pag404/pag404.component';
import { LoginComponent } from './componentes/login/login.component';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './componentes/curriculum/new-experiencia.component';
import { EditExperienciaComponent } from './componentes/curriculum/edit-experiencia.component';
import { NeweducacionComponent } from './componentes/curriculum/neweducacion.component';
import { EditeducacionComponent } from './componentes/curriculum/editeducacion.component';
import { EditSkillComponent } from './componentes/skills/edit-skill.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NewtSkillComponent } from './componentes/skills/newt-skill.component';
import { EditAcercaDeComponent } from './componentes/inicio/edit-acerca-de.component';
import { NewproyectoComponent } from './componentes/proyectos/newproyecto.component';






@NgModule({
  declarations: [
    AppComponent,  
    InicioComponent,
    CurriculumComponent,
    SkillsComponent,
    ProyectosComponent,
    Pag404Component,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    EditSkillComponent,
    NewtSkillComponent,
    EditAcercaDeComponent,
    NewproyectoComponent   
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

