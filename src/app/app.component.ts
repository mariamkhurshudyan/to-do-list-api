import { Component } from '@angular/core';
import { TodoList } from './shared/interface';
import { ApicallService } from './apicall.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'to-do-list-api';
  TodoList: TodoList[] = [] ;
  error: string = '';
  constructor(private ApicallService: ApicallService) { }

  ngOnInit(): void {
    this.ApicallService.getTodoList().subscribe(
      (data) => {this.TodoList = data},
      (error) => {this.error = error.message}
    );
  }
  userInputtedData: TodoList = {
    title: "",
    description: "",
    status: "",
  }

  add(userInputtedData: TodoList) {
    this.TodoList.push(userInputtedData);
  }

  delete(item: TodoList) {
    const i = this.TodoList.indexOf(item);
    this.TodoList.splice(i,1);
  }
}
