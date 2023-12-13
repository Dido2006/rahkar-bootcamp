import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {
  FormsModule,
  ReactiveFormsModule,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from './home/home.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, FormsModule, ReactiveFormsModule, NavbarComponent,HomeComponent]
})
export class AppComponent {
  form = new FormGroup({
    name: new FormControl(),
    password: new FormControl(),
  });
  OnClick() {
    console.log(this.form.value);
  }
  title = 'ToDoList';
  taskname: string = '';
  todolist: any[] = [];

  name = new FormControl();

  OnClickAdd() {
    let tasktodo = {
      taskname: this.taskname,
      taskid: this.todolist.length,
      Finished: false,
    };

    console.log(this.taskname);
    console.log(tasktodo);
    if (this.taskname != '') this.todolist.push(tasktodo);
    this.taskname = '';
  }

  OnTypeEvent(e: any) {
    this.taskname = e.target.value;
    console.log(this.taskname);
  }
  OnClickDelete(id: number) {
    for (let cureentid = 0; cureentid < this.todolist.length; cureentid++) {
      if (this.todolist[cureentid].taskid == id)
        this.todolist.splice(cureentid, 1);
    }
    console.log('delete', id);
  }
  OnClickComplated(id: number) {
    for (let cureentid = 0; cureentid < this.todolist.length; cureentid++) {
      console.log(cureentid);
      if (this.todolist[cureentid].taskid == id) {
        this.todolist[cureentid].Finished = !this.todolist[cureentid].Finished;
        console.log(this.todolist[cureentid].Finished);
        console.log(this.todolist[cureentid].Finished);
      }
    }
  }
}
