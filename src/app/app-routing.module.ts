import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'index.html', component: HomeComponent },
  { path: '', pathMatch: 'full', redirectTo: 'index.html' },
  { path: '**', pathMatch: 'full', redirectTo: 'index.html' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
