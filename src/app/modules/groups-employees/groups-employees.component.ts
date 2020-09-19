import { Component,Input,Output, EventEmitter, OnInit } from '@angular/core';
import { GroupsService } from '../sevices/groups.service';
import { IGroupsEmpl  } from '../interfase/igroups-emp.metadata';

@Component({
  selector: 'app-groups-employees',
  templateUrl: './groups-employees.component.html',
  styleUrls: ['./groups-employees.component.scss']
 
})
export class GroupsEmployeesComponent implements OnInit {
  allComplete: boolean = true;
  @Input() item: any
  @Output() event  = new EventEmitter<number>();
  @Output() eventUpdateData  = new EventEmitter<IGroupsEmpl>();

  groupsEmpl:IGroupsEmpl 
  constructor(private groupsService:GroupsService) { }

  ngOnInit() {
    this.getByGroup()
  }


  getByGroup(){
    this.groupsService.getByGroup(this.item.id).subscribe(res=>{

      let dataEmployees:IGroupsEmpl[] = []

      if(res.success){
        res.data.employees.forEach(item => {
          dataEmployees.push({
            id:item.id, 
            group_id:item.group_id,
            name:item.name,
            selected: true
          })
        });
      }
    

      this.groupsEmpl= {
        id:null,
        group_id:this.item.id,
        name: this.item.name,
        selected: true,
        listEmployee: dataEmployees
      };

      this.setSelected()


    })

  }

  updateAllComplete() {
    this.allComplete = this.groupsEmpl.listEmployee != null && this.groupsEmpl.listEmployee.every(t => t.selected);
    this.setSelected()
  }

  someComplete(): boolean {


    if (this.groupsEmpl === undefined)
      return false;

    if (this.groupsEmpl.listEmployee === undefined  || this.groupsEmpl.listEmployee == null) 
      return false;


    let res =this.groupsEmpl.listEmployee.filter(t => t.selected).length > 0 && !this.allComplete;

    // this.setSelected()

    return res


  }

  setAll(selected: boolean) {
    this.allComplete = selected;
    if (this.groupsEmpl === undefined)
      return false;

    if (this.groupsEmpl.listEmployee === undefined  || this.groupsEmpl.listEmployee == null) 
      return false;

    this.groupsEmpl.listEmployee.forEach(t => t.selected = selected);
    
    this.setSelected()

  }

  remove(){
    this.event.emit(this.item);

  }

  setSelected(){
    this.eventUpdateData.emit(this.groupsEmpl);
  }

}


