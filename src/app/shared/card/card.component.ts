import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todos-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

@Input() id : string;
@Input() status : string;
@Input() label : string;

@Output("editTodo") edit : EventEmitter<string>;
@Output("deleteTodo") delete : EventEmitter<string>;

  constructor() {
    this.id  = "";
    this.status = "";
    this.label = "";
    this.edit = new EventEmitter<string>();
    this.delete = new EventEmitter<string>();
  }

  ngOnInit() {
  }

  onEdit(){
    console.log("Edit requested");
    this.edit.emit(this.id);
  }

  onDelete(){
    console.log("Delete requested " );
    this.delete.emit(this.id);
  }
}
