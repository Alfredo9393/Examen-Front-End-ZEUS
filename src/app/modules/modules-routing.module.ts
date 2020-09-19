import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeesNewComponent } from './employees-new/employees-new.component';
import { GroupsComponent } from './groups/groups.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path:"", 
    component:HomeComponent
  },
  {
    path:"list",  
    component:EmployeesListComponent
  },
  {
    path:"new",
    component:EmployeesNewComponent
  },{
    path:"groups",
    component:GroupsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
