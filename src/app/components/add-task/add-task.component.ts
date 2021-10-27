import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Task} from '../../Task'

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask:EventEmitter<Task>=new EventEmitter();
  
  //add properties
  text:string;
  day:string;
  reminder:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(!this.text){
      alert('Please add this task');
      return;
    }
    //gotta pass newTask to parent comp
    const newTask={
      text:this.text,
      day:this.day,
      reminder:this.reminder
    }
    this.onAddTask.emit(newTask);

    //@todo emit event
    
    
    this.text='';
    this.day='';
    this.reminder=false;
  
  
  }
}