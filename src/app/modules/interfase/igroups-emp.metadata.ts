export interface IGroupsEmpl{
    id:number;
    group_id:number;
    name:string;
    selected?: boolean;
    listEmployee?: IGroupsEmpl[];
}
