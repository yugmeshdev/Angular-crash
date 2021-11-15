import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'

import {Task} from '../Task'
import {Observable } from 'rxjs'
const httpOptions={
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private apiUrl='http://localhost:3000/tasks'

//component mai jaise service waise service mai httpclient
  constructor(private http:HttpClient) { 
    


  }


  getTasks():Observable<Task[]>{                                                                                                                                                                                                                          
    //to turn it into a observable (onlu comment lines app)
    // const tasks=of(TASKS);
    // return tasks;

    return this.http.get<Task[]>(this.apiUrl);

  }
  deleteTask(task:Task):Observable<Task>{
    const url=`${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  //httpoptions for submitting data
  updateTaskReminder(task:Task):Observable<Task>{
    const url=`${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url,task,httpOptions);
  }
  addTask(task:Task):Observable<Task>{
    return this.http.post<Task>(this.apiUrl,task,httpOptions);
  }
}
