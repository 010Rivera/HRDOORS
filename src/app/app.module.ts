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


const appRoutes:Routes=[
  {path:'inicio', component: InicioComponent},
  {path:'accesorios', component: AccesoriosComponent},
  {path:'descuento' , component:DescuentoComponent},
  { path:'diseño' ,component:DisenoComponent},
  { path:'materiales' , component:MaterialesComponent},
  { path:'servicio de ayuda ', component:ServiciodeayudaComponent},
  { path:'tipo de puerta', component:TipodepuertaComponent}
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
    SesionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true})
  ],
  providers: [
    CargarscriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
