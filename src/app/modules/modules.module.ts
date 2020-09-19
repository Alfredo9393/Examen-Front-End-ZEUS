import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { ModulesRoutingModule } from './modules-routing.module';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeesNewComponent } from './employees-new/employees-new.component';
import { DataTablesModule } from 'angular-datatables';
import { GroupsComponent } from './groups/groups.component';
import { HomeComponent } from './home/home.component';
import { GroupsEmployeesComponent } from './groups-employees/groups-employees.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    EmployeesListComponent,
    EmployeesNewComponent,
    GroupsComponent,
    HomeComponent,
    GroupsEmployeesComponent
  ],
  imports: [
    SharedModule,
    ModulesRoutingModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    DragDropModule,
    MatCheckboxModule,
    MatIconModule
  ]
})
export class ModulesModule { }
