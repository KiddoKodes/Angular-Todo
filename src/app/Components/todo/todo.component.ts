import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/todo.model';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[]
  constructor(private todoService: TodoService) {

  }

  ngOnInit() {
    this.todoService.getTodos().subscribe(data => {
      this.todos = data.map(e => {
        return {
          ...(e.payload.doc.data() as object)
        } as Todo;
      })
    })
  }
  editShow = false
  seteditShow(edit) {
    console.log(edit)
    this.editShow = !this.editShow
    if(this.editShow){
      document.getElementById(edit).classList.add('visible')
      document.getElementById(edit).classList.remove('invisible')
    }
    else{
      document.getElementById(edit).classList.add('invisible')
      document.getElementById(edit).classList.remove('visible')

    }
  }
  getDate(){
    return new Date();
  }


  update(id:string,updatedTodo:string,todo:Todo,e) {
    e.preventDefault()
    if(updatedTodo==="") return
    this.todoService.updateTodo(id,{...todo,todo:updatedTodo,LastUpdated:this.getDate()});
  }

  delete(id: string) {
    this.todoService.deleteTodo(id);
  }
}
