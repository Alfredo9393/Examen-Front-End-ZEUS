import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'/adap/employee', 
    pathMatch:'full' 
  },
  {
    path:"adap",
    component:SkeletonComponent,
    children:[
      {
      path:'employee',
      loadChildren: () => import('./modules/modules.module').then( (m) => m.ModulesModule ) 
      },
      {
        path:'**',
        redirectTo:'/adap/employee',
        pathMatch:'full'
      }
  
    ],

  },
  {
    path:'**',
    redirectTo:'/adap/employee',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})], 
  exports: [RouterModule]
})
export class AppRoutingModule { }