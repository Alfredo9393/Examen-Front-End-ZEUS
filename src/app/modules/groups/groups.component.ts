import { Component, OnInit,Input } from '@angular/core';
import { GroupsService } from '../sevices/groups.service';
import { IGroups } from '../interfase/igroups.metadata';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { IGroupsEmpl } from '../interfase/igroups-emp.metadata';


@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  dataGroupsAll:IGroups[]
  dataGroupsAllCopy:IGroups[]
  dataGroups:IGroups[]=[]
  groupsEmployee:IGroupsEmpl[]=[]
  nameGroup:string

  constructor(private groupsService:GroupsService) { }

  ngOnInit() {
      this.getGroups()
  }

  getGroups(){
    this.groupsService.getGroups().subscribe(res=>{
      console.log(res)
      if(res.success)
        this.dataGroupsAll=res.data.groups
        this.dataGroupsAllCopy=res.data.groups
    })
  }


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }


  }


  removed(item:any){
    this.dataGroups.splice(this.dataGroups.findIndex((x:any) => x.id ==item.id ), 1);
    this.dataGroupsAll.push({id: item.id , name: item.name})
    this.groupsEmployee.splice(this.groupsEmployee.findIndex((x:any) => x.group_id == item.id ), 1);
  }

  
  eventUpdateData(data:any){
    let index = this.groupsEmployee.findIndex((x:any) => x.group_id == data.group_id )
    if (index != -1){
      this.groupsEmployee.splice(index, 1);
    }

    let filterSelected:any = new Array()
    data.listEmployee.forEach(item => {
      if(item.selected){
        filterSelected.push({
          id:item.id, 
          name:item.name,
          group_id:item.group_id,
        })
      }
    });

    if (filterSelected.length > 0){
      this.groupsEmployee.push({
        id:null,
        group_id:data.group_id,
        name:data.name,
        listEmployee:filterSelected
      })
    }
    
    // console.log(this.groupsEmployee)

  }

  next_(){
    console.log("next")
    console.log(this.groupsEmployee)
  }


  filterItem(event: any){
    if(event.target.value == "" ){
      this.dataGroupsAll = this.dataGroupsAllCopy
    }else{
      this.dataGroupsAll = Object.assign([], this.dataGroupsAllCopy).filter(
        item => item.name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1
      )
    }
  }



}





