import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { ComponentsModule } from '../components/components.module';
import { ServiciosComponent } from './servicios/servicios.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { UsuariosComponent } from './dashboard/usuarios/usuarios.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrearUsuarioComponent } from './dashboard/crear-usuario/crear-usuario.component';
import { CrearServicioComponent } from './dashboard/crear-servicio/crear-servicio.component';
import { RecuperarContrasenaComponent } from './recuperar-contrasena/recuperar-contrasena.component';
import { CrearCitaComponent } from './dashboard/crear-cita/crear-cita.component';
import { ActualizarUsuarioComponent } from './dashboard/actualizar-usuario/actualizar-usuario.component';
import { ActualizarServicioComponent } from './dashboard/actualizar-servicio/actualizar-servicio.component';
import { PerfilComponent } from './dashboard/perfil/perfil.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegistrarseComponent,
    ServiciosComponent,
    DashboardComponent,
    UsuariosComponent,
    CrearUsuarioComponent,
    CrearServicioComponent,
    RecuperarContrasenaComponent,
    CrearCitaComponent,
    ActualizarUsuarioComponent,
    ActualizarServicioComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
