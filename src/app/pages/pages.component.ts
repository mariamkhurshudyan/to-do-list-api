import { Component,Input,Output,EventEmitter} from '@angular/core';
import { TodoList } from '../shared/interface';
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent{

  @Input() item! : TodoList;
  @Output() newDataEvent = new EventEmitter<TodoList>()


  removeItem(item: TodoList) {
    this.newDataEvent.emit(item);

  }
}
