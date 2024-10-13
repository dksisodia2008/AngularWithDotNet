import { Component, OnInit } from "@angular/core";
import { IUser } from "./User";
import { UserService } from "./user.service";


@Component({
    selector: 'user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit
{
    pageTitle: string ="Angular Demo";
    filteredUser:IUser[] = [];
    users_service: IUser[] = [];
    phoneNumberVisible : boolean = false;
    private _listFilter : string = '';
    errorMessage : string ="";
    constructor(private userService: UserService )
    {

    }
    //Direct initalization 

//      users: IUser[] =[
//      {
//          "userId": 1,
//         "name": "Dheeraj Kumar",
//         "email": "dksisodia2008@gmail.com",
//         "phone": "9911414416",
//         "country":"India",
//         "cookingRating": 4
//     },
//     {
//         "userId": 2,
//        "name": "Neeraj Kumar",
//        "email": "dksisodia2008@gmail.com",
//        "phone": "9911414456",
//        "country":"India",
//        "cookingRating":2
//    }];

   get listFilter(): string
   {
    return this._listFilter;
   }
   set listFilter(value: string)
   {
    this._listFilter = value;
    this.filteredUser = this.performFiltration(value);
   }

   showNumbers(): void {
    this.phoneNumberVisible = !this.phoneNumberVisible;
   }
 ngOnInit(): void {
     console.log("I am loading on nOninit");
     this.listFilter ='';
    //  this.users_service = this.userService.getUsers();
    //  this.filteredUser = this.users_service;
    this.userService.getUsers().subscribe({
 next: users =>{
  this.users_service = users;
  this.filteredUser = this.users_service;
 },
 error:err =>this.errorMessage = err
    })
 }  
 performFiltration(filterBy:string) : IUser[]{
    filterBy = filterBy.toLowerCase();
    return this.users_service.filter((user:IUser)=>user.name.toLowerCase().includes(filterBy))
 }
 onStarClicked(message:string) : void
 {
    this.pageTitle ='User list ' + message;
 }
}