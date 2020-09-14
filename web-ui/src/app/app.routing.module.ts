import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { MainComponent } from './common/main/main.component';
import { AuthGuard } from './security/auth.guard';

const routes: Routes = [
  {
    path: '', component: MainComponent, canActivate: [AuthGuard], data: {title: 'webui'},
    children: [
      {path: '', pathMatch: 'full', redirectTo: '', data: {title: 'webui'} },
      { path: 'user', loadChildren: './common/api/user-detail/user.module#UserModule', data: {title: 'webui'} },
    ]
  },
  //{path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'login', component: LoginComponent, data: {title: 'webui'} },
  { path: 'register', component: RegisterComponent , data: {title: 'webui'}},
  { path: '**', component: NotfoundComponent , data: {title: 'webui'}}
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}


