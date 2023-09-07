import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { InicioComponent } from './content/inicio/inicio.component';
import { FooterComponent } from './footer/footer.component';

import { RegistroComponent } from './registro/registro.component';
import { SesionComponent } from './sesion/sesion.component';

import { CargarscriptsService } from './cargarscripts.service';
import { RouterModule,Routes } from '@angular/router';

import { AccesoriosComponent } from './content/accesorios/accesorios.component';
import { DescuentoComponent } from './content/descuento/descuento.component';
import { DisenoComponent } from './content/diseno/diseno.component';
import { MaterialesComponent } from './content/materiales/materiales.component';
import { ServiciodeayudaComponent } from './content/serviciodeayuda/serviciodeayuda.component';
import { TipodepuertaComponent } from './content/tipodepuerta/tipodepuerta.component';
import { LaminadaComponent } from './content/laminada/laminada.component';


import { FormsModule } from '@angular/forms';
import {AngularFireModule} from '@angular/fire/compat';



const appRoutes:Routes=[
  {path:'', component: InicioComponent},
  {path:'inicio', component: InicioComponent},
  {path:'accesorios', component: AccesoriosComponent},
  {path:'descuento' , component:DescuentoComponent},
  { path:'diseño' ,component:DisenoComponent},
  { path:'materiales' , component:MaterialesComponent},
  { path:'servicio de ayuda ', component:ServiciodeayudaComponent},
  { path:'tipo de puerta', component:TipodepuertaComponent},
  { path:'registro',component:RegistroComponent},
  { path:'sesion',component:SesionComponent},
  { path:'laminada',component:LaminadaComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    ContentComponent,
    InicioComponent,
    FooterComponent,
    RegistroComponent,
    SesionComponent,
    LaminadaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyC4NpX_2hCwWMJIHutqRIbX7aq7ueLtZD0",
      authDomain: "hrdoors-24.firebaseapp.com",
      projectId: "hrdoors-24",
      storageBucket: "hrdoors-24.appspot.com",
      messagingSenderId: "993119520873",
      appId: "1:993119520873:web:dca667853e59309e967af8",
      measurementId: "G-2L8EWFGGCE"
    }),
    RouterModule.forRoot(appRoutes,{enableTracing:true})
  ],
  providers: [
    CargarscriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
