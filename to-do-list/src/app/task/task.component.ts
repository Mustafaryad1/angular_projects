import { Component, OnInit } from '@angular/core';
import { TaskClass } from './task';



@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks:TaskClass[]=[]
  issue :string=""
  constructor() { }

  ngOnInit(): void {
  }
  compare( a:TaskClass, b:TaskClass ) {
    if ( a.done < b.done ){
      return -1;
    }
    if ( a.done > b.done ){
      return 1;
    }
    return 0;
  }
counter = 0;
  addTask(taskName:string){
    if(taskName){
    let exist = this.tasks.filter(function(task){return task.name===taskName}) //[{taskmustafa}] 
    if(exist.length === 0){
    let task:TaskClass = new TaskClass();
    task.name = taskName;
    // this.tasks.push(task)
    this.counter +=1;
    this.tasks.unshift(task)
    this.tasks.sort(this.compare)
    }else{
      this.issue = "Task exists"
    }
  }else{
    this.issue = "can't add empty task"
  }
  }
 
  deleteTask(index:number){
    if(!this.tasks[index].done){
      this.counter -=1
    }
     this.tasks.splice(index, 1); // undefine
     

  }
  
  checkTask(checked:boolean,index:number){
   this.counter = (checked)?--this.counter:++this.counter;
   this.tasks[index].done = (checked)?true:false;
   this.tasks.sort(this.compare)
  }
}
