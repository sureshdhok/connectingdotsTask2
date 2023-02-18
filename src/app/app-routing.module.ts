import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TodoComponent } from './todo/todo.component';


const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'',component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'todo', component:TodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
