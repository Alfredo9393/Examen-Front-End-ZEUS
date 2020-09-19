import { Component, ViewChild  } from '@angular/core';
import {EmployedService} from '../sevices/employees-list.service'
import { IEmployee } from '../interfase/Iemployee.metadata';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent  {
  dataEmployees:IEmployee[]

  //table material
  displayedColumns: string[] = [ 'name', 'last_name', 'birthday'];
  dataSource: MatTableDataSource<IEmployee>;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator

  constructor(private employedService:EmployedService) { }

  ngOnInit() {
    this.getEmployees()
  }

  getEmployees(){
    this.employedService.getEmployees().subscribe(res=>{
      console.log(res)
      if(res.success)
        this.dataEmployees=res.data.employees

       this.dataSource = new MatTableDataSource(this.dataEmployees);
       this.dataSource.paginator = this.paginator;
       this.dataSource.sort = this.sort;

    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}
