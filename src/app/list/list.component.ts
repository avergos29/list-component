import { Component, OnInit } from '@angular/core';
import { CardService } from '../shared/service/card.service';
import { FilterPipe } from '../shared/filter/filter.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'todos-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private _cardService : CardService, private _router : Router) {
    this.todos = [];
  }
  
  private todos : any[];

  ngOnInit() {
    this.loadAll();
  }

  loadAll(){
    this._cardService.fetch().subscribe( (cards: any[]) =>
    { this.todos = cards });
  }

  deleteTodo(cardId){
    this._cardService.delete(cardId).subscribe( () => this.loadAll() );
  }

  editTodo(card){
    this._router.navigate(["edit/"+ card]);
  }

}
