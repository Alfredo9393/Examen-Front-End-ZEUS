import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import {EmployedService} from '../sevices/employees-list.service'

@Component({
  selector: 'app-employees-new',
  templateUrl: './employees-new.component.html',
  styleUrls: ['./employees-new.component.css']
})
export class EmployeesNewComponent implements OnInit {

  constructor(private router: Router,private employedService:EmployedService) { }

  ngOnInit() {
  }

  formEmployee = new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(30)] ),
    last_name:new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(30)] ),
    birthday:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)] ),
  })

  save(){
    console.log(this.formEmployee.value)

    if(this.formEmployee.status === "VALID"){
      this.employedService.setEmployees(this.formEmployee.value).subscribe(res=>{
        console.log(res)
        if(res.success)
        this.router.navigateByUrl('/adap/employee/list');
        else{
          console.log("ERROR")
        }
      })
    }else{
      console.log("datos no validos")
    }




  }

 


}
