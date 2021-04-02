import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './views/home/home.component';
import {LoginComponent} from './login/login.component';
import {PostComponent} from './views/post/post.component';
import { AuthGuardService } from './auth-guard.service';
import {UsuarioComponent} from './views/usuario/usuario.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent

  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'usuario',
    component: UsuarioComponent
  },
  {
    path: 'post',
    component: PostComponent,
    canActivate: [ AuthGuardService ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
