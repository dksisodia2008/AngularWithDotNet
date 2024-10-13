import { Injectable } from '@angular/core';
import { IUser } from './User'; 
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError,tap } from 'rxjs/operators';
import { json } from 'stream/consumers';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
 private userUrl = "https://localhost:5001/Users";
 getUsers() : Observable<IUser[]> {
       return this.http.get<IUser[]>(this.userUrl).pipe(
        tap(d => console.log('api response', JSON.stringify(d))),
        catchError(this.errorHandling)
      )

 };
   private errorHandling(err: HttpErrorResponse)
   {
    console.log(err);
    return throwError(err.message);
   }
   
}

//    getUsers(): IUser[] {
//    return [
//     {
//    "userId": 1,
//    "name": "Dheeraj Kumar",
//    "email": "dksisodia2008@gmail.com",
//    "phone": "9911414416",
//    "country":"India",
//    "cookingRating": 4
// },
// {
//   "userId": 2,
//   "name": "Neeraj Kumar",
//   "email": "dksisodia2008@gmail.com",
//   "phone": "9911414456",
//   "country":"India",
//   "cookingRating": 2
// }]};
// }


