import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarServicioComponent } from './pages/dashboard/actualizar-servicio/actualizar-servicio.component';
import { ActualizarUsuarioComponent } from './pages/dashboard/actualizar-usuario/actualizar-usuario.component';
import { CrearCitaComponent } from './pages/dashboard/crear-cita/crear-cita.component';
import { CrearServicioComponent } from './pages/dashboard/crear-servicio/crear-servicio.component';
import { CrearUsuarioComponent } from './pages/dashboard/crear-usuario/crear-usuario.component';
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';
import { PerfilComponent } from './pages/dashboard/perfil/perfil.component';
import { UsuariosComponent } from './pages/dashboard/usuarios/usuarios.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RecuperarContrasenaComponent } from './pages/recuperar-contrasena/recuperar-contrasena.component';
import { RegistrarseComponent } from './pages/registrarse/registrarse.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';

const routes: Routes = [
  {
    path: "home", component: HomeComponent
  },
  {
    path: "login", component: LoginComponent
  },
  {
    path: "registrarse", component: RegistrarseComponent
  },
  {
    path: "recuperar-contrasena", component: RecuperarContrasenaComponent
  },
  {
    path: "servicios", component: ServiciosComponent
  },
  {
    path: "dashboard", component: DashboardComponent
  },
  {
    path: "usuarios", component: UsuariosComponent
  },
  {
    path: "crear-usuario", component: CrearUsuarioComponent
  },
  {
    path: "actualizar-usuario", component: ActualizarUsuarioComponent
  },
  {
    path: "crear-servicio", component: CrearServicioComponent
  },
  {
    path: "actualizar-servicio", component: ActualizarServicioComponent
  },
  {
    path: "crear-cita", component: CrearCitaComponent
  },
  {
    path: "perfil", component: PerfilComponent
  },
  {
    path: "**", pathMatch: "full", redirectTo: "home"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
