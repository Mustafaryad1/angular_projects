import { Component, OnInit } from '@angular/core';
import { TaskClass } from './task';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks:TaskClass[]=[]
  
  constructor() { }

  ngOnInit(): void {
  }
counter = 0;
  addTask(taskName:string){
    if(taskName){
    let exist = this.tasks.filter(function(item){return item.name===taskName})
    if(exist.length===0){
    let task:TaskClass = new TaskClass();
    task.name = taskName;
    this.tasks.push(task)
    this.counter +=1; 
    }
  }
  }
 
  deleteTask(index:number){
    if(!this.tasks[index].done){
      this.counter -=1
    }
     this.tasks.splice(index, 1); // undefine
     

  }
  
  checkTask(checked:boolean,index:number){
    if(checked){
      this.counter -=1
      this.tasks[index].done=true;
    }else{
      this.counter +=1
      this.tasks[index].done=false;
    }
  }
}
