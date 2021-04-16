import { Component } from '@angular/core';
import { TodoService } from './todo.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Angular-Todo';
  constructor(private todoService:TodoService) {
    
  } 
  getDate(){
    return new Date();
  }
  makeString(): string {
    let outString: string = '';
    let inOptions: string = 'abcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 8; i++) {

      outString += inOptions.charAt(Math.floor(Math.random() * inOptions.length));

    }

    return outString;
  }
  create(todo:string,e) {
    e.preventDefault()
    if(todo==="") return
    this.todoService.createTodo({id:this.makeString(),todo:todo,createdOn:this.getDate(),LastUpdated:this.getDate()});
  }
}
