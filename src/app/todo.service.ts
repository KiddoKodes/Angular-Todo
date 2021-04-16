import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Todo } from './todo.model';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private firebase:AngularFirestore) { }
  getTodos(){
    return this.firebase.collection('todos').snapshotChanges();
  }
  createTodo(todo:Todo){
    return this.firebase.collection('todos').doc(todo.id).set(todo)
  }
  updateTodo(id:string,updatedTodo:Todo){
    return this.firebase.doc(`todos/${id}`).update(updatedTodo)
  }
  deleteTodo(id:string){
    return this.firebase.doc(`todos/${id}`).delete()
  }
}
