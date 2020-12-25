import {Component} from '@angular/core';

@Component({
  selector:'user',
  templateUrl:'./user.component.html',
  
})

export class UserComponent{
  firstName:string="Mustafa";
  age:number=10;
  email  : string = "mustafa@mail.com";
  imgurl : string = "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg"


   changeFirstName(newVal:string){
    this.firstName = newVal;
  }
  changeAge(newage:number){
    this.age = newage+5;
  }


} 