import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { LoginPage } from '../login/login.page';
import { RestablecerPage } from '../restablecer/restablecer.page';


const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'login',
    component: LoginPage,
  },
  {
    path: 'restablecer',
    component: RestablecerPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
