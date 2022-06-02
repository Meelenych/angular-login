import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component'
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./guards/auth.guard";
// import { AppComponent } from './app.component';

const Routes = [
  // { path: '', component: AppComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'admin',
    canActivate: [AuthGuard],
    canDeactivate: [AuthGuard],
    loadChildren: ()=> import('./components/admin/admin.module').then((m)=>m.AdminModule)
  },
  { path: '**', component: NotFoundComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(Routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
